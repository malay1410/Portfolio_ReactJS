import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const programmingLanguagesSkills = [
    "Java",
    "Python",
    "C",
    "Typescript",
    "Javascript",
    "PHP",
    "Dart",
  ];
  const webDevelopmentSkilss = [
    "ReactJS",
    "AngularJS",
    "Vue",
    "ThreeJS",
    "NodeJS",
    "Django",
    "Flask",
    "Jenkins",
    "HTML5",
    "CSS3",
    "Tailwind",
    "RestAPIs",
    "FastAPI",
    "GraphQL",
  ];
  const cloudTechnologiesSkills = [
    "AWS",
    "Microsoft Azure",
    "Google Cloud Program",
    "Docker",
    "Redis",
    "Kubernetes",
    "EC2",
    "S3",
    "Lambda",
    "ECS",
    "EKS",
    "Datadog",
  ];
  const databasesSkills = [
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Cassandra",
    "ChromaDB",
  ];

  const genAISkills = [
    "CursorAI",
    "LangChain",
    "Copilot",
    "OpenAI API",
    "HuggingFace",
    "StreamLit",
  ];

  const otherSkills = ["Agile", "Jira", "Asana", "Git"];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 "
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          {/* Header  */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Skills
          </h2>
          {/* List of Skils  */}
          <div className="rounded-xl  p-8 mb-6 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate{" "}
              <span className="text-blue-500">MERN Stack Specialist</span> with
              expertise in building scalable web applications and creating
              innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguagesSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                   hover:shadow-[0_4px_12px_rgba(59,130,246,0.8)]! transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Web Development</h3>
                <div className="flex flex-wrap gap-2">
                  {webDevelopmentSkilss.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_4px_12px_rgba(59,130,246,0.8)]! transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Cloud Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {cloudTechnologiesSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_4px_12px_rgba(59,130,246,0.8)]! transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {databasesSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_4px_12px_rgba(59,130,246,0.8)]! transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> GenAI</h3>
                <div className="flex flex-wrap gap-2">
                  {genAISkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_4px_12px_rgba(59,130,246,0.8)]! transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Others</h3>
                <div className="flex flex-wrap gap-2">
                  {otherSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_4px_12px_rgba(59,130,246,0.8)]! transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* List of Education  */}
          {/* <div className="p-6 mb-6 rounded-xl border-white/10 border hover:translate-y-1! hover:shadow-[0_4px_12px_rgba(255,255,255,0.2),inset_0_2px_6px_rgba(255,255,255,0.1)]! transition-all">
            <h3 className="text-4xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> Masters in Computer Science </strong> - University of
                Florida (2023-2025)
              </li>
              <li>
                <strong> B.Tech in Information Technology </strong> - K.J.
                Somaiya College of Engineering (2019-2023)
              </li>
            </ul>
          </div> */}
          {/* List of Work Experience  */}
          {/* <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1! hover:shadow-[0_4px_12px_rgba(255,255,255,0.2),inset_0_2px_6px_rgba(255,255,255,0.1)]!  transition-all">
            <h3 className="text-4xl font-bold mb-4"> 💼 Work Experience </h3>
            <div className="space-y-4 text-gray-300"> */}
          {/* IC3  */}
          {/* <div>
                <h4 className="font-bold text-white">
                  {" "}
                  Graduate Research Assistant | Intelligent Clinical Care Center
                  (IC3) (09/2024 – Present){" "}
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Architected critical healthcare interfaces for IC3 using
                    <span className="font-bold text-white"> ReactJS</span> and
                    modern frontend architecture, resulting in 45% faster
                    patient data access and supporting 10,000+ daily clinical
                    interactions.{" "}
                    <span className="font-bold text-white">
                      {" "}
                      Integrated Cassandra NoSQL database{" "}
                    </span>
                    for{" "}
                    <span className="font-bold text-white">
                      {" "}
                      scalable data management.{" "}
                    </span>
                  </li>
                  <li>
                    Optimized{" "}
                    <span className="font-bold text-white">
                      {" "}
                      CI/CD pipelines{" "}
                    </span>{" "}
                    with{" "}
                    <span className="font-bold text-white">
                      {" "}
                      GitLab CI/CD,
                    </span>{" "}
                    reducing deployment time by{" "}
                    <span className="font-bold text-white"> 50% </span>and
                    automating unit testing for{" "}
                    <span className="font-bold text-white">
                      {" "}
                      30+ services.{" "}
                    </span>
                  </li>
                  <li>
                    Implemented{" "}
                    <span className="font-bold text-white"> Redis </span>{" "}
                    caching to{" "}
                    <span className="font-bold text-white">
                      {" "}
                      minimize latency{" "}
                    </span>{" "}
                    and enhance application performance across{" "}
                    <span className="font-bold text-white">
                      {" "}
                      5 major clinical applications.{" "}
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-white"> Dockerized </span>
                    and deployed on{" "}
                    <span className="font-bold text-white">
                      {" "}
                      HiperGator,
                    </span>{" "}
                    maximizing scalability and cross-environment website
                    performance.
                  </li>
                  <li>
                    Spearheaded cross-functional collaboration with UX teams to
                    implement responsive healthcare dashboards, achieving{" "}
                    <span className="font-bold text-white"> 98% </span>
                    user satisfaction among medical professionals and reducing
                    testing time by{" "}
                    <span className="font-bold text-white"> 40% </span> by
                    <span className="font-bold text-white">
                      {" "}
                      automating UI testing. <br />
                      [ReactJS, Python, FastAPI, Docker, HiperGator, Selenium]{" "}
                    </span>
                  </li>
                </ul>
              </div> */}
          {/* Levyne  */}
          {/* <div>
                <h4 className="font-bold text-white">
                  {" "}
                  Software Engineer | Levyne (03/2021 – 08/2023){" "}
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Designed and deployed a high security{" "}
                    <span className="font-bold text-white"> React/NextJS </span>
                    application serving{" "}
                    <span className="font-bold text-white"> 500+ </span>{" "}
                    concurrent users, featuring OTP authentication, automated
                    emails, and real-time order management, improved operational
                    efficiency by{" "}
                    <span className="font-bold text-white"> 40% </span>
                  </li>
                  <li>
                    Implemented an enterprise-grade analytics dashboard with{" "}
                    <span className="font-bold text-white"> 10+ </span>
                    interactive data visualizations using{" "}
                    <span className="font-bold text-white"> D3.js </span> and
                    <span className="font-bold text-white"> React </span>,
                    driving <span className="font-bold text-white"> 65% </span>{" "}
                    faster decision-making and increasing revenue visibility by
                    <span className="font-bold text-white"> 85%. </span>
                  </li>
                  <li>
                    Spearheaded full-stack innovations including AI-powered
                    virtual try-on technology and{" "}
                    <span className="font-bold text-white">
                      {" "}
                      Google Maps integration,{" "}
                    </span>
                    resulting in{" "}
                    <span className="font-bold text-white"> 60% </span> surge in
                    traffic and{" "}
                    <span className="font-bold text-white"> 30% </span>, boost
                    in user engagement, while implementing streamlined testing
                    that reduced QA cycles by{" "}
                    <span className="font-bold text-white">
                      {" "}
                      80%. <br /> [ReactJS, React Native, NodeJS, Python,
                      FastAPI, Google APIs, AWS]{" "}
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-white">
                  {" "}
                  Student Research, Software Engineer | K.J. Somaiya College of
                  Engineering 10/2020 – 07/2021{" "}
                </h4>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Designed and deployed an anonymous chat platform with
                    end-to-end encryption using{" "}
                    <span className="font-bold text-white">
                      {" "}
                      AWS EC2, Firebase, and Node.js.{" "}
                    </span>
                  </li>
                  <li>
                    Enabled seamless interactions, file exchanges with virus
                    scan, and photo sharing{" "}
                    <span className="font-bold text-white"> (25MB limit) </span>{" "}
                    in permission-free environment.
                  </li>
                  <li>
                    Elevated user data protection by integrating{" "}
                    <span className="font-bold text-white"> TOR</span> to route
                    traffic, delivering a{" "}
                    <span className="font-bold text-white"> 70% </span> boost in
                    specs like anonymity and security.
                  </li>
                  <li>
                    Optimized load testing framework to test the application
                    with{" "}
                    <span className="font-bold text-white">
                      {" "}
                      100+ concurrent users. <br />
                      [PHP, Flutter, Flask, TOR, Firebase, AWS]
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </RevealOnScroll>
    </section>
  );
};
