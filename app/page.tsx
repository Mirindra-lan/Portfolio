import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-center flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col justify-center align-center gap-4">
        <p className="text-xl text-gray-400 text-center">Hello world, I am</p>
        <h1 className="text-5xl font-bold bg-gradient-to-t from-gray-300 to-blue-300 bg-clip-text text-transparent">LANTOSOA Mirindra Lucien</h1>
        <h2 className="text-center">Fullstack  <span>Developer &amp; DevOps skills</span></h2>
        <p className="text-gray-400 text-center">Turning ideas into scalable web solutions with modern Fullstack and DevOps practices</p>
        <div className="w-full flex align-center justify-center gap-6">
          <button className="py-2 px-8
          bg-transparent text-white font-bold rounded-lg
  border-2 border-white
  shadow-[0_0_8px_rgba(255,255,255,0.7),0_0_15px_rgba(224,242,254,0.7),0_0_25px_rgba(224,242,254,0.5)]
  animate-pulse
  transition-transform duration-200
  hover:scale-105"
          >
            Contact me
          </button>
          <button className="py-2 px-8 bg-cyan-400 text-white font-bold rounded-lg shadow-lg shadow-cyan-400/70 animate-pulse">
            My Services
          </button>
        </div>
      </main>
    </div>
  );
}
