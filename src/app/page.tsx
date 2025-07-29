import { Hero, CTA, OdooPartnerSection } from "@/components";
import { ServicesTabs } from "@/components/sections/custom-tabs/services-tabs";
import TeamSection from "@/components/sections/team-section/team-section";
import { Stats } from "@/components";
import { Footer } from "@/components";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Hero />
            <Stats />
            <OdooPartnerSection />
            <ServicesTabs />
            <TeamSection />
            <div className="bg-novium-conic-gradient-mobile md:bg-novium-conic-gradient">
                <CTA />
                <Footer />
            </div>
        </main>
    );
}
