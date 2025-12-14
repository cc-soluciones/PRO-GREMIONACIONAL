import Link from "next/link";
import { Button } from "@/components/ui/button";

import { hero, description, buttonsLinks } from "@/constants/home";

export const Hero = () => (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
            <img
                src="/chilean-rural-landscape-agriculture-young-farmers-.jpg"
                alt="Rural landscape"
                className="w-full h-full object-cover opacity-50"
            />
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
                    {hero}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {buttonsLinks.map((item) => (
                        <Button size="lg" asChild variant={item.variant as "default" | "outline" | "secondary"} key={item.href}>
                            <Link href={item.href}>{item.text}</Link>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    </section>
);