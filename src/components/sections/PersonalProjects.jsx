import { RevealOnScroll } from "../RevealOnScroll";

import quickQuizImage from "../../assets/projectImages/quick_quiz_preview.png";
import match3WithPixiJS from "../../assets/projectImages/match_3_with_pixijs.png";
import blackJackPixiJS from "../../assets/projectImages/black_jack_pixijs.png";
import theatreReservationSystem from "../../assets/projectImages/theatre_reservation_system.png";
import gatorLibrary from "../../assets/projectImages/gator_library.png";
import chatAppUsingFlutter from "../../assets/projectImages/chat_app_using_flutter.png";
import blockchainBasedStudentVerificationTechnology from "../../assets/projectImages/blockchainBasedStudentVerificationTechnology.png";
import decentralizedCarRentalApp from "../../assets/projectImages/decentralized_car_rental_app.png";
import SendSwift from "../../assets/projectImages/SendSwift.png";

export const PersonalProjects = () => {
  return (
    <section
      id="personal-projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SendSwift */}
            <a
              href="https://github.com/malay1410/send-swift"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={SendSwift}
                  alt="SendSwift Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold mb-2">Send Swift</h3>
                <p className="text-gray-400 text-sm mb-4">
                  SendSwift is a secure, password-free messaging platform that
                  enables users to send emails and data instantly. Built with
                  React and Node.js, it offers a fast, user-friendly experience.
                  With modern encryption and token-based access, SendSwift
                  ensures safe, seamless communication—ideal for teams,
                  freelancers, and automated notification workflows.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js"].map((tech, key) => (
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
                    href="https://github.com/malay1410/quickquizz-frontend"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </a>
            {/* Quick Quiz App  */}
            <a
              href="https://github.com/malay1410/quickquizz-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={quickQuizImage}
                  alt="Quick Quiz Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold mb-2">Quick Quiz</h3>
                <p className="text-gray-400 text-sm mb-4">
                  QuickQuiz is an AI-powered learning platform built with React
                  and OpenAI API, featuring intelligent document summarization,
                  doubt resolution, and dynamic quiz generation. Enhanced with
                  Flask backend and voice assistance, the platform has empowered
                  25,000+ students, boosting comprehension speed by 40% while
                  increasing accessibility by 65%.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "React",
                    "Node.js",
                    "Flask",
                    "OpenAI",
                    "LangChain",
                    "ChromaDB",
                  ].map((tech, key) => (
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
                    href="https://github.com/malay1410/quickquizz-frontend"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </a>
            {/* Decentralized Car Rental App */}
            <a
              href="https://github.com/BhavikMehta57/car_rental_app"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={decentralizedCarRentalApp}
                  alt="Decentralized Car Rental App"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold mb-2">
                  Decentralized Car Rental App
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  The project enables direct car rentals between users,
                  eliminating middlemen, with a user-friendly interface and
                  secure blockchain-based decentralized transactions for
                  privacy.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["PHP", "IPFS", "Ethereum", "Solidity", "Ganache"].map(
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

                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/BhavikMehta57/car_rental_app"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </a>
            {/* Gator Library  */}
            <a
              href="https://github.com/malay1410/gatorlibrary"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={gatorLibrary}
                  alt="Quick Quiz Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold mb-2">Gator Library</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Developed an advanced Library Management System using
                  Red-Black trees and Binary Min-Heaps, optimizing book
                  reservations and enhancing efficiency in large-scale
                  institutions. Implemented innovative features and
                  visualizations.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["Java"].map((tech, key) => (
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
                    href="https://github.com/malay1410/gatorlibrary"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </a>
            {/* Blockchain Based Student Verification Technology  */}
            <a
              href="https://github.com/vaibhavvesmaker/studofierlyproj/tree/master"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={blockchainBasedStudentVerificationTechnology}
                  alt="Blockchain Based Student Verification Technology"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold mb-2">
                  Blockchain Based Student Verification Technology
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Developed a blockchain-based system for comprehensive
                  candidate validation, automating data collection and
                  verification. Enhanced recruitment process reliability and
                  employer confidence through secure, tamper-proof
                  record-keeping.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "PHP",
                    "IPFS",
                    "Ethereum",
                    "Solidity",
                    "Ganache",
                    "Smart Contracts",
                  ].map((tech, key) => (
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
                    href="https://github.com/vaibhavvesmaker/studofierlyproj/tree/master"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </a>
            {/* Black Jack with PixiJS  */}
            <a
              href="https://github.com/malay1410/match3-pixijs"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={blackJackPixiJS}
                  alt="Black Jack With PixiJS Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold mb-2">
                  Black Jack with PixiJS
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  A dynamic Blackjack game built with PixiJS, offering
                  role-based gameplay and customizable bet settings. Featuring
                  smooth animations and an engaging user interface for immersive
                  gaming.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "PixiJS", "HTML"].map((tech, key) => (
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
                    href="https://github.com/malay1410/match3-pixijs"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </a>
            {/* Chat App using Flutter  */}
            <a
              href="https://github.com/malay1410/chat_app"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={chatAppUsingFlutter}
                  alt="Chat App Using Flutter"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold mb-2">
                  Chat App using Flutter
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Developed a cross-platform chat application using Flutter and
                  Firebase, featuring real-time messaging, user authentication,
                  multimedia sharing, and an intuitive UI for seamless
                  communication.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Flutter",
                    "Firebase",
                    "Dart",
                    "Swift",
                    "Ruby",
                    "HTML",
                    "CSS",
                  ].map((tech, key) => (
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
                    href="https://github.com/malay1410/chat_app"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </a>
            {/* Match 3 with PixiJS  */}
            <a
              href="https://github.com/malay1410/match3-pixijs"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={match3WithPixiJS}
                  alt="Match 3 With PixiJS Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold mb-2">Match 3 with PixiJS</h3>
                <p className="text-gray-400 text-sm mb-4">
                  A visually engaging Match 3 puzzle game built with PixiJS,
                  featuring smooth animations, dynamic effects, and intuitive
                  gameplay. Optimized for performance, delivering an interactive
                  gaming experience.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "PixiJS", "HTML"].map((tech, key) => (
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
                    href="https://github.com/malay1410/match3-pixijs"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </a>
            {/* Theatre Reservation System  */}
            <a
              href="https://github.com/malay1410/theatre-reservation-system"
              target="_blank"
              rel="noopener noreferrer"
              className="block backdrop-blur-xs!"
            >
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-4! hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.6)]! transition">
                <img
                  src={theatreReservationSystem}
                  alt="Quick Quiz Preview"
                  className="w-full h-60 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold mb-2">
                  Theatre Reservation System
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Developed a dynamic theatre reservation system using ReactJS,
                  featuring interactive seat selection, real-time availability
                  updates, secure payment integration, and user-friendly booking
                  management for an enhanced ticketing experience.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js"].map((tech, key) => (
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
                    href="https://github.com/malay1410/theatre-reservation-system"
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
