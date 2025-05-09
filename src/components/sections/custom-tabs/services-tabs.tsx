"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs } from "./tabs";
import { motion } from "framer-motion";

const tabs = [
    {
        title: "Product Design",
        value: "product_design",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 md:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-novium-green to-novium-dark-green flex flex-col justify-center items-start">
                <CardHeader className="px-0 pt-0">
                    <Badge
                        variant="outline"
                        className="w-fit bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-100"
                    >
                        UI/UX Focus
                    </Badge>
                    <CardTitle className="text-novium-light-green">Product Design</CardTitle>
                    <CardDescription className="text-novium-light-green">
                        Crafting intuitive user experiences and beautiful interfaces
                    </CardDescription>
                </CardHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <Card className="border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20">
                        <CardContent className="p-6 flex flex-col gap-4">
                            <CardTitle className="text-emerald-800">Startup Services</CardTitle>
                            <ul className="space-y-2 text-sm text-emerald-900 dark:text-emerald-200">
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                                    Business Canvas Modeling
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                                    Workflow & S.O.P
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 ">
                        <CardContent className="p-6 flex flex-col gap-4">
                            <CardTitle className="text-emerald-800">Product Design</CardTitle>
                            <ul className="space-y-2 text-sm text-emerald-900 dark:text-emerald-200">
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                                    Ideation, Research & Idea validation
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                                    UX/UI Design
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                                    Testing & Documentation
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 ">
                        <CardContent className="p-6 flex flex-col gap-4">
                            <CardTitle className="text-emerald-800">Marketing Strategies</CardTitle>
                            <ul className="space-y-2 text-sm text-emerald-900 dark:text-emerald-200">
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                                    Product Rollout Campaign
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                                    Market Study & Communication Strategy
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        ),
    },
    {
        title: "Software Engineering",
        value: "software_engineering",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-5 md:p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-novium-secondary to-novium-primary font-mono flex flex-col justify-center items-start">
                <CardHeader className="px-0 pt-0">
                    <Badge variant="outline" className="w-fit bg-white">
                        Development Focus
                    </Badge>
                    <CardTitle className="text-white">Software Engineering</CardTitle>
                    <CardDescription className="text-white">
                        Crafting intuitive user experiences and beautiful interfaces
                    </CardDescription>
                </CardHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    <Card className="border-0 bg-blue-100">
                        <CardContent className="p-6 flex flex-col gap-4">
                            <CardTitle className="text-novium-primary">Backend Systems</CardTitle>
                            <ul className="space-y-2 text-sm text-primary dark:text-emerald-200">
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-novium-primary" />
                                    Secure APIs
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-novium-primary" />
                                    Algorithms
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-novium-primary" />
                                    Message Oriented Architecture
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border-0 bg-blue-100">
                        <CardContent className="p-6 flex flex-col gap-4">
                            <CardTitle className="text-novium-primary">Frontend Development</CardTitle>
                            <ul className="space-y-2 text-sm text-primary dark:text-emerald-200">
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-novium-primary" />
                                    Analytical Dashboards
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-novium-primary" />
                                    Web/Mobile Apps
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-novium-primary" />
                                    Micro-Frontends
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border-0 bg-blue-100">
                        <CardContent className="p-6 flex flex-col gap-4">
                            <CardTitle className="text-novium-primary">Dev Ops</CardTitle>
                            <ul className="space-y-2 text-sm text-primary dark:text-emerald-200">
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-novium-primary" />
                                    Containerization and Orchestration
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-novium-primary" />
                                    Bug Fixing
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 h-2 w-2 rounded-full bg-novium-primary" />
                                    Deployment
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        ),
    },
];

export function ServicesTabs() {
    return (
        <div className="h-[110dvh] lg:h-[60dvh] [perspective:1000px] relative flex flex-col container mx-auto w-full items-start justify-start my-40 px-4 lg:px-0">
            <div className="">
                <h1 className="z-10 text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
                    {"Building the Perfect Product!".split(" ").map((word, index) => (
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
                    className="py-4 text-lg font-normal text-neutral-600 max-w-5xl"
                >
                    At Novium, we tailor design solutions to your unique needs—whether it&apos;s branding, marketing,
                    digital experiences, or SaaS products. Explore our work across different categories to see how we
                    turn challenges into creative solutions, ready to bring your vision to life.
                </motion.p>
            </div>
            <Tabs tabs={tabs} />
        </div>
    );
}
