import BorderBottom from "./borderBottom"

export default function Main() {
    return (
        <main className="bg-[url('/background.png')] bg-cover bg-center w-full h-screen flex flex-col justify-center items-center gap-6 px-4 sm:gap-8">
        <p className="text-md sm:text-xl text-gray-400 text-center">
          Hello world, I am
        </p>

        <div className="relative">
          <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-t from-gray-300 to-blue-300 bg-clip-text text-transparent text-center">
            LANTOSOA Mirindra Lucien
          </h1>
          <BorderBottom />
        </div>

        <h2 className="text-center text-xl sm:text-2xl font-bold italic">
          Fullstack{" "}
          <span className="text-green-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">
            Developer & DevOps skills
          </span>
        </h2>

        <p className="text-gray-400 text-center text-sm sm:text-base max-w-lg">
          Turning ideas into scalable web solutions with modern Fullstack and DevOps practices
        </p>

        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4">
          <button className="w-full sm:w-auto py-1 sm:py-2 px-4 sm:px-8 bg-transparent text-white font-bold rounded-lg border-2 border-white shadow-[0_0_8px_rgba(255,255,255,0.7),0_0_15px_rgba(224,242,254,0.7),0_0_25px_rgba(224,242,254,0.5)] animate-pulse transition-transform duration-200 hover:scale-105 sm:hover:scale-110">
            Contact me
          </button>
          <button className="w-full sm:w-auto py-1 sm:py-2 px-4 sm:px-8 bg-[rgba(152,217,236,0.5)] text-white font-bold border-3 border-white rounded-lg shadow-inner shadow-blue-100/70 animate-pulse transition-transform duration-200 hover:scale-105">
            My Services
          </button>
        </div>
      </main>
    )
}