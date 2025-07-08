// import { useEffect, useState } from "react";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

// export const Navbar = ({ menuOpen, setMenuOpen }) => {
//   const [activeSection, setActiveSection] = useState("home");

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = [
//         "home",
//         "skills",
//         "personal-projects",
//         "prismap-projects",
//         "future-plans",
//       ];
//       const scrollPosition = window.scrollY + 100; // Offset for accuracy

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element) {
//           const { offsetTop, offsetHeight } = element;
//           if (
//             scrollPosition >= offsetTop &&
//             scrollPosition < offsetTop + offsetHeight
//           ) {
//             setActiveSection(section);
//             break;
//           }
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
//       <div className="max-w-5xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <ScrollLink
//             to="home"
//             smooth={true}
//             duration={800}
//             className="font-mono text-xl font-bold text-white cursor-pointer"
//             onClick={() => scroll.scrollToTop()}
//           >
//             Malay<span className="text-blue-500"> Bhatt</span>
//           </ScrollLink>

//           {/* Mobile Menu Icon */}
//           <div
//             className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
//             onClick={() => setMenuOpen((prev) => !prev)}
//           >
//             &#9776;
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {[
//               "home",
//               "skills",
//               "personal-projects",
//               "prismap-projects",
//               "future-plans",
//             ].map((section) => (
//               <ScrollLink
//                 key={section}
//                 to={section}
//                 smooth={true}
//                 duration={800}
//                 className={`${
//                   activeSection === section ? "text-blue-500" : "text-gray-300"
//                 } hover:text-blue-500 relative group transition-colors duration-300 cursor-pointer`}
//               >
//                 {section
//                   .split("-")
//                   .map((s) => s.charAt(0).toUpperCase() + s.slice(1) + " ")}
//                 <span
//                   className={`absolute bottom-0 left-0 w-full h-0.5 ${
//                     activeSection === section
//                       ? "bg-blue-500 scale-x-100"
//                       : "bg-white scale-x-0 group-hover:scale-x-100"
//                   } transform origin-left transition-transform duration-300 ease-out`}
//                 ></span>
//               </ScrollLink>
//             ))}

//             {/* Resume Button with Pulsing Glow Effect */}
//             <a
//               href="https://drive.google.com/file/d/1fddrncXUHLipiBvgGPtOBQcgMZSRM8Do/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-md font-medium transition-all duration-300
//              hover:bg-blue-600 animate-pulse shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80"
//             >
//               Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

import { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "skills",
        "personal-projects",
        "prismap-projects",
        "future-plans",
      ];
      const scrollPosition = window.scrollY + 100; // Offset for accuracy

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
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={800}
            className="font-mono text-xl font-bold text-white cursor-pointer"
            onClick={() => scroll.scrollToTop()}
          >
            Malay<span className="text-blue-500"> Bhatt</span>
          </ScrollLink>

          {/* Mobile Menu Icon */}
          <button
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex items-center justify-center text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">&times;</span>
            ) : (
              <span className="text-xl">&#9776;</span>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              "home",
              "skills",
              "personal-projects",
              "prismap-projects",
              "future-plans",
            ].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                duration={800}
                className={`${
                  activeSection === section ? "text-blue-500" : "text-gray-300"
                } hover:text-blue-500 relative group transition-colors duration-300 cursor-pointer`}
              >
                {section
                  .split("-")
                  .map((s) => s.charAt(0).toUpperCase() + s.slice(1) + " ")}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 ${
                    activeSection === section
                      ? "bg-blue-500 scale-x-100"
                      : "bg-white scale-x-0 group-hover:scale-x-100"
                  } transform origin-left transition-transform duration-300 ease-out`}
                ></span>
              </ScrollLink>
            ))}

            {/* Resume Button with Pulsing Glow Effect */}
            <a
              href="https://drive.google.com/file/d/1fddrncXUHLipiBvgGPtOBQcgMZSRM8Do/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block bg-blue-500 text-white px-5 py-2 rounded-md font-medium transition-all duration-300 
             hover:bg-blue-600 animate-pulse shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80"
            >
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-30 bg-black/60 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[rgba(10,10,10,0.97)] shadow-lg z-40 transform transition-transform duration-300 flex flex-col pt-20 px-6 space-y-8 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {[
          "home",
          "skills",
          "personal-projects",
          "prismap-projects",
          "future-plans",
        ].map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={800}
            className={`text-lg font-medium ${
              activeSection === section ? "text-blue-500" : "text-gray-300"
            } hover:text-blue-500 transition-colors duration-300 cursor-pointer pb-1 border-b border-white/10`}
            onClick={() => setMenuOpen(false)}
          >
            {section
              .split("-")
              .map((s) => s.charAt(0).toUpperCase() + s.slice(1) + " ")}
          </ScrollLink>
        ))}

        <a
          href="https://drive.google.com/file/d/1fddrncXUHLipiBvgGPtOBQcgMZSRM8Do/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-5 py-2 rounded-md font-medium transition-all duration-300 
          hover:bg-blue-600 animate-pulse shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80 text-center"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};
