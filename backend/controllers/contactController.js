const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const submitContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, service, message } = req.body;

    if (!firstName || !lastName || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields!',
      });
    }

    // Save to MongoDB
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
    });
    await newContact.save();

    // Send email notification (non-blocking)
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.NOTIFY_EMAIL,
        subject: `🔔 New Contact Form Submission - ADS Nepal`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="background: #1B2050; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="color: #B8A034; margin: 0;">ADS Nepal</h1>
              <p style="color: white; margin: 8px 0 0;">New Contact Form Submission</p>
            </div>
            <div style="padding: 24px;">
              <h2 style="color: #1B2050;">Contact Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #f0f0f0;">
                  <td style="padding: 12px 0; color: #666; width: 140px;">Full Name</td>
                  <td style="padding: 12px 0; color: #1B2050; font-weight: bold;">${firstName} ${lastName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f0f0f0;">
                  <td style="padding: 12px 0; color: #666;">Email</td>
                  <td style="padding: 12px 0; color: #1B2050; font-weight: bold;">${email}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f0f0f0;">
                  <td style="padding: 12px 0; color: #666;">Phone</td>
                  <td style="padding: 12px 0; color: #1B2050; font-weight: bold;">${phone || 'Not provided'}</td>
                </tr>
                <tr style="border-bottom: 1px solid #f0f0f0;">
                  <td style="padding: 12px 0; color: #666;">Service</td>
                  <td style="padding: 12px 0; color: #1B2050; font-weight: bold;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #666;">Message</td>
                  <td style="padding: 12px 0; color: #1B2050; font-weight: bold;">${message}</td>
                </tr>
              </table>
            </div>
            <div style="background: #f8f7f3; padding: 16px; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="color: #666; margin: 0; font-size: 14px;">This email was sent automatically from ADS Nepal website</p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.log('Email sending failed (non-blocking):', emailError.message);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! We will get back to you soon!',
    });

  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again!',
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong!',
    });
  }
};

module.exports = { submitContact, getContacts };