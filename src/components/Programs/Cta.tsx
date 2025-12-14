import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Cta = () => (
    <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    ¿Listo para participar?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Únete al GNJR y accede a todos nuestros programas,
                    capacitaciones y oportunidades de financiamiento.
                </p>
                <Button size="lg" asChild>
                    <Link href="/unirse">Únete Ahora</Link>
                </Button>
            </div>
        </div>
    </section>
);