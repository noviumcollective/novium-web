import { Hero, ProductBuilding, Stats } from "@/components";

export default function Home() {
    return (
        <div className="px-8 bg-novium-bg">
            <Hero />
            <Stats />
            <ProductBuilding />
        </div>
    );
}
