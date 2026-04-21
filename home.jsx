import React from 'react';
import Navbar from '../components/campaign/Navbar';
import HeroSection from '../components/campaign/HeroSection';
import PolicySection from '../components/campaign/PolicySection';
import DonateSection from '../components/campaign/DonateSection';
import PulseSection from '../components/campaign/PulseSection';
import VolunteerCTA from '../components/campaign/VolunteerCTA';
import Footer from '../components/campaign/Footer';
import StickyPowerBar from '../components/campaign/StickyPowerBar';

export default function Home() {
  return (
    <div className="relative bg-background text-foreground min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <PolicySection />
        <DonateSection />
        <PulseSection />
        <VolunteerCTA />
      </main>
      <Footer />
      <StickyPowerBar />
    </div>
  );
