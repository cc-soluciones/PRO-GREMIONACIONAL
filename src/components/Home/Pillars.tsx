import { Card, CardContent } from "@/components/ui/card";

import { pillars } from "@/constants/home";

export const Pillars = () => (
    <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Nuestros Pilares
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Construyendo un futuro sostenible para la juventud
                    rural de Chile
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pillars.map((item, index) => (
                    <Card key={`pillars-${index}`} className="border-2 hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);