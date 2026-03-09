import Services from "./components/services";
import Main from "./components/main";
import Skills from "./components/skills";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Formation from "./components/formation";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Main/>
      <AboutMe/>
      <Services />
      {/* <Formation /> */}
      <Skills />
      <Projects/>
      <Contact />
      <Footer/>
  </div>
  );
}