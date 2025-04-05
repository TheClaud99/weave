import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { RulesSection } from '@/components/RulesSection';
import { SettingSection } from '@/components/SettingSection';
import { NarrativeSection } from '@/components/NarrativeSection';
import { OriginSection } from '@/components/OriginSection';
import { FutureSection } from '@/components/FutureSection';
import { PdfSection } from '@/components/PdfSection';
import { SocialSection } from '@/components/SocialSection';
import { FaqSection } from '@/components/FaqSection';
import { TeamSection } from '@/components/TeamSection';
import { Footer } from '@/components/Footer';
export function App() {
  return <div className="bg-slate-900 text-slate-100 min-h-screen font-serif">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <RulesSection />
        <SettingSection />
        <NarrativeSection />
        <OriginSection />
        <FutureSection />
        <PdfSection />
        <SocialSection />
        <FaqSection />
        <TeamSection />
      </main>
      <Footer />
    </div>;
}