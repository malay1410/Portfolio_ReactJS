import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-28 bg-[#0a0a0a]"
    >
      <RevealOnScroll>
        <div className="w-full max-w-[95%] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                placeholder="Your Name"
                className="w-full text-lg md:text-xl bg-white/5 border border-white/10 px-6 py-4 text-white rounded-md focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all duration-300"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                placeholder="example@gmail.com"
                className="w-full text-lg md:text-xl bg-white/5 border border-white/10 px-6 py-4 text-white rounded-md focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all duration-300"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <textarea
              name="message"
              required
              value={formData.message}
              rows={6}
              placeholder="Your Message..."
              className="w-full text-lg md:text-xl bg-white/5 border border-white/10 px-6 py-5 text-white rounded-md focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition-all duration-300 resize-none"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white text-lg md:text-xl py-4 px-6 rounded-md font-medium hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-transform duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mt-10">
            <a
              href="https://www.linkedin.com/in/malaybhatt1410/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/malay1410"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-3xl hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
