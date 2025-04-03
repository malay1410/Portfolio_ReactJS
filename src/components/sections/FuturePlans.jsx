import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const FuturePlans = () => {
  const timelineEvents = [
    {
      title: "📱 Mobile App for MySurgeryRisk",
    },
    {
      title: "🧠 Mentoring Junior Engineers",
    },
    {
      title: "🧹 Prismap Frontend Restructure",
    },
    {
      title: "🧩 Backend Development for MSR",
    },
    {
      title: "🚀 Server Deployments",
    },
    {
      title: "🤖 GenAI Tool Integration",
    },
  ];

  return (
    <section
      id="future-plans"
      className="min-h-screen flex items-center justify-center py-20 bg-black"
    >
      <div className="px-4 max-w-6xl mx-auto w-full">
        {/* <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          Beyond the Now: My Continued Value to Prismap
        </h2> */}

        <div className="relative">
          <h2 className="text-3xl font-bold mb-10 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Beyond the Now: My Continued Value to Prismap
          </h2>
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-300"></div>

          <div className="flex flex-col gap-6">
            {timelineEvents.map((event, idx) => {
              const isRight = idx % 2 !== 0;
              const ref = useRef(null);
              const inView = useInView(ref, {
                once: false,
                margin: "-20% 0px -20% 0px",
              });

              return (
                <motion.div
                  ref={ref}
                  key={idx}
                  initial={{ opacity: 0, x: isRight ? 100 : -100 }}
                  animate={
                    inView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: isRight ? 100 : -100 }
                  }
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center ${
                    isRight ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Card */}
                  <div className="px-4">
                    <div className="w-[30rem] bg-white/5 backdrop-blur-xs! border border-white/10 p-6 rounded-xl shadow-md">
                      <h3 className="text-lg font-semibold text-center text-white">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
