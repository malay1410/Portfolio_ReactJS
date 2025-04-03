import { RevealOnScroll } from "../RevealOnScroll";
import { Link as ScrollLink } from "react-scroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl md: mt-[5rem] font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Malay Bhatt
          </h1>
          {/* <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I'm a{" "}
            <span className="text-blue-500 font-semibold">
              Master's student in Computer Science
            </span>{" "}
            at the
            <span className="text-blue-500"> University of Florida</span>,
            specializing in{" "}
            <span className="text-blue-500">
              Fullstack development and DevOps
            </span>
            . With hands-on experience in developing scalable and secure
            systems, I’ve worked on projects ranging from
            <span className="text-blue-500"> AI-driven platforms</span> to{" "}
            <span className="text-blue-500">decentralized applications</span>. I
            have hands-on expertise with modern technologies and various
            full-stack development tools, enabling me to create innovative and
            scalable solutions.
            <br />
            <br />
            My experience includes contributing to{" "}
            <span className="text-blue-500">healthcare innovations, </span>
            <span className="text-blue-500">
              optimizing enterprise systems, and creating
            </span>
            <span className="text-blue-500"> blockchain-based solutions</span>{" "}
            for credential verification. I am passionate about using technology
            to solve real-world problems and create impactful, innovative
            solutions.
          </p> */}

          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I am a{" "}
            <span className="text-blue-500 font-semibold">
              React-focused Frontend Developer
            </span>{" "}
            and <span className="text-blue-500 font-semibold">CS Master’s</span>{" "}
            student at <span className="text-blue-500 font-semibold">UF</span>,
            building high-performance,{" "}
            <span className="text-blue-500 font-semibold">
              GenAI-powered interfaces
            </span>
            . With expertise in{" "}
            <span className="text-blue-500 font-semibold">
              fullstack development
            </span>{" "}
            and <span className="text-blue-500 font-semibold">DevOps</span>, I
            deliver scalable, accessible solutions that drive innovation in
            healthcare and enterprise tech.
          </p>

          <div className="flex justify-center space-x-4">
            <ScrollLink
              to="prismap-projects"
              smooth={true}
              duration={800}
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/50"
            >
              View Projects
            </ScrollLink>

            {/* <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              className="border border-blue-500/50 text-white py-3 px-6 rounded font-medium transition-all duration-200 cursor-pointer hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/50 hover:bg-blue-500/10"
            >
              Contact Me
            </ScrollLink> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
