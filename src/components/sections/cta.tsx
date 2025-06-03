"use client";

import { Mail } from "lucide-react";
import Container from "../primatives/container";
import Heading from "../primatives/heading";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import { useState } from "react";

export default function CTA() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formData = new FormData(e.currentTarget);
            const response = await fetch("https://formspree.io/f/xanjyogo", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setIsSubmitted(true);
                e.currentTarget.reset();
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Container className="gap-10 my-10 py-10 md:h-[90vh]">
            <Heading className="text-center text-white text-2xl md:text-[56px]!">
                Great Ideas Start with
                <br />a Simple Conversation
            </Heading>

            <form id="contact-form" onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-6 px-4">
                <div className="space-y-4">
                    <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="bg-white/10 border-novium-green text-white placeholder:text-white/70"
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="bg-white/10 border-novium-green text-white placeholder:text-white/70"
                    />
                    <Textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="bg-white/10 border-novium-green text-white placeholder:text-white/70 min-h-[120px]"
                    />
                </div>

                <Button
                    type="submit"
                    variant="outline"
                    className="w-full gap-2 text-black hover:border-novium-dark-green hover:text-white hover:bg-novium-dark-green border-novium-green md:py-6 bg-novium-green"
                    disabled={isSubmitting || isSubmitted}
                >
                    {isSubmitting ? (
                        "Sending..."
                    ) : isSubmitted ? (
                        "Message Sent!"
                    ) : (
                        <div className="flex items-center gap-2">
                            <span>Let&apos;s Talk</span>
                            <Mail className="h-4 w-4" strokeWidth={2} />
                        </div>
                    )}
                </Button>

                {isSubmitted && (
                    <p className="text-center text-white mt-4">
                        Thank you for your message! We&apos;ll get back to you soon.
                    </p>
                )}
            </form>
        </Container>
    );
}
