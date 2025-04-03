import { RevealOnScroll } from "../RevealOnScroll";

import exposome from "../../assets/projectImages/exposome.png";
import MSR from "../../assets/projectImages/msr.png";
import sharedAccessDrive from "../../assets/projectImages/shared_access_drive.png";
import dataCollation from "../../assets/projectImages/data_collation.png";
import gitHubRepoRevamp from "../../assets/projectImages/github_repo_revamp.png";

export const PrismapProjects = () => {
  return (
    <section
      id="prismap-projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Prismap Projects [6 months]
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[3rem]">
            {/* Exposome  */}
            <a
              href="https://github.com/bihorac-LAB/exposome-web-app"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={exposome}
                  alt="Exposome Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold">Exposome</h3>
                <h3 className="text-md font-semibold text-blue-500">
                  Timeline: 10 weeks
                </h3>
                <ul className="text-gray-400 text-sm mb-4 list-disc ">
                  <li>
                    Architected a dynamic, user-friendly React interface for the
                    Exposome project, empowering users to effortlessly upload
                    and trigger real-time analyses—all through a clean, reusable
                    and responsive UI designed for accessibility and ease of
                    use.
                  </li>
                  <li>
                    Created an intuitive user journey map to guide interface
                    development and ensure a seamless, React-driven user
                    experience from onboarding to analysis.
                  </li>
                  <li>
                    Refactored legacy code and replaced deprecated dependencies,
                    streamlining the codebase and accelerating delivery ahead of
                    timelines.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "FastAPI"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/bihorac-LAB/exposome-web-app"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://exposome.rc.ufl.edu/"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    Deployed Project →
                  </a>
                </div>
              </div>
            </a>
            {/* My Surgery Risk  */}
            <a
              href="https://github.com/bihorac-LAB/mysurgeryrisk-web-app"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={MSR}
                  alt="MSR Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold">My Surgery Risk</h3>
                <h3 className="text-md font-semibold text-blue-500">
                  Timeline: 7 weeks
                </h3>
                <ul className="text-gray-400 text-sm mb-4 list-disc">
                  <li>
                    Quickly brought complex wireframes to life using React,
                    building accessible, ADA-compliant interfaces that shipped
                    faster than expected.
                  </li>
                  <li>
                    Engineered and implemented a Redis proof of concept to speed
                    up data access, which noticeably cut down latency and made
                    the app run smoother overall.
                  </li>
                  <li>
                    Dockerized the entire project and deployed it on an internal
                    server, enabling rapid development-to-deployment cycles and
                    real-time feedback from stakeholders.
                  </li>
                  <li>
                    Modernized an old codebase by updating deprecated
                    dependencies and refactoring legacy code, delivering a
                    clean, responsive UI with improved maintainability.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "Flask", "Redis"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/bihorac-LAB/mysurgeryrisk-web-app"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </a>
            {/* Shared Access Drive  */}
            <a
              href="https://github.com/bihorac-LAB/shared-drive-access"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={sharedAccessDrive}
                  alt="Shared Access Drive Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold">Shared Access Drive</h3>
                <h3 className="text-md font-semibold text-blue-500">
                  Timeline: 2 weeks
                </h3>
                <ul className="text-gray-400 text-sm mb-4 list-disc">
                  <li>
                    Automated shared drive access requests, reducing manual
                    intervention and accelerating team onboarding and
                    collaboration.
                  </li>
                  <li>
                    Established a comprehensive audit trail to support data
                    integrity, compliance, and transparent change tracking.
                  </li>
                  <li>
                    Dockerized the entire project and deployed it on an internal
                    server, enabling rapid development-to-deployment cycles and
                    real-time feedback from stakeholders.
                  </li>
                  <li>
                    Resulted in an 80% reduction in manual effort and cut
                    request processing time from ~2 days to under 30 minutes.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "Express"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/bihorac-LAB/shared-drive-access"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </a>
            {/* Data Collation  */}
            <a
              href="https://www.dropbox.com/scl/fi/vyiv5c4vm1le597kf08tu/External-dataset-Inventory.xlsx?dl=0&rlkey=k1jgk5r7qadymojgmo6zkn8gx&st=i6c2sb67"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={dataCollation}
                  alt="Data Collation Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold">Data Collation</h3>
                <h3 className="text-md font-semibold text-blue-500">
                  Timeline: 2 weeks
                </h3>
                <ul className="text-gray-400 text-sm mb-4 list-disc">
                  <li>
                    Collated and structured 500+ datasets to build a centralized
                    inventory, streamlining data accessibility and accelerating
                    research efforts.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://www.dropbox.com/scl/fi/vyiv5c4vm1le597kf08tu/External-dataset-Inventory.xlsx?dl=0&rlkey=k1jgk5r7qadymojgmo6zkn8gx&st=i6c2sb67"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </a>
            {/* GitHub Repo Revamp  */}
            <a
              href="https://github.com/bihorac-LAB"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={gitHubRepoRevamp}
                  alt="GitHub Repo Revamp Collation Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold">GitHub Repo Revamp</h3>
                <h3 className="text-md font-semibold text-blue-500">
                  Timeline: 1 week
                </h3>
                <ul className="text-gray-400 text-sm mb-4 list-disc">
                  <li>
                    Restructured and standardized the Git repository to improve
                    code organization and maintainability.
                  </li>
                  <li>
                    Migrated legacy code into a clean, modular structure aligned
                    with best practices.
                  </li>
                  <li>
                    Added comprehensive README documentation to streamline
                    onboarding and enhance project visibility.
                  </li>
                  <li>
                    Improved collaboration by establishing a consistent version
                    control workflow across the team.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["Github"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/bihorac-LAB"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
