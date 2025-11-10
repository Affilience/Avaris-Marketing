import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email
    const data = await resend.emails.send({
      from: 'Avaris Marketing Contact Form <onboarding@resend.dev>',
      to: ['taylorelliott14@icloud.com'],
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #283618; border-bottom: 2px solid #B7B7A4; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;">
              <strong style="color: #283618;">Name:</strong><br/>
              ${name}
            </p>

            <p style="margin: 10px 0;">
              <strong style="color: #283618;">Email:</strong><br/>
              <a href="mailto:${email}" style="color: #283618;">${email}</a>
            </p>

            <p style="margin: 10px 0;">
              <strong style="color: #283618;">Subject:</strong><br/>
              ${subject}
            </p>

            <p style="margin: 10px 0;">
              <strong style="color: #283618;">Message:</strong><br/>
              <div style="background-color: #F0EFEB; padding: 15px; border-radius: 8px; margin-top: 10px;">
                ${message.replace(/\n/g, '<br/>')}
              </div>
            </p>
          </div>

          <p style="color: #B7B7A4; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #D4D4D4;">
            This email was sent from the Avaris Marketing website contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
