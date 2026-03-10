function AboutMe() {
    return (
        <section id="about" className="py-24 scroll-mt-24 bg-white text-gray-900 dark:bg-black dark:text-white">
            
            <div className="text-center mb-20">
                <h2 className="text-5xl font-bold 
                bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 
                dark:from-cyan-400 dark:via-blue-500 dark:to-cyan-400
                bg-clip-text text-transparent 
                drop-shadow-[0_0_10px_rgba(56,189,248,0.4)] 
                dark:drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]">
                    About Me
                </h2>

                <p className="text-gray-600 mt-4 dark:text-gray-400">
                    Get to know more about me and my work
                </p>
            </div>


            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">

                {/* IMAGE */}
                <div className="relative group">
                    <div className="
                        absolute -inset-1 
                        bg-gradient-to-r from-cyan-400 to-blue-500
                        dark:from-cyan-500 dark:to-blue-600
                        rounded-xl blur opacity-40 
                        group-hover:opacity-100 transition
                    "></div>

                    <img
                        src="/images/Mirindra-lan.png"
                        alt="profile"
                        className="relative rounded-xl object-cover h-100"
                    />
                </div>


                {/* TEXT */}
                <div>

                    <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-300 mb-4">
                        Fullstack Developer
                    </h3>

                    <p className="text-gray-700 mb-6 dark:text-gray-400">
                        I am a passionate fullstack developer specialized in building modern
                        web applications. I work with technologies like JavaScript,
                        TypeScript, React, Node.js, PHP and Docker to create scalable and
                        high-performance solutions.
                    </p>

                    <p className="text-gray-700 mb-10 dark:text-gray-400">
                        I enjoy solving complex problems and transforming ideas into real
                        digital products that deliver value to users and businesses.
                    </p>


                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-6">

                        <div className="bg-gray-100 border border-gray-200 p-6 rounded-xl text-center
                        dark:bg-white/5 dark:border-white/10">
                            <h4 className="text-2xl font-bold text-cyan-500 dark:text-cyan-400">5+</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Years Experience
                            </p>
                        </div>

                        <div className="bg-gray-100 border border-gray-200 p-6 rounded-xl text-center
                        dark:bg-white/5 dark:border-white/10">
                            <h4 className="text-2xl font-bold text-cyan-500 dark:text-cyan-400">10+</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Projects
                            </p>
                        </div>

                        <div className="bg-gray-100 border border-gray-200 p-6 rounded-xl text-center
                        dark:bg-white/5 dark:border-white/10">
                            <h4 className="text-2xl font-bold text-cyan-500 dark:text-cyan-400">10+</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Technologies
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AboutMe