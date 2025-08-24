import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, service, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail SMTP
    // You'll need to set up environment variables for these
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    })

    // Email content
    const emailContent = `
      New Contact Form Submission from Gems Pride Website
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Company: ${company || 'Not provided'}
      Service Interest: ${service}
      
      Message:
      ${message}
      
      ---
      This email was sent from the Gems Pride contact form.
    `

    // Send email to your business email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'yagnikdurgesh@gmail.com', // Your business email
      subject: `New Contact Form Submission - ${service}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #065F46;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${service}</p>
          <h3 style="color: #065F46;">Message:</h3>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">This email was sent from the Gems Pride contact form.</p>
        </div>
      `,
    })

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Gems Pride',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #065F46;">Thank you for your inquiry!</h2>
          <p>Dear ${firstName},</p>
          <p>Thank you for contacting Gems Pride. We have received your inquiry about <strong>${service}</strong> and will respond within 24-48 hours.</p>
          <p>Our expert team will review your requirements and provide you with detailed information and a custom quote.</p>
          <p>Best regards,<br>The Gems Pride Team</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            Gems Pride - Professional Electron Beam Services<br>
            Email: yagnikdurgesh@gmail.com<br>
            Phone: +91 7977753638
          </p>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 