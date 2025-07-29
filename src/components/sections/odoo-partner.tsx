import Image from "next/image";

import OdooLogo from "@/assets/odoo_ready_partners_rgb.svg";
import Container from "../primatives/container";
import Heading from "../primatives/heading";
import Subheading from "../primatives/subheading";

export const OdooPartnerSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background container mx-auto">
            <Container>
                <div className="flex flex-col items-center justify-center text-center space-y-8">
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <Heading>Certified Odoo Partner</Heading>
                        <Subheading>
                            We specialize in implementing and customizing Odoo ERP solutions to streamline your business
                            operations
                        </Subheading>
                    </div>
                    <div className="relative w-full max-w-xl mx-auto mt-8">
                        <Image src={OdooLogo} alt="Odoo Ready Partner Logo" className="w-full h-auto" priority />
                    </div>
                </div>
            </Container>
        </section>
    );
};
