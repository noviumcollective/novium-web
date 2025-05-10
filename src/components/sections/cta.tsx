import { Mail } from "lucide-react";
import Container from "../primatives/container";
import Heading from "../primatives/heading";
import { Button } from "../ui/button";

export default function CTA() {
    return (
        <Container className="gap-10 my-10 py-10 md:h-[90vh]">
            <Heading className="text-center text-white text-2xl md:!text-[56px]">
                Great Ideas Start with
                <br />a Simple Conversation
            </Heading>
            <Button
                variant="outline"
                className="w-60 gap-2 text-novium-dark-green hover:border-novium-dark-green hover:text-white hover:bg-novium-dark-green border-white py-6 bg-white"
            >
                Let&apos;s Talk
                <Mail className="h-4 w-4text-white" strokeWidth={2} />
            </Button>
        </Container>
    );
}
