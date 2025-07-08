import { RevealOnScroll } from "../RevealOnScroll";

import ic3 from "../../assets/projectImages/IC3.png";
import Levyne from "../../assets/projectImages/Levyne.png";
import KJSCE from "../../assets/projectImages/KJSCE.png";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Experience
          </h2>
          <div className="grid grid-cols-1 gap-6 mb-[3rem]">
            {/* Intelligent Clinical Care Center  */}
            <a
              href="https://ic3.center.ufl.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={ic3}
                  alt="IC3"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold">
                  Intelligent Clinical Care Center
                </h3>

                <div className="flex justify-between items-center text-md font-semibold text-blue-500">
                  <span>Software Engineer</span>
                  <span>Sep 2024 - Current</span>
                </div>

                <ul className="text-gray-400 text-md mb-4 list-disc">
                  <li className="mb-3">
                    Architected mission-critical healthcare interfaces using
                    <span className="text-white"> ReactJS</span> and{" "}
                    <span className="text-white"> Swift-based </span>
                    components, enabling 45% faster patient data access and
                    supporting <span className="text-white">10,000+</span> daily
                    clinical interactions.
                  </li>
                  <li className="mb-3">
                    Engineered <span className="text-white"> 30+</span> reusable
                    <span className="text-white"> React and SwiftUI</span>{" "}
                    components, reducing development time by{" "}
                    <span className="text-white"> 60%</span> and improving
                    maintainability across 5 clinical apps.
                  </li>
                  <li className="mb-3">
                    Mentored student software engineers on{" "}
                    <span className="text-white">
                      {" "}
                      frontend architecture, clean code, and Git workflows{" "}
                    </span>
                    boosting team onboarding speed and code quality.
                  </li>
                  <li className="mb-3">
                    <span className="text-white">Dockerized</span> and deployed
                    scalable <span className="text-white">microservices</span>{" "}
                    on <span className="text-white">HiperGator</span>, ensuring
                    cross-environment performance and infrastructure resilience.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "ReactJS",
                    "Swift",
                    "SwiftUI",
                    "Python",
                    "FastAPI",
                    "Docker",
                    "HiperGator",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
            {/* Levye */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={Levyne}
                  alt="Levyne Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold">Levyne</h3>
                <div className="flex justify-between items-center text-md font-semibold text-blue-500">
                  <span>Software Engineer</span>
                  <span>Sep 2021 - August 2021</span>
                </div>
                <ul className="text-gray-400 text-sm mb-4 list-disc">
                  <li className="mb-3">
                    Designed and deployed a high security{" "}
                    <span className="text-white"> React/NextJS </span>
                    application serving{" "}
                    <span className="text-white"> 500+</span> concurrent users,
                    featuring OTP authentication, automated emails, and
                    real-time order management, improved operational efficiency
                    by <span className="text-white"> 40%</span> •
                  </li>
                  <li className="mb-3">
                    Implemented an enterprise-grade analytics dashboard with{" "}
                    <span className="text-white"> 10+</span>
                    interactive data visualizations using{" "}
                    <span className="text-white"> D3.js</span> and{" "}
                    <span className="text-white"> React</span>, driving{" "}
                    <span className="text-white"> 65% </span>
                    faster decision-making and increasing revenue visibility by
                    <span className="text-white"> 85%</span>.
                  </li>
                  <li className="mb-3">
                    Spearheaded full-stack innovations including AI-powered
                    virtual try-on technology and{" "}
                    <span className="text-white"> Google Maps integration</span>
                    , resulting in <span className="text-white"> 60%</span>{" "}
                    surge in traffic and{" "}
                    <span className="text-white"> 30%</span>, boost in user
                    engagement, while implementing streamlined testing that
                    reduced QA cycles by{" "}
                    <span className="text-white"> 80%</span>.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "ReactJS",
                    "React Native",
                    "NodeJS",
                    "Python",
                    "FastAPI",
                    "Google APIs",
                    "AWS",
                  ].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
            {/* K.J. Somaiya College of Engineering  */}
            <a
              href="https://github.com/bihorac-LAB/shared-drive-access"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={KJSCE}
                  alt="Shared Access Drive Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold">
                  K.J. Somaiaya College of Engineering
                </h3>
                <div className="flex justify-between items-center text-md font-semibold text-blue-500">
                  <span>Student Research, Software Engineer</span>
                  <span>Oct 2020 - July 2021</span>
                </div>
                <ul className="text-gray-400 text-sm mb-4 list-disc">
                  <li className="mb-3">
                    Built chat app, ensuring complete anonymity for{" "}
                    <span className="text-white"> 1000+ users</span> to engage
                    in confidential conversations.
                  </li>
                  <li className="mb-3">
                    Enabled seamless interactions, file exchanges with virus
                    scan, and photo sharing{" "}
                    <span className="text-white"> (25MB limit)</span> in
                    permission-free environment.
                  </li>
                  <li className="mb-3">
                    Elevated user data protection by integrating{" "}
                    <span className="text-white"> TOR</span> to route traffic,
                    delivering a <span className="text-white"> 70%</span> boost
                    in anonymity and security.
                  </li>
                  <li className="mb-3">
                    Optimized load testing framework to test the application
                    with{" "}
                    <span className="text-white"> 100+ concurrent users</span>.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["PHP", "Flutter", "Flask", "TOR", "Firebase", "AWS"].map(
                    (tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
