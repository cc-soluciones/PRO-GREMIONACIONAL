import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { feautred, description, title, tag, img } from "@/constants/programs";

export const Featured = () => (
    <section className="py-20">
        <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground border-0 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 md:p-12">
                        <div className="inline-block px-3 py-1 bg-primary-foreground/20 rounded-full text-sm font-medium mb-4">
                            {tag}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {title}
                        </h2>
                        <p className="text-lg mb-6 text-primary-foreground/90 leading-relaxed">
                            {description}
                        </p>
                        <ul className="space-y-2 mb-8">
                            {feautred.map((item, index) => (
                                <li key={`featured-${index}`} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/80" />
                                    <span>
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <Button variant="secondary" size="lg">
                            Más Información
                        </Button>
                    </div>
                    <div className="relative h-64 md:h-auto">
                        <img
                            src={img}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </Card>
        </div>
    </section>
);