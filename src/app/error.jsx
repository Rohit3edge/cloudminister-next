"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Image src="/error-image.svg" alt="Error" width={400} height={300} />
      <h1 className="text-4xl font-bold text-red-500 mt-4">Oops! Something went wrong.</h1>
      <p className="text-gray-600 mt-2">{error?.message || "Please try again later."}</p>

      <button
        onClick={() => reset()}
        className="mt-5 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Reload Page
      </button>
    </div>
  );
}
