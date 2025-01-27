import { Mail } from "lucide-react";
import Container from "../primatives/container";
import Heading from "../primatives/heading";
import { NoviumButton } from "../primatives/novium-button";

export default function CTA() {
    return (
        <Container className="gap-10 my-10 py-10 md:h-[90vh]">
            <Heading className="text-center text-white text-2xl md:!text-[56px]">
                Great Ideas Start with
                <br />a Simple Conversation
            </Heading>
            <NoviumButton
                variant="outline"
                className="gap-2 text-white border-white py-6 bg-transparent"
            >
                Let&apos;s Talk
                <Mail className="h-4 w-4text-white" strokeWidth={2} />
            </NoviumButton>
        </Container>
    );
}
