"use client";

import Image from "next/image";
import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Heading from "../primatives/heading";
import Subheading from "../primatives/subheading";

import CodeSnapshot from "../../../public/code-snapshot.png";
import BusinessModelingImage from "../../../public/product-building/business-canva-modeling.png";
import WorkflowImage from "../../../public/product-building/workflow.png";
import IdeationImage from "../../../public/product-building/ideation.png";
import UXUIDesignImage from "../../../public/product-building/ux-ui.png";
import TestingImage from "../../../public/product-building/testing.png";
import ProductRolloutImage from "../../../public/product-building/product-campaign.png";
import MarketStudyImage from "../../../public/product-building/market-study.png";

import { cn } from "@/lib/utils";

export default function ProductBuilding() {
    return (
        <div className="px-4 md:px-8">
            <div className="flex flex-col items-center justify-center md:h-screen container mx-auto bg-transparent">
                {/* Header */}
                <div className="flex flex-col items-start justify-center space-y-6 md:space-y-12">
                    <Heading className="text-foreground">Building the Perfect Product!</Heading>
                    <Subheading className="text-foreground max-w-full">
                        At Novium, we tailor design solutions to your unique needs—whether it&apos;s branding,
                        marketing, digital experiences, or SaaS products. Explore our work across different categories
                        to see how we turn challenges into creative solutions, ready to bring your vision to life.
                    </Subheading>
                </div>
                {/* Body */}
                <Tabs
                    defaultValue="productDesign"
                    className="w-full my-8 md:my-16"
                    // value={activeTab}
                    // onValueChange={setActiveTab}
                >
                    <TabsList className="mx-auto w-full bg-transparent mb-7 md:space-x-6">
                        <TabsTrigger
                            value="productDesign"
                            className="text-base data-[state=active]:bg-novium-green md:text-xl px-6 md:px-12"
                            // onClick={() => setTheme("light")}
                        >
                            Product Design
                        </TabsTrigger>
                        <TabsTrigger
                            value="softwareEngineering"
                            className="text-base data-[state=active]:bg-novium-green md:text-xl px-6 md:px-12"
                            // onClick={() => setTheme("dark")}
                        >
                            Software Engineering
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="productDesign">
                        <ProductDesign />
                    </TabsContent>
                    <TabsContent value="softwareEngineering">
                        <SoftwareEngineering />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}

const productDesignSections = [
    {
        title: "Startup Services",
        buttons: [
            {
                text: "Business Canvas Modeling",
                color: "bg-p-orange",
                image: BusinessModelingImage,
            },
            {
                text: "Workflow & S.O.P",
                color: "bg-p-purple",
                image: WorkflowImage,
            },
        ],
    },
    {
        title: "Product Design",
        buttons: [
            {
                text: "Ideation, Research & Idea validation",
                color: "bg-p-yellow",
                image: IdeationImage,
            },
            {
                text: "UX/UI Design",
                color: "bg-p-indigo",
                image: UXUIDesignImage,
            },
            {
                text: "Testing & Documentation",
                color: "bg-p-teal",
                image: TestingImage,
            },
        ],
    },
    {
        title: "Marketing Strategies",
        buttons: [
            {
                text: "Product Rollout Campaign",
                color: "bg-p-red",
                image: ProductRolloutImage,
            },
            {
                text: "Market Study & Communication Strategy",
                color: "bg-p-green",
                image: MarketStudyImage,
            },
        ],
    },
];

function ProductDesign() {
    const [hoveredButton, setHoveredButton] = useState<string>("Business Canvas Modeling");

    return (
        <div className="flex flex-col md:flex-row gap-8 p-6 bg-white shadow-sm">
            {/* Image section */}
            <div className="md:w-1/2 relative">
                {productDesignSections
                    .flatMap((s) => s.buttons)
                    .map(({ text, image }) => (
                        <Image
                            key={text}
                            src={image}
                            alt={text}
                            width={500}
                            height={500}
                            className={cn(
                                "absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out",
                                hoveredButton === text ? "opacity-100" : "opacity-0"
                            )}
                        />
                    ))}
            </div>

            {/* Services content */}
            <div className="md:w-1/2 space-y-12 flex flex-col items-start justify-center">
                {productDesignSections.map(({ title, buttons }) => (
                    <section key={title} className="space-y-4">
                        <h2 className="text-xl font-semibold">{title}</h2>
                        <div className="grid gap-4">
                            <div className="flex gap-4 flex-wrap">
                                {buttons.map(({ text, color }) => (
                                    <button
                                        key={text}
                                        className={cn(
                                            color,
                                            "px-6 md:px-16 py-3 text-base text-white rounded-[5px] hover:opacity-90 transition-all hover:font-semibold hover:shadow-lg"
                                        )}
                                        onMouseEnter={() => setHoveredButton(text)}
                                        onMouseLeave={() => setHoveredButton(text)}
                                    >
                                        {text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

const softwareEngineeringSections = [
    {
        title: "Backend_Systems",
        buttons: [{ text: "Secure_APIs" }, { text: "Algorithms" }, { text: "Message-Oriented_Architecture" }],
    },
    {
        title: "Frontend_Development",
        buttons: [
            {
                text: "Analytical_Dashboards",
            },
            { text: "Web/Mobile_Apps" },
            { text: "Micro-Frontends" },
        ],
    },
    {
        title: "Dev_Ops",
        buttons: [{ text: "Containerization_and_Orchestration" }, { text: "Bug_Fixing" }, { text: "Deployment" }],
    },
];

function SoftwareEngineering() {
    return (
        <div className="flex flex-col md:flex-row gap-8 md:p-6 bg-black shadow-sm items-center">
            {/* Services content */}
            <div className="md:w-1/2 space-y-12 flex flex-col items-start justify-center">
                {softwareEngineeringSections.map(({ title, buttons }) => (
                    <section key={title} className="space-y-4">
                        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
                        <div className="grid gap-4">
                            <div className="flex gap-4 flex-wrap">
                                {buttons.map(({ text }) => (
                                    <button
                                        key={text}
                                        className="px-6 py-3 text-white rounded-[5px] border border-novium-green"
                                    >
                                        {text}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
            <div className="md:w-1/2">
                <Image
                    src={CodeSnapshot}
                    alt="Code Snapshot"
                    width={555}
                    height={387}
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    );
}
