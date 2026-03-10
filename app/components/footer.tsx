import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="py-8 border-t border-gray-200 bg-white dark:bg-black dark:border-white/10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                
                {/* Copyright */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
                    Copyright &copy; {new Date().getFullYear()} by LANTOSOA Mirindra Lucien. All rights reserved.
                </p>

                {/* Social links */}
                <div className="flex gap-6">
                    <a href="https://github.com/Mirindra-lan" target="_blank">
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="text-gray-600 hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400 text-2xl transition-colors"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/mirindra-3b9149276" target="_blank">
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="text-gray-600 hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400 text-2xl transition-colors"
                        />
                    </a>

                    <a href="https://www.facebook.com/mih.19.11" target="_blank">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="text-gray-600 hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400 text-2xl transition-colors"
                        />
                    </a>

                    <a href="https://www.instagram.com/lan.mirindra" target="_blank">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className="text-gray-600 hover:text-cyan-500 dark:text-gray-400 dark:hover:text-cyan-400 text-2xl transition-colors"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}