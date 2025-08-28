// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// export async function GET(req) {
//   const token = req.cookies.get('token')?.value; // Changed from 'admin_token' to 'token'

//   if (!token) {
//     return NextResponse.json({ admin: false, message: 'No token found' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     return NextResponse.json({ admin: true, user: decoded });
//   } catch (error) {
//     console.error('Token verification failed:', error);
//     return NextResponse.json({ admin: false, message: 'Invalid token' });
//   }
// }
