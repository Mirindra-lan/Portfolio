import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
      const htmlMessage = `
    <div style="font-family: Arial, sans-serif; background:#f4f6fb; padding:40px;">
      <div style="max-width:600px; margin:auto; background:white; border-radius:12px; padding:30px; box-shadow:0 10px 25px rgba(0,0,0,0.08);">
        <h2 style="color:#333;">Thank you for your message!</h2>
        <p style="font-size:16px; color:#555;">Hello <strong>${name}</strong> : "${email}"</p>
        <p style="font-size:15px; color:#555; line-height:1.6;">
          Thank you for contacting me through my portfolio website. I have successfully received your message and I will get back to you shortly.
        </p>
        <p style="font-size:15px; color:#555;">Here is a copy of the message you sent:</p>
        <div style="margin-top:15px; padding:20px; background:#f8f9ff; border-left:4px solid #6c63ff; border-radius:8px;">
          <p style="color:#444; line-height:1.6;">${message}</p>
        </div>
        <hr style="margin:30px 0; border:none; border-top:1px solid #eee;">
        <p style="font-size:14px; color:#777;">
          Best regards,<br>
          <strong>LANTOSOA Mirindra Lucien</strong><br>
          Web Developer
        </p>
      </div>
    </div>
  `
    await resend.emails.send({
      from: "Mirindra <onboarding@resend.dev>",
      to: ["lantosoamirindra@gmail.com", email],
      subject: "Contact Mirindra",
      html: htmlMessage
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ ok: false, error: "Email failed" }), { status: 500 });
  }
}