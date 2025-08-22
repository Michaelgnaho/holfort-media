// components/BookingEmail.tsx (Optional fallback component)
import React from "react";

interface BookingEmailProps {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  projectType: string;
  message: string;
}

const BookingEmail: React.FC<BookingEmailProps> = ({
  name,
  email,
  company,
  phone,
  service,
  budget,
  timeline,
  projectType,
  message,
}) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#6366f1" }}>New {projectType} Inquiry</h2>

      <div
        style={{
          backgroundColor: "#f9fafb",
          padding: "20px",
          borderRadius: "8px",
          margin: "20px 0",
        }}
      >
        <h3 style={{ color: "#374151", marginTop: 0 }}>Contact Information</h3>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Company:</strong> {company}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#f0f9ff",
          padding: "20px",
          borderRadius: "8px",
          margin: "20px 0",
        }}
      >
        <h3 style={{ color: "#374151", marginTop: 0 }}>Project Details</h3>
        <p>
          <strong>Service:</strong> {service}
        </p>
        <p>
          <strong>Budget:</strong> {budget}
        </p>
        <p>
          <strong>Timeline:</strong> {timeline}
        </p>
        <p>
          <strong>Project Type:</strong> {projectType}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "#fef3f2",
          padding: "20px",
          borderRadius: "8px",
          margin: "20px 0",
        }}
      >
        <h3 style={{ color: "#374151", marginTop: 0 }}>Message</h3>
        <p style={{ whiteSpace: "pre-line" }}>{message}</p>
      </div>

      <p style={{ color: "#6b7280", fontSize: "14px" }}>
        This message was sent from the Holfort Media contact form.
      </p>
    </div>
  );
};

export default BookingEmail;
