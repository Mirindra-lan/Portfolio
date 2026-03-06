import Services from "./components/services";
import Main from "./components/main";
import Skills from "./components/skills";
import AboutMe from "./components/aboutMe";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Main/>
      <Services />
      <Skills />
      <AboutMe/>
  </div>
  );
}