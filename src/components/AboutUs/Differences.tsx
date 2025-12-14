import { Card, CardContent } from "@/components/ui/card";

import { differences } from "@/constants/aboutUs";

export const Differences = () => (
    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    ¿Por qué GNJR?
                </h2>
                <Card>
                    <CardContent className="pt-6">
                        <div className="space-y-6">
                            {differences.map((item, index) => (
                                <div key={`differences-${index}`}>
                                    <h3 className="font-semibold text-lg mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
);