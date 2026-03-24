import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import BentoServices from './components/BentoServices';
import AirlinesMarquee from './components/AirlinesMarquee';
import RunwaySteps from './components/RunwaySteps';
import ComparisonTable from './components/ComparisonTable';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <BentoServices />
        <AirlinesMarquee />
        <RunwaySteps />
        <ComparisonTable />
        <TargetAudience />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
