import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export function ProductDesignSection() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20">
                <CardHeader>
                    <Badge
                        variant="outline"
                        className="w-fit bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-100"
                    >
                        UI/UX Focus
                    </Badge>
                    <CardTitle className="text-emerald-800 dark:text-emerald-100">Product Design</CardTitle>
                    <CardDescription className="text-emerald-700 dark:text-emerald-300">
                        Crafting intuitive user experiences and beautiful interfaces
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-sm text-emerald-900 dark:text-emerald-200">
                        <li className="flex items-center">
                            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                            User Research & Personas
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                            Wireframing & Prototyping
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                            Interaction Design
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                            Visual Design Systems
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                            Usability Testing
                        </li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}
