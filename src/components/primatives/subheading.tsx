import { cn } from "@/lib/utils";

export default function Subheading({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <p
            className={cn(
                "text-sm md:text-xl leading-relaxed m-0 flex-1 md:max-w-none max-w-[50%]",
                className
            )}
        >
            {children}
        </p>
    );
}
