export default function Skills() {
    return (
        <section
            id="skills"
            className="py-24 scroll-mt-24 bg-white text-gray-900 dark:bg-black dark:text-white"
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
                    My Skills
                </h2>

                <p className="text-gray-600 mt-4 dark:text-gray-400">
                    Technologies I use to build modern applications
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

                {/* FRONTEND */}
                <div className="bg-gray-100 border border-gray-200 p-8 rounded-xl transition
                dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10
                hover:shadow-cyan-500/30 hover:shadow-lg">

                    <h3 className="text-xl font-semibold mb-6 text-cyan-600 dark:text-cyan-300">
                        Frontend
                    </h3>

                    <div className="space-y-4">

                        <div>
                            <p className="text-gray-700 dark:text-gray-300">
                                React / Next.js / Vue
                            </p>

                            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                                <div className="bg-cyan-500 dark:bg-cyan-400 h-2 rounded-full w-[90%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-700 dark:text-gray-300">
                                JavaScript / TypeScript
                            </p>

                            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                                <div className="bg-cyan-500 dark:bg-cyan-400 h-2 rounded-full w-[95%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Tailwind CSS
                            </p>

                            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                                <div className="bg-cyan-500 dark:bg-cyan-400 h-2 rounded-full w-[90%]"></div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* BACKEND */}
                <div className="bg-gray-100 border border-gray-200 p-8 rounded-xl transition
                dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10
                hover:shadow-blue-500/30 hover:shadow-lg">

                    <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-300">
                        Backend
                    </h3>

                    <div className="space-y-4">

                        <div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Node.js / PHP / Python
                            </p>

                            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                                <div className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full w-[90%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Express / Adonis / Symfony / Laravel
                            </p>

                            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                                <div className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full w-[85%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-700 dark:text-gray-300">
                                MongoDB / PostgreSQL / MySQL
                            </p>

                            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                                <div className="bg-blue-500 dark:bg-blue-400 h-2 rounded-full w-[85%]"></div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* DEVOPS */}
                <div className="bg-gray-100 border border-gray-200 p-8 rounded-xl transition
                dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10
                hover:shadow-purple-500/30 hover:shadow-lg">

                    <h3 className="text-xl font-semibold mb-6 text-purple-600 dark:text-purple-300">
                        DevOps
                    </h3>

                    <div className="space-y-4">

                        <div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Docker
                            </p>

                            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                                <div className="bg-purple-500 dark:bg-purple-400 h-2 rounded-full w-[85%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Git / GitHub
                            </p>

                            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                                <div className="bg-purple-500 dark:bg-purple-400 h-2 rounded-full w-[90%]"></div>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-700 dark:text-gray-300">
                                CI/CD
                            </p>

                            <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-2 mt-1">
                                <div className="bg-purple-500 dark:bg-purple-400 h-2 rounded-full w-[80%]"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}