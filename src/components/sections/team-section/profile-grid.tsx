"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import ProfileCard from "./profile-card";
import Credli from "../../../../public/profile-images/mohamad-credli.png";
import Chebli from "../../../../public/profile-images/mohamad-chebli.png";
import Rita from "../../../../public/profile-images/rita.png";
import Omar from "../../../../public/profile-images/omar.png";
import Kevin from "../../../../public/profile-images/kevin.png";
import { useMediaQuery } from "@/lib/useMediaQuery";

export type ProfileTag = {
    text: string;
};

export type Profile = {
    name: string;
    title: string;
    image: string;
    tags: ProfileTag[];
};

const profiles = [
    {
        name: "Mohamad Kreidly",
        title: "Founder, Software Engineer",
        image: Credli.src,
        tags: [
            {
                text: "CEO of Multitasking 🏗️",
            },
            {
                text: "Sleeps with one eye on code 👁️",
            },
            { text: "Gets sh*t done 🚀" },
        ],
    },
    {
        name: "Mohamad Chebli",
        title: "Frontend Developer",
        image: Chebli.src,
        tags: [
            {
                text: "Coffee-to-Code Converter ☕️ ➡ 💻",
            },
            {
                text: "CSS Sorcerer 🔮",
            },
            {
                text: "Pixel Tweaker Extraordinaire 🎯",
            },
        ],
    },
    {
        name: "Omar Zaatari",
        title: "Backend Developer",
        image: Omar.src,
        tags: [
            {
                text: "Code Magician 🧙‍♂️",
            },
            {
                text: "Bug Exterminator 🐞🔨",
            },
            {
                text: "Database Whisperer 🗣️💾",
            },
        ],
    },
    {
        name: "Kevin Chikhany",
        title: "UX/UI Designer",
        image: Kevin.src,
        tags: [
            {
                text: "Customer's BFF 🤝",
            },
            {
                text: "Pixel Perfect 🔍",
            },
            {
                text: "Experience Sculptor 🛠️",
            },
            {
                text: "Journey Architect 🚶",
            },
        ],
    },
    {
        name: "Rita Aasfour",
        title: "Senior Graphic Designer",
        image: Rita.src,
        tags: [
            {
                text: "Pixel Picasso 🎨",
            },
            {
                text: "Daydreaming? No, It's Brainstorming 💭",
            },
            {
                text: "Color Palette Whisperer 🌈",
            },
        ],
    },
];

export default function ProfileGrid() {
    const isMobile = useMediaQuery("(max-width: 768px)");

    if (isMobile) {
        return (
            <Carousel className="w-full max-w-xs mx-auto">
                <CarouselContent>
                    {profiles.map((profile, index) => (
                        <CarouselItem key={index}>
                            <ProfileCard profile={profile} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        );
    }

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {profiles.slice(0, 3).map((profile, index) => (
                    <div key={index} className={index === 1 ? "md:mt-12" : ""}>
                        <ProfileCard profile={profile} />
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {profiles.slice(3).map((profile, index) => (
                    <div
                        key={index}
                        className="md:col-span-3 flex justify-center"
                    >
                        <ProfileCard profile={profile} />
                    </div>
                ))}
            </div>
        </div>
    );
}
