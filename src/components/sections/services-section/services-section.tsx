import Heading from "@/components/primatives/heading";
import Subheading from "@/components/primatives/subheading";

export default function ServicesSection() {
    return (
        <div className="md:px-8">
            <div className="h-screen my-32 bg-white p-5">
                <div className="bg-services h-full bg-contain bg-no-repeat bg-center px-[130px] pt-14 space-y-10">
                    <Heading>Our Services</Heading>
                    <Subheading className="text-novium-text">
                        <span className="font-semibold">
                            Ready to bring your ideas to life?
                        </span>{" "}
                        Schedule a one-on-one discussion with our team to
                        explore how our services can help you achieve your
                        goals. Select the service you&apos;re interested in, and
                        we&apos;ll tailor the conversation to your needs.
                    </Subheading>
                </div>
            </div>
        </div>
    );
}
