// // app/api/contact/route.js
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request) {
//   try {
//     const { name, email, message } = await request.json();

//     // 1. Create transporter
//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // 2. Email options
//     const mailOptions = {
//       from: email,
//       to: "info@tanprishdynamics.co.in", // Replace with your desired receiving email
//       subject: `New message from ${name}`,
//       text: `Email: ${email}\nName: ${name}\n\nMessage:\n${message}`,
//     };

//     // 3. Send the email
//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // or false for TLS/STARTTLS on port 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: "info@tanprishdynamics.co.in",
      subject: `New message from ${name}`,
      text: `Email: ${email}\nName: ${name}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
