import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

// Helper to verify reCAPTCHA
async function verifyRecaptcha(token) {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
        method: 'POST',
    });
    const data = await response.json();
    return data.success;
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { fullName, email, phone, companyName, businessType, industry, country, orderValue, timeline, volume, details, captchaToken } = body;

        // 1. Verify CAPTCHA
        if (!captchaToken) {
            return NextResponse.json({ success: false, error: 'CAPTCHA token is missing' }, { status: 400 });
        }
        const isCaptchaValid = await verifyRecaptcha(captchaToken);
        if (!isCaptchaValid) {
            return NextResponse.json({ success: false, error: 'Invalid CAPTCHA' }, { status: 400 });
        }

        // 2. Rate Limiting: Check previous attempts
        const attempts = await prisma.contactAttempt.count({
            where: { email: email.toLowerCase() }
        });

        if (attempts >= 5) {
            return NextResponse.json({ success: false, error: 'Rate limit exceeded. Maximum 5 contact attempts per email.' }, { status: 429 });
        }

        // 3. Record the attempt
        await prisma.contactAttempt.create({
            data: { email: email.toLowerCase() }
        });

        // 4. Send Email
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_PORT === '465',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_FROM || `"Amelcorp Contact" <noreply@amelcorp.com>`,
            to: process.env.CONTACT_EMAIL || 'contact@amelcorp.com',
            subject: `New Contact Inquiry from ${fullName}`,
            html: `
                <h1>New Contact Form Submission</h1>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
                <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
                <p><strong>Business Type:</strong> ${businessType}</p>
                <p><strong>Industry:</strong> ${industry}</p>
                <p><strong>Target Country:</strong> ${country}</p>
                <p><strong>Order Value:</strong> ${orderValue}</p>
                <p><strong>Timeline:</strong> ${timeline}</p>
                <p><strong>Volume:</strong> ${volume}</p>
                <p><strong>Details:</strong></p>
                <p>${details || 'No additional details provided.'}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Message sent successfully' });

    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}
