import { cn } from "@/lib/utils";

export default function Heading({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h2
            className={cn(
                className,
                "font-bold tracking-tight text-2xl md:text-5xl"
            )}
        >
            {children}
        </h2>
    );
}
