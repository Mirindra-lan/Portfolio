import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    const email = "lantosoamirindra@gmail.com";
    const phone = "+261346058262"; // sans espaces pour tel et WhatsApp
    const location = "Antananarivo, Madagascar";

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
                <form className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl shadow-lg">
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2">Message</label>
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full p-3 rounded-lg bg-black/20 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 mt-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:scale-105 transition-transform"
                    >
                        Send Message
                    </button>
                </form>

                {/* Informations de contact cliquables */}
                <div className="space-y-6">
                    {/* Email */}
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

                    {/* Téléphone */}
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

                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                        target="_blank"
                        className="flex items-center gap-4 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-xl hover:scale-105 transition-transform"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className="text-cyan-400 text-2xl" />
                        <div>
                            <h4 className="text-lg font-semibold text-cyan-300">WhatsApp</h4>
                            <p className="text-gray-400">{phone}</p>
                        </div>
                    </a>

                    {/* Location (non-cliquable) */}
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