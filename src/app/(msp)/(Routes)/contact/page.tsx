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
      <div className="basis-1/3 m-10">
        <Image
          src="/img/hero.png"
          alt="image showing a protein"
          width={600}
          height={300}
          priority
        />
      </div>
      <div className="basis-2/3">
        <h1 className="text-2xl mt-8 font-bold mb-2">Contact Us</h1>
        <h6>
          <i>
            (We would love to hear from you. Whether you have a question,
            feedback, or want to collaborate on the MicroSpec.)
          </i>
        </h6>
        <form onSubmit={handleSubmit} className="space-y-8 mt-4">
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
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-2">{status}</p>}
      </div>
    </div>
  );
}
