"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const email = "lantosoamirindra@gmail.com";
  const phone = "+261346058262";
  const location = "Antananarivo, Madagascar";

  const formRef = useRef<HTMLFormElement>(null);

  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const sendMail = async (event: any) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMsg("Failed to send your message. Please try again.");
    }
  };

  const getButtonContent = () => {
    switch (status) {
      case "sending":
        return "Sending...";
      case "sent":
        return (
          <span className="flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faCheck} /> Sent
          </span>
        );
      default:
        return "Send Message";
    }
  };

  return (
    <section id="contacts" className="py-24 text-white bg-black scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]">
          Contact Me
        </h2>
        <p className="text-gray-400 mt-4">
          Get in touch to discuss your project or just say hi
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">
        
        {/* Form */}
        <form
          ref={formRef}
          onSubmit={sendMail}
          className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-lg flex flex-col gap-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-black/20 border border-white/10"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-black/20 border border-white/10"
            onChange={(e) => setMail(e.target.value)}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-lg bg-black/20 border border-white/10"
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          {status === "error" && <p className="text-red-400">{errorMsg}</p>}

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full py-3 mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition disabled:opacity-50"
          >
            {getButtonContent()}
          </button>
        </form>

        {/* Contact info (unchanged) */}
        <div className="space-y-6">
          <a href={`mailto:${email}`} className="flex items-center gap-4 bg-black/40 border border-white/10 p-6 rounded-xl">
            <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-300">Email</h4>
              <p className="text-gray-400">{email}</p>
            </div>
          </a>

          <a href={`tel:${phone}`} className="flex items-center gap-4 bg-black/40 border border-white/10 p-6 rounded-xl">
            <FontAwesomeIcon icon={faPhone} className="text-cyan-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-300">Phone</h4>
              <p className="text-gray-400">{phone}</p>
            </div>
          </a>

          <a href={`https://wa.me/${phone.replace(/\D/g, "")}`} target="_blank" className="flex items-center gap-4 bg-black/40 border border-white/10 p-6 rounded-xl">
            <FontAwesomeIcon icon={faWhatsapp} className="text-cyan-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-300">WhatsApp</h4>
              <p className="text-gray-400">{phone}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-black/40 border border-white/10 p-6 rounded-xl">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-300">Location</h4>
              <p className="text-gray-400">{location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
