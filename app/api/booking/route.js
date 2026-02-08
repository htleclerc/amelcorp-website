import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendBookingEmails } from '@/lib/mail';

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const body = await request.json();
        const {
            fullName,
            email,
            phone,
            companyName,
            businessStructure,
            primaryIndustry,
            orderValue,
            targetCountry,
            launchTimeline,
            date,
            timeSlot,
            status,
            paymentStatus,
            paymentMethod
        } = body;

        // Basic validation: email is required for new bookings
        if (!email && !body.id) {
            return NextResponse.json({ error: 'Email address is required' }, { status: 400 });
        }

        // Save or Update to database
        const bookingData = {
            fullName,
            email,
            phone,
            companyName,
            businessStructure,
            primaryIndustry,
            orderValue,
            targetCountry,
            launchTimeline,
            date,
            timeSlot,
            status: status || 'qualification',
            paymentStatus: paymentStatus || 'unpaid',
            paymentMethod
        };

        let booking;
        if (body.id) {
            booking = await prisma.booking.update({
                where: { id: body.id },
                data: bookingData,
            });
        } else {
            booking = await prisma.booking.create({
                data: bookingData,
            });
        }

        // Send emails logic
        let emailResult = { success: false };
        const shouldSendEmail = status === 'scheduled' || paymentStatus === 'paid' || paymentStatus === 'pay_later' || (paymentStatus === 'unpaid' && process.env.NEXT_PUBLIC_ENABLE_PAYMENT === 'true');

        if (shouldSendEmail) {
            try {
                emailResult = await sendBookingEmails(booking);
            } catch (mailError) {
                console.error('Mail error:', mailError);
            }
        }

        return NextResponse.json({
            success: true,
            booking,
            emailSent: emailResult.success
        });

    } catch (error) {
        console.error('Booking error:', error);
        return NextResponse.json({
            error: 'Internal server error'
        }, { status: 500 });
    }
}
