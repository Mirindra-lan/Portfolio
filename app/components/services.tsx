export default function Services() {
    return (
        <section
            id="services"
            className="py-24 relative bg-white text-gray-900 dark:bg-black dark:text-white"
        >
            <div className="text-center mb-16">
                <h2
                    className="text-5xl font-bold
                    bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500
                    dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400
                    bg-clip-text text-transparent
                    drop-shadow-[0_0_10px_rgba(56,189,248,0.4)]
                    dark:drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]"
                >
                    My Services
                </h2>

                <p className="text-gray-600 mt-4 dark:text-gray-400">
                    Turning ideas into scalable web solutions
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

                {/* CARD 1 */}
                <div className="relative group">
                    <div
                        className="
                        absolute -inset-0.5
                        bg-gradient-to-r from-cyan-400 to-blue-500
                        dark:from-cyan-500 dark:to-blue-600
                        rounded-xl blur opacity-40
                        group-hover:opacity-100
                        transition duration-500
                    "
                    ></div>

                    <div
                        className="
                        relative p-8 rounded-xl
                        bg-gray-100 border border-gray-200
                        dark:bg-black/40 dark:backdrop-blur-xl dark:border-white/10
                    "
                    >
                        <h3 className="text-xl font-semibold mb-3 text-cyan-600 dark:text-cyan-300">
                            Fullstack Development
                        </h3>

                        <p className="text-gray-700 dark:text-gray-400">
                            Complete web applications using React, Next.js, Node.js, PHP, Symfony and modern databases.
                        </p>
                    </div>
                </div>


                {/* CARD 2 */}
                <div className="relative group">
                    <div
                        className="
                        absolute -inset-0.5
                        bg-gradient-to-r from-cyan-400 to-blue-500
                        dark:from-cyan-500 dark:to-blue-600
                        rounded-xl blur opacity-40
                        group-hover:opacity-100
                        transition duration-500
                    "
                    ></div>

                    <div
                        className="
                        relative p-8 rounded-xl
                        bg-gray-100 border border-gray-200
                        dark:bg-black/40 dark:backdrop-blur-xl dark:border-white/10
                    "
                    >
                        <h3 className="text-xl font-semibold mb-3 text-cyan-600 dark:text-cyan-300">
                            Backend & APIs
                        </h3>

                        <p className="text-gray-700 dark:text-gray-400">
                            Scalable REST APIs, AI APIs, authentication systems and optimized backend architectures.
                        </p>
                    </div>
                </div>


                {/* CARD 3 */}
                <div className="relative group">
                    <div
                        className="
                        absolute -inset-0.5
                        bg-gradient-to-r from-cyan-400 to-blue-500
                        dark:from-cyan-500 dark:to-blue-600
                        rounded-xl blur opacity-40
                        group-hover:opacity-100
                        transition duration-500
                    "
                    ></div>

                    <div
                        className="
                        relative p-8 rounded-xl
                        bg-gray-100 border border-gray-200
                        dark:bg-black/40 dark:backdrop-blur-xl dark:border-white/10
                    "
                    >
                        <h3 className="text-xl font-semibold mb-3 text-cyan-600 dark:text-cyan-300">
                            DevOps & Deployment
                        </h3>

                        <p className="text-gray-700 dark:text-gray-400">
                            Docker, CI/CD pipelines, SEO optimization, automation and production deployment.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}