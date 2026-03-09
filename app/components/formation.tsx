import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Education() {

  const formations = [
    {
      year: "2020",
      title: "Web Development Basics",
      school: "Self Learning",
      description: "Started learning HTML, CSS and JavaScript."
    },
    {
      year: "2021",
      title: "Symfony & PHP",
      school: "Online Training",
      description: "Built a library management system using Symfony."
    },
    {
      year: "2022",
      title: "Laravel Development",
      school: "Personal Projects",
      description: "Developed the website for Mimoza association."
    },
    {
      year: "2023",
      title: "MERN Stack",
      school: "Fullstack Practice",
      description: "Created a real-time chat application."
    }
  ];

  return (
    <section id="education" className="py-24 bg-black text-white">

      {/* TITLE */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(56,189,248,0.8)]">
          My Education
        </h2>
        <p className="text-gray-400 mt-4">
          My learning journey in software development
        </p>
      </div>

      {/* TIMELINE */}
      <div className="max-w-6xl mx-auto px-6">

        {/* line */}
        <div className="relative">
          <div className="absolute top-6 left-0 w-full h-[2px] bg-cyan-500/30"></div>

          <div className="grid md:grid-cols-4 gap-10 relative">

            {formations.map((item, index) => (
              <div key={index} className="text-center group">

                {/* dot */}
                <div className="mx-auto mb-6 w-12 h-12 flex items-center justify-center rounded-full bg-black border border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)] group-hover:scale-110 transition">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    className="text-cyan-400"
                  />
                </div>

                {/* year */}
                <p className="text-cyan-400 font-semibold mb-2">
                  {item.year}
                </p>

                {/* title */}
                <h3 className="text-lg font-semibold mb-1">
                  {item.title}
                </h3>

                {/* school */}
                <p className="text-gray-400 text-sm italic mb-2">
                  {item.school}
                </p>

                {/* desc */}
                <p className="text-gray-400 text-sm">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}