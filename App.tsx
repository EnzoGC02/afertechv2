
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600/20">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
