"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setStatus("Message sent!");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Something went wrong...");
    }
  };

  return (
    <div className="flex flex-row">
      <div className="basis-1/3 m-12">
        <Image
          src="/img/mol1_transparent.png"
          alt="image showing a protein"
          width={500}
          height={300}
          priority
        />
      </div>
      <div className="basis-2/3">
        <h1 className="text-2xl mt-8 font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-10">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-2">{status}</p>}
      </div>
    </div>
  );
}
