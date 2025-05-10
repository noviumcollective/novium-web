"use client";

import { Check } from "lucide-react";
import Container from "../../primatives/container";
import Heading from "../../primatives/heading";
import Subheading from "../../primatives/subheading";
import Avatar1 from "@/assets/image.png";
import Avatar2 from "@/assets/image2.png";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

type TeamMember = {
    name: string;
    role: string;
    tags: string[];
    image: string;
};

const teamMembers: TeamMember[] = [
    {
        name: "Mohamad Kreidly",
        role: "Founder, Software Engineer",
        tags: ["CEO of Multitasking", "Sleeps with one eye on code", "Gets sh*t done"],
        image: Avatar1.src,
    },
    {
        name: "Mohamad Chebli",
        role: "Frontend Developer",
        tags: ["Coffee-to-Code Converter", "CSS Sorcerer", "Pixel Tweaker Extraordinaire"],
        image: Avatar1.src,
    },
    {
        name: "Omar Zaatari",
        role: "Backend Developer",
        tags: ["Code Magician", "Database Whisperer", "Bug Exterminator"],
        image: Avatar1.src,
    },
];

export default function TeamSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <Container>
            <div className="space-y-4" ref={ref}>
                <SectionTag />
                <Heading className="text-center">The Minds Behind Novium</Heading>
                <Subheading className="text-center">
                    We&apos;re just five humans, fueled by coffee, creativity, and the occasional brainstorming chaos.
                    From late-night ideas to breakthrough solutions, we turn pixels into magic, strategies into success,
                    and challenges into opportunities. Meet the crew behind the Novium curtain—where the real fun
                    happens!
                </Subheading>

                <div className="container mx-auto px-4">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 shadow-md overflow-hidden" // No border-radius
                                variants={itemVariants}
                            >
                                <div className="p-4 flex flex-col items-center">
                                    <div className="w-40 h-40 mb-4 relative overflow-hidden">
                                        <Image
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            width={160}
                                            height={160}
                                            className="pixelated" // This will help with the pixelated effect
                                        />
                                    </div>

                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-gray-600 mb-3">{member.role}</p>

                                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                                        {member.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Container>
    );
}

function SectionTag() {
    return (
        <div className="flex justify-center items-center gap-5 border-2 border-novium-light-gray rounded-[4px] px-5 py-3 max-w-52 mx-auto">
            <h5 className="text-lg text-novium-primary font-semibold">Talent First</h5>
            <div className="rounded-full bg-success-state p-1">
                <Check className="size-4 text-white" strokeWidth={2} />
            </div>
        </div>
    );
}
