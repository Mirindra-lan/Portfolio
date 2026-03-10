export default function Services() {
    return <section id="services" className="py-24 text-white relative bg-black">

        <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]">
            My Services
            </h2>
            <p className="text-gray-400 mt-4">
            Turning ideas into scalable web solutions
            </p>
        </div>


        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                    Fullstack Development
                    </h3>
                    <p className="text-gray-400">
                    Complete web applications using React, Next.js, Node.js, PHP, symfony and modern
                    databases.
                    </p>
                </div>
            </div>


            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                    Backend & APIs
                    </h3>
                    <p className="text-gray-400">
                    Scalable REST APIs, AI APIs, authentication systems and optimized backend
                    architectures.
                    </p>
                </div>
            </div>


            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl">
                    <h3 className="text-xl font-semibold mb-3 text-cyan-300">
                    DevOps & Deployment
                    </h3>
                    <p className="text-gray-400">
                    Docker, CI/CD pipelines, SEO optimisation,automation and production deployment.
                    </p>
                </div>
            </div>
        </div>
    </section>
}