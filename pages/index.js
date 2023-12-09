import dynamic from 'next/dynamic';
import React from 'react';
import AboutMe from '../components/AboutMe';
import EmailSection from '../components/EmailSection';
import Footer from '../components/Footer';
import AchievementsSection from '../components/AchievementsSection';

//Server: not found error handler
const HeroSection = dynamic(
  () => import('../components/HeroSection'),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col ">
        <main>
        <HeroSection />
        <AchievementsSection />
        <AboutMe />
        <EmailSection />
        </main>
        <Footer />
    </div>
  );
}

