import { CTA, Footer, Hero, Stats } from "@/components";
import { ServicesTabs } from "@/components/sections/custom-tabs/services-tabs";


export default function Home() {
    return (
        <>
            
                <Hero />
                <Stats />
                <ServicesTabs />
  
            <div className="bg-novium-conic-gradient">
                <CTA />
                <Footer />
            </div>
        </>
    );
}
