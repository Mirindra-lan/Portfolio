import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faDocker } from "@fortawesome/free-brands-svg-icons";

export default function ProjectsList() {
    const projects = [
        {
            title: "AVR Core",
            description: "Core system for handling audio-visual responses and integrations, providing APIs for ASR, TTS, and LLM modules.",
            technologies: ["Node.js", "Docker", "TCP (AudioSocket)", "AI API"],
            github: "https://github.com/Mirindra-lan/avr-core",
            docker: "https://hub.docker.com/repositories/mirindra1911/avr-core"
        },
        {
            title: "Personal Portfolio Website",
            description: "A modern developer portfolio showcasing my projects, skills, and experience, built with a responsive and clean design.",
            technologies: ["React", "Next.js"],
            github: "https://github.com/Mirindra-lucien/Mirindra_portfolio",
            docker: null
        },
        {
            title: "Real-Time Chat Application",
            description: "A real-time messaging platform built with the MERN stack that allows users to communicate instantly through a responsive web interface.",
            technologies: ["MongoDB", "Express", "React", "Node.js"],
            github: "https://github.com/Mirindra-lucien/chat_MERN",
            docker: null
        },
        {
            title: "CallScribe",
            description: "CallScribe is an AI-powered call center assistant that captures caller and agent audio, performs real-time speech-to-text transcription, and generates intelligent response suggestions.",
            technologies: ["Python", "Whisper", "Vosk", "sounddevice"],
            github: "https://github.com/Mirindra-lan/CallScribe",
            docker: null
        }
    ];

    return (
        <section
            id="projects"
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
                    My Projects
                </h2>

                <p className="text-gray-600 mt-4 dark:text-gray-400">
                    Some of my work showcasing my skills and experience
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-6 space-y-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="
                        group flex flex-col md:flex-row justify-between items-start
                        p-4 rounded-lg transition
                        hover:bg-gray-100
                        dark:hover:bg-white/5
                    "
                    >
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-300 mb-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-700 dark:text-gray-400 mb-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="
                                        bg-cyan-100 text-cyan-700
                                        dark:bg-cyan-500/20 dark:text-cyan-300
                                        text-sm px-2 py-1 rounded
                                    "
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 mt-3 md:mt-0">
                            {project.github && (
                                <a href={project.github} target="_blank">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="text-gray-600 hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400 text-2xl"
                                    />
                                </a>
                            )}

                            {project.docker && (
                                <a href={project.docker} target="_blank">
                                    <FontAwesomeIcon
                                        icon={faDocker}
                                        className="text-gray-600 hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400 text-2xl"
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}