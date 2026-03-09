"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // faCheck pour bouton sent
import { useState } from "react";

export default function Contact() {
  const email = "lantosoamirindra@gmail.com";
  const phone = "+261346058262";
  const location = "Antananarivo, Madagascar";

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
    const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: mail, message }),
    });

    if (!res.ok) throw new Error("Failed");

    setStatus("sent");
  } catch (err: any) {
    console.error(err);
    setStatus("error");
    setErrorMsg("Failed to send your message. Please try again.");
  }
  };

  // Texte et icône du bouton selon l'état
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
      case "error":
      case "idle":
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
        {/* Formulaire */}
        <form
          onSubmit={sendMail}
          className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-lg flex flex-col gap-4"
        >
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onChange={(e) => setMail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {status === "error" && <p className="text-red-400">{errorMsg}</p>}

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="w-full py-3 mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50"
          >
            {getButtonContent()}
          </button>
        </form>

        {/* Informations de contact cliquables */}
        <div className="space-y-6">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-300">Email</h4>
              <p className="text-gray-400">{email}</p>
            </div>
          </a>

          <a
            href={`tel:${phone}`}
            className="flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <FontAwesomeIcon icon={faPhone} className="text-cyan-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-300">Phone</h4>
              <p className="text-gray-400">{phone}</p>
            </div>
          </a>

          <a
            href={`https://wa.me/${phone.replace(/\D/g, "")}`}
            target="_blank"
            className="flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-cyan-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-300">WhatsApp</h4>
              <p className="text-gray-400">{phone}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl">
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