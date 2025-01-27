import { cn } from "@/lib/utils";

export default function Container({
    children,
    id,
    className,
}: {
    children: React.ReactNode;
    id?: string;
    className?: string;
}) {
    return (
        <div
            id={id}
            className={cn(
                className,
                "flex flex-col justify-center items-center container mx-auto"
            )}
        >
            {children}
        </div>
    );
}
