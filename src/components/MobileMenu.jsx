import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Links */}
      {[
        "home",
        "skills",
        "prismap-projects",
        "future-plans",
        "personal-projects",
      ].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                      ${
                        menuOpen
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
        >
          {section
            .split("-")
            .map((s) => s.charAt(0).toUpperCase() + s.slice(1) + " ")}
        </a>
      ))}

      {/* Resume Button with Glowing Effect */}
      {/* <a
        href="https://drive.google.com/file/d/1fddrncXUHLipiBvgGPtOBQcgMZSRM8Do/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 bg-blue-500 text-white px-6 py-3 rounded-md font-medium transition-all duration-300
                    hover:bg-blue-600 transform ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }
                    animate-pulse shadow-lg shadow-blue-500/50 hover:shadow-blue-500/80`}
      >
        Resume
      </a> */}
    </div>
  );
};
