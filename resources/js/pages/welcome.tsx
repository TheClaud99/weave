import { AboutSection } from '@/components/AboutSection';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { FutureSection } from '@/components/FutureSection';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { NarrativeSection } from '@/components/NarrativeSection';
import { OriginSection } from '@/components/OriginSection';
import { PdfSection } from '@/components/PdfSection';
import { RulesSection } from '@/components/RulesSection';
import { SettingSection } from '@/components/SettingSection';
import { SocialSection } from '@/components/SocialSection';
import { TeamSection } from '@/components/TeamSection';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-slate-900 font-serif text-slate-100">
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
            </div>
        </>
    );
}
