import Image from "next/image";
import BorderBottom from "./components/borderBottom";

export default function Home() {
  return (
    <div className="bg-[url('/background.png')] bg-cover bg-center flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col justify-center align-center gap-8">
        <p className="text-xl text-gray-400 text-center">Hello world, I am</p>
        <div className="relative">
          <h1 className="text-5xl font-bold bg-gradient-to-t from-gray-300 to-blue-300 bg-clip-text text-transparent">
            LANTOSOA Mirindra Lucien
          </h1>
          <BorderBottom/>
        </div>
        <h2 className="text-center text-2xl font-bold italic">Fullstack  <span className="text-green-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">Developer &amp; DevOps skills</span></h2>
        <p className="text-gray-400 text-center">Turning ideas into scalable web solutions with modern Fullstack and DevOps practices</p>
        <div className="w-full flex align-center justify-center gap-6">
          <button className="py-2 px-8
          bg-transparent text-white font-bold rounded-lg
          border-2 border-white
          shadow-[0_0_8px_rgba(255,255,255,0.7),0_0_15px_rgba(224,242,254,0.7),0_0_25px_rgba(224,242,254,0.5)]
          animate-pulse
          transition-transform duration-200
          hover:scale-110"
          >
            Contact me
          </button>
          <button className="py-2 px-8 bg-[rgba(152,217,236,0.5)] text-white font-bold border-3 border-white rounded-lg shadow-inner shadow-blue-100/70 animate-pulse hover:scale-105">
            My Services
          </button>
        </div>
      </main>
    </div>
  );
}
