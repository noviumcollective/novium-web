import Image from "next/image";
import { Profile, ProfileTag } from "./profile-grid";
import { Card } from "@/components/ui/card";

type ProfileCardProps = {
    profile: Profile;
};

export default function ProfileCard({ profile }: ProfileCardProps) {
    return (
        <Card className="mx-auto w-[400px] h-auto">
            <div className="relative bg-white min-w-[400px] h-[580px] shadow-md transition-all duration-300 hover:shadow-2xl group overflow-hidden">
                <div className="overflow-hidden h-full">
                    <Image
                        src={profile.image || "/placeholder.svg"}
                        alt={`${name}'s portrait`}
                        width={400}
                        height={580}
                        className="block w-[135%] h-full object-cover grayscale opacity-60 transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                </div>
                <div className="absolute bottom-0 bg-white w-full px-4 py-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-[140%]">
                    <h3 className="text-novium-primary text-2xl font-semibold mb-2">
                        {profile.name}
                    </h3>
                    <h4 className="text-novium-primary text-xl">{profile.title}</h4>
                </div>
                <div className="absolute bottom-0 bg-white w-full px-3 py-3 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                    <div className="flex flex-wrap gap-2 py-4">
                        {profile.tags.map((tag: ProfileTag, index: number) => (
                            <div
                                key={index}
                                className="inline-flex flex-wrap items-center px-4 py-2 rounded-n-8 border-2 border-black w-fit"
                            >
                                <span className="text-sm">{tag.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}
