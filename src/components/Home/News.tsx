import Link from "next/link";
import {
    ArrowRight,
    Calendar,
    MapPin,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { news } from "@/constants/home";

export const News = () => (
    <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Últimas Noticias
                    </h2>
                    <p className="text-muted-foreground">
                        Mantente informado sobre nuestras actividades
                    </p>
                </div>
                <Button variant="outline" asChild>
                    <Link href="/noticias">
                        Ver Todas
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item, index) => (
                    <Card key={`news-${index}`} className="overflow-hidden">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {item.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {item.location}
                                </span>
                            </div>
                            <h3 className="font-semibold mb-2 text-balance">
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