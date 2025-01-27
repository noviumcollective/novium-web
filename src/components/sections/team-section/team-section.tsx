import { Check } from "lucide-react";
import Container from "../../primatives/container";
import Heading from "../../primatives/heading";
import Subheading from "../../primatives/subheading";
import ProfileGrid from "./profile-grid";

export default function TeamSection() {
    return (
        <Container>
            <div className="space-y-4">
                <SectionTag />
                <Heading className="text-center">
                    The Minds Behind Novium
                </Heading>
                <Subheading className="text-center">
                    We&apos;re just five humans, fueled by coffee, creativity,
                    and the occasional brainstorming chaos. From late-night
                    ideas to breakthrough solutions, we turn pixels into magic,
                    strategies into success, and challenges into opportunities.
                    Meet the crew behind the Novium curtain—where the real fun
                    happens!
                </Subheading>
                <ProfileGrid />
            </div>
        </Container>
    );
}

function SectionTag() {
    return (
        <div className="flex justify-center items-center gap-5 border-2 border-novium-light-gray rounded-[4px] px-5 py-3 max-w-52 mx-auto">
            <h5 className="text-lg text-novium-primary font-semibold">
                Talent First
            </h5>
            <div className="rounded-full bg-success-state p-1">
                <Check className="size-4 text-white" strokeWidth={2} />
            </div>
        </div>
    );
}
