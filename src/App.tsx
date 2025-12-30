import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-700/20">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Projects />
        <Clients />
        <Contact />
      </main>
    </div>
  );
};

export default App;
