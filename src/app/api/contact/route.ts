// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();
    console.log("Received contact form submission:", body);

    // Validate required fields
    const { name, email, service, message } = body;

    if (!name || !email || !service || !message) {
      console.error("Missing required fields:", {
        name,
        email,
        service,
        message,
      });
      return NextResponse.json(
        {
          error:
            "Missing required fields: name, email, service, and message are required",
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create email content
    const emailContent = `
      New ${body.projectType || "consultation"} inquiry from ${name}
      
      Contact Information:
      - Name: ${name}
      - Email: ${email}
      - Company: ${body.company || "N/A"}
      - Phone: ${body.phone || "N/A"}
      
      Project Details:
      - Service: ${service}
      - Budget: ${body.budget || "N/A"}
      - Timeline: ${body.timeline || "N/A"}
      - Project Type: ${body.projectType || "consultation"}
      
      Message:
      ${message}
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Holfort Media <no-reply@holfortmedia.com.ng>", // Use your verified domain
      to: ["holfortmedia@gmail.com"], // Your email
      subject: `New ${body.projectType || "consultation"} Inquiry from ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">New ${body.projectType || "consultation"} Inquiry</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${body.company || "N/A"}</p>
            <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
          </div>
          
          <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Project Details</h3>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Budget:</strong> ${body.budget || "N/A"}</p>
            <p><strong>Timeline:</strong> ${body.timeline || "N/A"}</p>
            <p><strong>Project Type:</strong> ${body.projectType || "consultation"}</p>
          </div>
          
          <div style="background-color: #fef3f2; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from the Holfort Media contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      {
        message: "Email sent successfully",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
