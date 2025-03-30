// import { useState } from "react";
// import { RevealOnScroll } from "../RevealOnScroll";
// import emailjs from "emailjs-com";

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_SERVICE_ID,
//         import.meta.env.VITE_TEMPLATE_ID,
//         e.target,
//         import.meta.env.VITE_PUBLIC_KEY
//       )
//       .then((result) => {
//         alert("Message Sent Successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       })
//       .catch(() => alert("Oops! Something went wrong. Please try again."));
//   };

//   return (
//     <section
//       id="contact"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="px-4 w-150">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             Get In Touch
//           </h2>
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div className="relative">
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 required
//                 value={formData.name}
//                 className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-0 focus:border-blue-500 focus:bg-blue-500/5"
//                 placeholder="Name..."
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//               />
//             </div>

//             <div className="relative">
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-0 focus:border-blue-500 focus:bg-blue-500/5"
//                 placeholder="example.gmail.com"
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//               />
//             </div>

//             <div className="relative">
//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 value={formData.message}
//                 rows={5}
//                 className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-0 focus:border-blue-500 focus:bg-blue-500/5"
//                 placeholder="Your Message..."
//                 onChange={(e) =>
//                   setFormData({ ...formData, message: e.target.value })
//                 }
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full transform bg-blue-500 text-white py-3 px-4 rounded font-medium transition-transform duration-300 ease-out hover:-translate-y-0.5! hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]! cursor-pointer"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };

import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

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
      className="min-h-screen flex items-center justify-center py-20 px-4 overflow-x-hidden"
    >
      <RevealOnScroll>
        <div className="w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full text-lg sm:text-base md:text-lg lg:text-xl bg-white/5 border border-white/10 px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-0 focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full text-lg sm:text-base md:text-lg lg:text-xl bg-white/5 border border-white/10 px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-0 focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full text-lg sm:text-base md:text-lg lg:text-xl bg-white/5 border border-white/10 px-4 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 text-white rounded-md transition-all duration-300 focus:outline-none focus:ring-0 focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white text-lg sm:text-base md:text-lg lg:text-xl py-3 px-4 rounded font-medium transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
