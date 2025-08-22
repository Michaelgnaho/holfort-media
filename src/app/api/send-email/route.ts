import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const {
      name,
      email,
      company,
      phone,
      service,
      budget,
      timeline,
      message,
      projectType,
    } = formData;

    // Validate required fields (server-side for security)
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Construct email content (simple HTML for now; you can create a React template if needed)
    const emailContent = `
      <h1>New Booking Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Budget:</strong> ${budget || "N/A"}</p>
      <p><strong>Timeline:</strong> ${timeline || "N/A"}</p>
      <p><strong>Project Type:</strong> ${projectType}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: `Contact Form <${email}>`, // Replace with your verified sender email
      to: ["gnahomichael@gmail.com"],
      subject: "New Booking Submission",
      html: emailContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
