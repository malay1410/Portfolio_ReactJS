// import { useEffect } from "react";

// export const Navbar = ({ menuOpen, setMenuOpen }) => {
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);
//   return (
//     <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
//       <div className="max-w-5xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <a href="#home" className="font-mono text-xl font-bold text-white">
//             {" "}
//             Malay<span className="text-blue-500"> Bhatt</span>
//           </a>

//           <div
//             className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
//             onClick={() => setMenuOpen((prev) => !prev)}
//           >
//             &#9776;
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             <a
//               href="#home"
//               className="text-gray-300 hover:text-white relative group transition-colors duration-300"
//             >
//               Home
//               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
//             </a>

//             <a
//               href="#about"
//               className="text-gray-300 hover:text-white relative group transition-colors duration-300"
//             >
//               About
//               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
//             </a>

//             <a
//               href="#projects"
//               className="text-gray-300 hover:text-white relative group transition-colors duration-300"
//             >
//               Projects
//               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
//             </a>

//             <a
//               href="#contact"
//               className="text-gray-300 hover:text-white relative group transition-colors duration-300"
//             >
//               Contact
//               <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100; // Adding offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            Malay<span className="text-blue-500"> Bhatt</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`${
                activeSection === "home" ? "text-white" : "text-gray-300"
              } hover:text-white relative group transition-colors duration-300`}
            >
              Home
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  activeSection === "home"
                    ? "bg-blue-500 scale-x-100"
                    : "bg-white scale-x-0 group-hover:scale-x-100"
                } transform origin-left transition-transform duration-300 ease-out`}
              ></span>
            </a>

            <a
              href="#about"
              className={`${
                activeSection === "about" ? "text-white" : "text-gray-300"
              } hover:text-white relative group transition-colors duration-300`}
            >
              About
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  activeSection === "about"
                    ? "bg-blue-500 scale-x-100"
                    : "bg-white scale-x-0 group-hover:scale-x-100"
                } transform origin-left transition-transform duration-300 ease-out`}
              ></span>
            </a>

            <a
              href="#projects"
              className={`${
                activeSection === "projects" ? "text-white" : "text-gray-300"
              } hover:text-white relative group transition-colors duration-300`}
            >
              Projects
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  activeSection === "projects"
                    ? "bg-blue-500 scale-x-100"
                    : "bg-white scale-x-0 group-hover:scale-x-100"
                } transform origin-left transition-transform duration-300 ease-out`}
              ></span>
            </a>

            <a
              href="#contact"
              className={`${
                activeSection === "contact" ? "text-white" : "text-gray-300"
              } hover:text-white relative group transition-colors duration-300`}
            >
              Contact
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 ${
                  activeSection === "contact"
                    ? "bg-blue-500 scale-x-100"
                    : "bg-white scale-x-0 group-hover:scale-x-100"
                } transform origin-left transition-transform duration-300 ease-out`}
              ></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
