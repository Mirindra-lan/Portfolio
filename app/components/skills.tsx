export default function Skills() {
    return (
        <section id="skills" className="py-24 text-white scroll-mt-24 bg-black">
<div className="text-center mb-16">
    <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]">
    My Skills
    </h2>
    <p className="text-gray-400 mt-4">
    Technologies I use to build modern applications
    </p>
</div>


<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover:shadow-cyan-500/30 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-6 text-cyan-300">
        Frontend
        </h3>
        <div className="space-y-4">
            <div>
                <p>React / Next.js</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-cyan-400 h-2 rounded-full w-[90%]"></div>
                </div>
            </div>
            <div>
                <p>JavaScript / TypeScript</p>

                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-cyan-400 h-2 rounded-full w-[95%]"></div>
                </div>
            </div>
            <div>
                <p>Tailwind CSS</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-cyan-400 h-2 rounded-full w-[90%]"></div>
                </div>
            </div>
        </div>
    </div>

    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover:shadow-blue-500/30 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-6 text-blue-300">
        Backend
        </h3>
        <div className="space-y-4">
            <div>
                <p>Node.js</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-blue-400 h-2 rounded-full w-[90%]"></div>
                </div>
            </div>
            <div>
                <p>Express / Adonis</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-blue-400 h-2 rounded-full w-[85%]"></div>
                </div>
            </div>
            <div>
                <p>MongoDB / PostgreSQL</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-blue-400 h-2 rounded-full w-[85%]"></div>
                </div>
            </div>
        </div>
    </div>


        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover:shadow-purple-500/30 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-6 text-purple-300">
                DevOps
            </h3>
            <div className="space-y-4">
            <div>
                <p>Docker</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-purple-400 h-2 rounded-full w-[85%]"></div>
                </div>
            </div>
            <div>
                <p>Git / GitHub</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-purple-400 h-2 rounded-full w-[90%]"></div>
                </div>
            </div>
            <div>
                <p>CI/CD</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                    <div className="bg-purple-400 h-2 rounded-full w-[80%]"></div>
                </div>
            </div>
        </div>
        </div>
    </div>

</section>
    )
}