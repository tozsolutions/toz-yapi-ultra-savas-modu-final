// Contact Form API Handler for Vercel Serverless Functions
// This handles contact form submissions

import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { name, email, phone, message, subject }: ContactFormData = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        required: ['name', 'email', 'message'],
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email format',
      });
    }

    // Validate phone format (optional)
    if (phone) {
      const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
      if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        return res.status(400).json({
          error: 'Invalid phone format',
        });
      }
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    
    // For now, we'll just log and return success
    console.log('[Contact Form Submission]', {
      timestamp: new Date().toISOString(),
      data: {
        name,
        email,
        phone,
        message,
        subject: subject || 'General Inquiry',
      },
    });

    // TODO: Implement actual email sending
    // Example with SendGrid, Resend, or other email service
    // await sendEmail({ to: 'merhaba@tozyapi.com.tr', subject: 'New Contact Form Submission', ... });

    // TODO: Save to database
    // await db.contactForm.create({ data: { name, email, phone, message, subject } });

    return res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        received: true,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('[Contact Form Error]', error);
    
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
