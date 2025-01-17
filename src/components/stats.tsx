"use client";

import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Stats() {
    const stats = [
        { number: 100, label: "Successful Projects" },
        { number: 32, label: "Working Teams" },
        { number: 24, label: "Clients Managed" },
    ];

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

    return (
        <section className="w-full mx-auto px-4 md:px-16 py-16 bg-white my-[100px]">
            <div className="space-y-12">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    At Novium, We Design Solutions That Work.
                </h1>

                <div className="flex md:gap-12 justify-center items-start">
                    <p className="text-base md:text-xl leading-relaxed m-0 flex-1 md:max-w-none max-w-[50%]">
                        We turn ideas into impactful digital solutions. From
                        intuitive designs to seamless development, we specialize
                        in crafting user-centered experiences that drive results
                        and help your business thrive.
                    </p>

                    {/* Desktop Stats */}
                    <div className="hidden md:flex gap-6 flex-1">
                        {stats.map((stat, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex items-center">
                                    <span className="text-8xl font-bold">
                                        {stat.number}
                                    </span>
                                    <span className="text-6xl text-[#98C13D] font-bold ml-1">
                                        +
                                    </span>
                                </div>
                                <p className="text-xl font-semibold">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden flex-1 w-[50%]">
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
                                                <span className="text-5xl font-bold">
                                                    {stat.number}
                                                </span>
                                                <span className="text-5xl text-[#98C13D] font-bold ml-1">
                                                    +
                                                </span>
                                            </div>
                                            <p className="text-lg font-semibold text-center">
                                                {stat.label}
                                            </p>
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
