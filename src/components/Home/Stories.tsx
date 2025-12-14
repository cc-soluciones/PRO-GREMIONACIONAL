import { Card, CardContent } from "@/components/ui/card";

import { stories } from "@/constants/home";

export const Stories = () => (
    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Voces del Campo
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Historias reales de jóvenes rurales transformando
                    sus territorios
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stories.map((item, index) => (
                    <Card key={`stories-${index}`}>
                        <CardContent className="pt-6">
                            <div className="mb-4">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>
                            <p className="text-sm italic text-muted-foreground h-20 leading-relaxed">
                                {item.quote}
                            </p>
                            <div>
                                <p className="font-semibold">
                                    {item.name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {item.role}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);