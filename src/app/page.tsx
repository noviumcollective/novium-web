import {
    CTA,
    Footer,
    Hero,
    ProductBuilding,
    ServicesSection,
    Stats,
    Team,
} from "@/components";
export default function Home() {
    return (
        <div className="bg-novium-bg">
            <Hero />
            <Stats />
            <ProductBuilding />
            <ServicesSection />
            <Team />
            <div className="bg-novium-conic-gradient">
                <CTA />
                <Footer />
            </div>
        </div>
    );
}
