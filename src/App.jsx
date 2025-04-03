import "./App.css";
import "./index.css";

import { useState } from "react";

import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { PrismapProjects } from "./components/sections/PrismapProjects";
import { FuturePlans } from "./components/sections/FuturePlans";
import { PersonalProjects } from "./components/sections/PersonalProjects";
import { Footer } from "./components/Footer";

import ParticlesComponent from "./components/particles";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 items-center justify-center`}
      >
        <ParticlesComponent id="particles" />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <PrismapProjects />
        <FuturePlans />
        <PersonalProjects />
        <Footer />
      </div>
    </>
  );
}

export default App;
