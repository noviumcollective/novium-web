"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <div className="relative mx-auto my-10 flex container flex-col items-center justify-center bg-meetingroom2 bg-cover bg-center bg-no-repeat min-h-lvh">
            <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute top-0 h-40 w-0.5 bg-linear-to-b from-transparent via-novium-green to-transparent" />
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute h-40 w-0.5 bg-linear-to-b from-transparent via-novium-green to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-0.5 w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute mx-auto h-0.5 w-40 bg-linear-to-r from-transparent via-novium-green to-transparent" />
            </div>
            <div className="px-4 py-10 md:py-20">
                <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-200 md:text-4xl lg:text-7xl dark:text-slate-300">
                    {"Digital Experiences That Drive Results".split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1,
                                ease: "easeInOut",
                            }}
                            className="mr-2 inline-block"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className="relative z-10 mx-auto max-w-xl py-4 text-center text-sm md:text-lg font-normal text-neutral-100 dark:text-neutral-400"
                >
                    In a world where every click matters, we craft solutions that connect, convert, and create lasting
                    impact.
                </motion.p>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-4"
                >
                    <Button className="w-60 transform px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5">
                        Start your journey
                    </Button>
                    <Button className="w-60 transform border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5">
                        Contact us
                    </Button>
                </motion.div>
            </div>
        </div>
    );
}
