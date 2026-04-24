import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, organization, currentSystem, message } =
      await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Cedar Infotech Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? "contact@cedarinfotech.com",
      replyTo: email,
      subject: `New enquiry from ${name}${organization ? ` — ${organization}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "—"}`,
        `Organization: ${organization || "—"}`,
        `Current System / Challenge: ${currentSystem || "—"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <table style="font-family:sans-serif;font-size:15px;color:#1a1a2e;max-width:600px">
          <tr><td style="padding:24px 0 8px"><h2 style="margin:0;color:#0a0a0a">New enquiry via cedarinfotech.com</h2></td></tr>
          <tr><td style="padding:4px 0"><b>Name:</b> ${name}</td></tr>
          <tr><td style="padding:4px 0"><b>Email:</b> <a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:4px 0"><b>Phone:</b> ${phone || "—"}</td></tr>
          <tr><td style="padding:4px 0"><b>Organization:</b> ${organization || "—"}</td></tr>
          <tr><td style="padding:4px 0"><b>Current System / Challenge:</b> ${currentSystem || "—"}</td></tr>
          <tr><td style="padding:16px 0 4px;border-top:1px solid #eee"><b>Message:</b><br><br>${message.replace(/\n/g, "<br>")}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
