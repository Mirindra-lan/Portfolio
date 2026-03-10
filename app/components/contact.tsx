"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

export default function Contact() {
  const email = "lantosoamirindra@gmail.com";
  const phone = "+261346058262";
  const location = "Antananarivo, Madagascar";

  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const sendMail = async (event:any) => {
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
    <section
      id="contacts"
      className="py-24 scroll-mt-24 bg-white text-gray-900 dark:bg-black dark:text-white"
    >
      <div className="text-center mb-16">
        <h2
          className="
          text-5xl font-bold
          bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500
          dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400
          bg-clip-text text-transparent
          drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]
          dark:drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]
        "
        >
          Contact Me
        </h2>

        <p className="text-gray-600 mt-4 dark:text-gray-400">
          Get in touch to discuss your project or just say hi
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* FORM */}
        <form
          onSubmit={sendMail}
          className="
          relative p-8 rounded-xl shadow-lg flex flex-col gap-4
          bg-gray-100 border border-gray-200
          dark:bg-black/40 dark:backdrop-blur-xl dark:border-white/10
        "
        >

          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Your Name"
              className="
              w-full p-3 rounded-lg
              bg-white border border-gray-300 text-gray-900
              focus:outline-none focus:ring-2 focus:ring-cyan-500
              dark:bg-black/20 dark:border-white/10 dark:text-white dark:focus:ring-cyan-400
            "
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>


          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Your Email"
              className="
              w-full p-3 rounded-lg
              bg-white border border-gray-300 text-gray-900
              focus:outline-none focus:ring-2 focus:ring-cyan-500
              dark:bg-black/20 dark:border-white/10 dark:text-white dark:focus:ring-cyan-400
            "
              onChange={(e) => setMail(e.target.value)}
              required
            />
          </div>


          <div>
            <label className="block text-gray-600 dark:text-gray-400 mb-2">
              Message
            </label>

            <textarea
              rows={5}
              placeholder="Your Message"
              className="
              w-full p-3 rounded-lg
              bg-white border border-gray-300 text-gray-900
              focus:outline-none focus:ring-2 focus:ring-cyan-500
              dark:bg-black/20 dark:border-white/10 dark:text-white dark:focus:ring-cyan-400
            "
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {status === "error" && (
            <p className="text-red-500 dark:text-red-400">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="
            w-full py-3 mt-2 rounded-lg font-semibold
            bg-gradient-to-r from-cyan-500 to-blue-600
            hover:scale-105 transition-transform
            disabled:opacity-50
          "
          >
            {getButtonContent()}
          </button>
        </form>


        {/* CONTACT INFO */}
        <div className="space-y-6">

          <a
            href={`mailto:${email}`}
            className="
            flex items-center gap-4 p-6 rounded-xl
            bg-gray-100 border border-gray-200
            hover:scale-105 transition-transform
            dark:bg-black/40 dark:border-white/10
          "
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-cyan-500 dark:text-cyan-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">Email</h4>
              <p className="text-gray-600 dark:text-gray-400">{email}</p>
            </div>
          </a>


          <a
            href={`tel:${phone}`}
            className="
            flex items-center gap-4 p-6 rounded-xl
            bg-gray-100 border border-gray-200
            hover:scale-105 transition-transform
            dark:bg-black/40 dark:border-white/10
          "
          >
            <FontAwesomeIcon icon={faPhone} className="text-cyan-500 dark:text-cyan-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">Phone</h4>
              <p className="text-gray-600 dark:text-gray-400">{phone}</p>
            </div>
          </a>


          <a
            href={`https://wa.me/${phone.replace(/\D/g, "")}`}
            target="_blank"
            className="
            flex items-center gap-4 p-6 rounded-xl
            bg-gray-100 border border-gray-200
            hover:scale-105 transition-transform
            dark:bg-black/40 dark:border-white/10
          "
          >
            <FontAwesomeIcon icon={faWhatsapp} className="text-cyan-500 dark:text-cyan-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">WhatsApp</h4>
              <p className="text-gray-600 dark:text-gray-400">{phone}</p>
            </div>
          </a>


          <div
            className="
            flex items-center gap-4 p-6 rounded-xl
            bg-gray-100 border border-gray-200
            dark:bg-black/40 dark:border-white/10
          "
          >
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-cyan-500 dark:text-cyan-400 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold text-cyan-600 dark:text-cyan-300">Location</h4>
              <p className="text-gray-600 dark:text-gray-400">{location}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}