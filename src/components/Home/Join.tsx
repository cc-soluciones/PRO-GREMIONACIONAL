import Link from "next/link";
import {
    ArrowRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { joinTitle, joinDescription, joinButtonText } from "@/constants/home";

export const Join = () => (
    <section className="py-20">
        <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground border-0">
                <CardContent className="py-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                        {joinTitle}
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 text-pretty leading-relaxed">
                        {joinDescription}
                    </p>
                    <Button size="lg" variant="secondary" asChild>
                        <Link href="/unirse">
                            {joinButtonText}
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    </section>
);