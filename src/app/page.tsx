import { CTA, Footer, Hero, Stats } from "@/components";
import { ServicesTabs } from "@/components/sections/custom-tabs/services-tabs";
import TeamSection from "@/components/sections/team-section/team-section";

export default function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <ServicesTabs />
            <TeamSection />
            <div className="bg-novium-conic-gradient">
                <CTA />
                <Footer />
            </div>
        </>
    );
}
