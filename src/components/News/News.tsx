import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Tag } from "lucide-react";

import { news } from "@/constants/news";

export const News = () => (
    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((noticia, index) => (
                    <Card
                        key={index}
                        className="overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={noticia.image || "/placeholder.svg"}
                            alt={noticia.title}
                            className="w-full h-48 object-cover"
                        />
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {noticia.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {noticia.location}
                                </span>
                            </div>
                            <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-3">
                                <span className="flex items-center gap-1">
                                    <Tag className="w-3 h-3" />
                                    {noticia.category}
                                </span>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-balance">
                                {noticia.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {noticia.excerpt}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);