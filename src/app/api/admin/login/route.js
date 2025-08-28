// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// export async function POST(req) {
//   try {
//     const { email, password } = await req.json();

//     console.log('Login attempt:', { email }); // Debug log

//     if (
//       email === process.env.ADMIN_EMAIL &&
//       password === process.env.ADMIN_PASSWORD
//     ) {
//       // Create JWT
//       const token = jwt.sign(
//         { email, role: 'admin' }, 
//         process.env.JWT_SECRET, 
//         { expiresIn: '1d' }
//       );

//       console.log('Login successful, setting cookie'); // Debug log

//       // Set cookie
//       const res = NextResponse.json({ success: true, message: 'Login successful' });
//       res.cookies.set('token', token, { // Changed from 'admin_token' to 'token'
//         httpOnly: true,
//         path: '/',
//         sameSite: 'strict',
//         secure: process.env.NODE_ENV === 'production',
//         maxAge: 60 * 60 * 24, // 1 day
//       });

//       return res;
//     }

//     console.log('Invalid credentials'); // Debug log
//     return NextResponse.json(
//       { success: false, message: 'Invalid credentials' }, 
//       { status: 401 }
//     );
//   } catch (error) {
//     console.error('Login error:', error);
//     return NextResponse.json(
//       { success: false, message: 'Server error' }, 
//       { status: 500 }
//     );
//   }
// }
