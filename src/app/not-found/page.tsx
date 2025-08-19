import React from "react";

export default function notFoundPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-center text-red-600 mb-6">
        Page Not Found
      </h1>
      <p className="text-center text-gray-700 mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="text-center text-gray-500">
        Please check the URL or return to the homepage.
      </p>
    </div>
  );
}
