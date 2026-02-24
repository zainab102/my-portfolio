import { connectDB } from '@/lib/mongodb';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const name = (body?.name || '').trim();
    const email = (body?.email || '').trim().toLowerCase();
    const subject = (body?.subject || '').trim();
    const message = (body?.message || '').trim();

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (message.length < 10) {
      return Response.json({ error: 'Message is too short.' }, { status: 400 });
    }

    const db = await connectDB();
    await db.collection('contactMessages').insertOne({
      name,
      email,
      subject,
      message,
      createdAt: new Date(),
      source: 'portfolio-contact-form',
    });

    return Response.json(
      { success: true, message: 'Thank you! Your message has been sent successfully.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST /api/contact error:', error);
    return Response.json(
      { error: 'Unable to send message right now. Please try again later.' },
      { status: 500 }
    );
  }
}

