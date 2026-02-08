import nodemailer from 'nodemailer';

// Lazily create transporter to avoid build-time errors if env vars are missing
let transporter = null;

const getTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return transporter;
};

export async function sendBookingEmails(booking) {
  const { fullName, email, date, timeSlot, companyName } = booking;

  const companyEmail = process.env.CONTACT_EMAIL || 'contact@amelcorp.com';
  const partnersEmail = process.env.PARTNERS_EMAIL || 'partners@amelcorp.com';

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const paymentLink = `${baseUrl}/payment/${booking.id}`;
  const showPaymentLink = booking.paymentStatus === 'unpaid' && process.env.NEXT_PUBLIC_ENABLE_PAYMENT === 'true';

  const mailOptionsToClient = {
    from: process.env.SMTP_FROM || `"Amelcorp Logistics" <noreply@amelcorp.com>`,
    to: email,
    subject: `Booking Confirmation - Amelcorp Logistics`,
    html: `
      <h1>Hello ${fullName},</h1>
      <p>Your booking with Amelcorp Logistics has been received.</p>
      <p><strong>Details:</strong></p>
      <ul>
        <li>Date: ${date}</li>
        <li>Time: ${timeSlot}</li>
      </ul>
      ${showPaymentLink ? `
        <p><strong>Payment Required:</strong></p>
        <p>Your booking is confirmed, but payment is pending. Please click the link below to complete your payment:</p>
        <p><a href="${paymentLink}" style="background-color: #0070ba; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Pay Now</a></p>
        <p>Or copy this link: ${paymentLink}</p>
      ` : ''}
      <p>Our team will contact you shortly to confirm the details.</p>
      <br/>
      <p>Best regards,</p>
      <p>The Amelcorp Team</p>
    `,
  };

  const mailOptionsToAdmin = {
    from: process.env.SMTP_FROM || `"System" <noreply@amelcorp.com>`,
    to: companyEmail,
    subject: `New Consultation Booking - ${fullName}`,
    html: `
      <h1>New Booking Received</h1>
      <p><strong>Client Details:</strong></p>
      <ul>
        <li>Name: ${fullName}</li>
        <li>Email: ${email}</li>
        <li>Company: ${companyName || 'N/A'}</li>
        <li>Date: ${date}</li>
        <li>Time: ${timeSlot}</li>
      </ul>
    `,
  };

  try {
    await getTransporter().sendMail(mailOptionsToClient);
    await getTransporter().sendMail(mailOptionsToAdmin);
    return { success: true };
  } catch (error) {
    console.error('Error sending emails:', error);
    return { success: false, error };
  }
}
