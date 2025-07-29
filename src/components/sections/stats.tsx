"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Heading from "../primatives/heading";

const stats = [
    { number: 100, label: "Successful Projects" },
    { number: 32, label: "Working Teams" },
    { number: 24, label: "Clients Managed" },
];

export default function Stats() {
    const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

    return (
        <section className="container mx-auto px-4 md:px-16 py-16 bg-white">
            <div className="space-y-6 md:space-y-12">
                <Heading className="text-slate-700">At Novium, We Design Solutions That Work.</Heading>

                <div className="flex flex-col md:flex-row md:gap-12 justify-center items-center">
                    <p className="text-sm md:text-lg text-neutral-600 mb-8 md:mb-0 text-center md:text-left">
                        We turn ideas into impactful digital solutions. From intuitive designs to seamless development,
                        we specialize in crafting user-centered experiences that drive results and help your business
                        thrive.
                    </p>

                    {/* Desktop Stats */}
                    <div className="hidden lg:flex gap-6 flex-1">
                        {stats.map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex items-center">
                                    <span className="text-8xl text-slate-800 font-semibold">{stat.number}</span>
                                    <span className="text-6xl text-[#98C13D] font-bold ml-1">+</span>
                                </div>
                                <p className="text-xl font-semibold">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Carousel */}
                    <div className="lg:hidden flex-1 w-full md:w-[50%]">
                        <Carousel
                            plugins={[plugin.current]}
                            className="w-full"
                            opts={{
                                align: "center",
                                loop: true,
                            }}
                        >
                            <CarouselContent>
                                {stats.map((stat, index) => (
                                    <CarouselItem key={index}>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-center">
                                                <span className="text-5xl font-bold">{stat.number}</span>
                                                <span className="text-5xl text-[#98C13D] font-bold ml-1">+</span>
                                            </div>
                                            <p className="text-lg font-semibold text-center">{stat.label}</p>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
