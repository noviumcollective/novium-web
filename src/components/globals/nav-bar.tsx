"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import NoviumMenu from "../../../public/icons/menu-icon.svg";
import NoviumLogoLight from "../../../public/logos/novium-logo-light.svg";
import NoviumLogoDark from "../../../public/logos/novium-logo-dark.svg";

import { useTheme } from "next-themes";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();
    const { resolvedTheme } = useTheme();

    return (
        <header className="sticky top-0 md:top-5 z-50 w-full container mx-auto bg-background py-4">
            <div className="flex h-16 items-center px-4 md:px-6">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="relative size-40">
                        {resolvedTheme === "dark" ? (
                            <Image src={NoviumLogoDark} alt="Novium Logo" fill className="object-contain" />
                        ) : (
                            <Image src={NoviumLogoLight} alt="Novium Logo" fill className="object-contain" />
                        )}
                    </div>
                </Link>

                {/* Separator */}
                <Separator orientation="vertical" className="mx-10 h-6 hidden lg:block w-px bg-black" />

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex md:items-center md:space-x-10">
                    <Link
                        href="/"
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-gray-900",
                            path === "/" && "font-semibold"
                        )}
                    >
                        Home
                    </Link>
                    <Link
                        href="/"
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-gray-900",
                            path === "/portfolio" && "font-semibold"
                        )}
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="#expertise"
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-gray-900",
                            path === "/expertise" && "font-semibold"
                        )}
                    >
                        Expertise
                    </Link>
                    <Link
                        href="#team"
                        className={cn(
                            "text-lg font-medium transition-colors hover:text-gray-900",
                            path === "/team" && "font-semibold"
                        )}
                    >
                        Team
                    </Link>
                </nav>

                {/* Contact Button */}
                <div className="hidden lg:block ml-auto">
                    <Link href="#contact-form">
                        <Button
                            variant="outline"
                            className="w-40 gap-2 text-white hover:border-novium-green hover:text-novium-green hover:bg-white border-novium-green py-2 bg-novium-green"
                        >
                            Let&apos;s Talk
                            <Mail className="h-4 w-4text-white" strokeWidth={2} />
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="ml-auto lg:hidden">
                            <div className="relative size-9">
                                <Image src={NoviumMenu} alt="Novium Menu Icon" fill className="object-contain" />
                            </div>
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className={cn("text-lg font-medium", path === "/" && "font-semibold")}
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/"
                                className={cn("text-lg font-medium", path === "/portfolio" && "font-semibold")}
                                onClick={() => setIsOpen(false)}
                            >
                                Portfolio
                            </Link>
                            <Link
                                href="#expertise"
                                className={cn("text-lg font-medium", path === "/expertise" && "font-semibold")}
                                onClick={() => setIsOpen(false)}
                            >
                                Expertise
                            </Link>
                            <Link
                                href="#team"
                                className={cn("text-lg font-medium", path === "/team" && "font-semibold")}
                                onClick={() => setIsOpen(false)}
                            >
                                Team
                            </Link>
                            <Link href="#contact-form">
                                <Button className="w-40 transform px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5">
                                    Let&apos;s Talk
                                    <Mail className="h-4 w-4 text-white" strokeWidth={2} />
                                </Button>
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
