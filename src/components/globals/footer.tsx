import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import Container from "../primatives/container";
import { NoviumButton } from "../primatives/novium-button";
import { Instagram } from "lucide-react";
import NoviumLogo from "../../../public/logos/novium-logo-light.svg";
import XLogo from "../../../public/icons/x.svg";
import LinkedinLogo from "../../../public/icons/linkedIn-logo.svg";
import YoutubeLogo from "../../../public/icons/youtube-logo.svg";

export default function Footer() {
    return (
        <>
            <footer className="w-full py-16 bg-white container mx-auto px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Section */}
                    <div className="space-y-8 flex flex-col justify-center items-center md:justify-normal md:items-start">
                        <div className="space-y-2">
                            <h2 className="font-bold text-center md:text-left">Contact</h2>
                            <Link href="mailto:sales@novium.io">
                                <p className="text-sm md:text-base text-center md:text-left">sales@novium.io</p>
                            </Link>
                            <Link href="https://wa.me/96176667400" target="_blank" rel="noopener noreferrer">
                                <p className="text-sm md:text-base text-center md:text-left">+961 76 667 400</p>
                            </Link>
                        </div>

                        <div className="space-y-2">
                            <h2 className="font-bold text-center md:text-left">Where to find us</h2>
                            <div>
                                <p className="text-sm md:text-base text-center md:text-left">Broumana</p>
                                <p className="text-sm md:text-base text-center md:text-left">Street 18, zone 03</p>
                            </div>
                        </div>
                    </div>

                    {/* Center Section */}
                    <div className="space-y-8 flex flex-col items-center">
                        <Image src={NoviumLogo} alt="Novium Logo" width={300} height={80} className="h-20 w-auto" />

                        <div className="flex gap-6">
                            <Link href="#" className="hover:opacity-80">
                                <Image src={XLogo} alt="X" width={6} height={6} className="w-6 h-6" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="hover:opacity-80">
                                <Instagram className="w-6 h-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="hover:opacity-80">
                                <Image src={YoutubeLogo} alt="X" width={6} height={6} className="w-6 h-6" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                            <Link href="#" className="hover:opacity-80">
                                <Image src={LinkedinLogo} alt="X" width={6} height={6} className="w-6 h-6" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col justify-center items-center text-center md:text-right gap-8">
                        <h2 className="text-xl font-semibold text-center">
                            Got a project
                            <br />
                            in mind?
                        </h2>
                        <div className="gap-8 flex flex-col items-center justify-center">
                            <NoviumButton
                                variant="default"
                                className="w-full md:w-auto border border-novium-green rounded-none"
                            >
                                Schedule Discussion
                            </NoviumButton>
                            <Link href="#" className="underline hover:opacity-80 text-center">
                                Or contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
            <NewsletterSubscription />
        </>
    );
}

function NewsletterSubscription() {
    return (
        <Container>
            {/* Newsletter Section */}
            <div className="flex-1 grid md:grid-cols-2 px-4">
                {/* Left Column */}
                <div className="pt-8 px-0 md:py-12 md:pr-12 flex flex-col gap-6 md:gap-10 justify-between">
                    <div className="space-y-2">
                        <h2 className="text-base font-bold text-white">Subscribe to our newsletter</h2>
                        <p className="text-sm md:text-base text-white">
                            Receive the latest news from Novium
                            <br />
                            in your inbox. No spam.
                        </p>
                    </div>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:underline text-white text-base md:text-lg">
                            Privacy & Policy
                        </Link>
                        <Link href="#" className="hover:underline text-white text-base md:text-lg">
                            Legal notices
                        </Link>
                    </div>
                </div>

                {/* Right Column */}
                <div className="py-8 px-0 md:py-12 md:pl-12 flex flex-col gap-10">
                    <div className="flex flex-col gap-12 justify-center items-start md:items-end">
                        <div className="flex gap-4 max-w-xl bg-novium-green p-3">
                            <Input
                                type="email"
                                placeholder="Your Email"
                                className="w-full shadow-none bg-white rounded-none text-black text-sm placeholder:text-black focus:ring-0 focus:outline-hidden"
                                aria-label="Email address"
                            />
                            <NoviumButton
                                type="submit"
                                className="px-6 py-2 bg-transparent text-black text-lg font-semibold border-0 shadow-none"
                            >
                                Subscribe
                            </NoviumButton>
                        </div>
                        <p className="text-slate-500 text-sm">
                            By submitting your email address, you agree to receive the monthly Novium newsletter. For
                            more information, please read our{" "}
                            <Link href="#" className="underline hover:no-underline">
                                privacy policy.
                            </Link>
                        </p>
                    </div>

                    <nav>
                        <ul className="flex justify-between items-center">
                            <li>
                                <Link href="#" className="hover:underline text-lg">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline text-lg">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline text-lg">
                                    Expertise
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:underline text-lg">
                                    Team
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Container>
    );
}
