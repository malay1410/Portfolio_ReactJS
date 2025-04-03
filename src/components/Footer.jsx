import { useState, useEffect } from "react";

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.offsetHeight;
      setIsVisible(scrollPosition >= pageHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-0 w-full min-h-[3rem] z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-t border-white/10 shadow-lg flex items-center justify-center">
        © 2025 Malay Bhatt
      </div>
    )
  );
};
