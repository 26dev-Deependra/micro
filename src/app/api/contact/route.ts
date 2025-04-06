import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email, message } = await req.json();
  console.log("route active");

  try {
    const data = await resend.emails.send({
      from: "Contact Form <your@email.com>",
      to: "26dev.deependra@gmail.com",
      subject: "New message from your website",
      html: `<p><strong>From:</strong> ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
