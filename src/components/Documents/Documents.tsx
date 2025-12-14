import { FileText, Download } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { documents } from "@/constants/documents";

export const Documents = () => (
    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {documents.map((doc, index) => (
                    <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow"
                    >
                        <CardContent className="pt-6">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <div className="inline-block px-2 py-1 bg-muted text-xs rounded-full mb-3">
                                {doc.category}
                            </div>
                            <h3 className="font-semibold text-lg mb-2">
                                {doc.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {doc.description}
                            </p>
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                                <span>{doc.size}</span>
                                <span>{doc.date}</span>
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full bg-transparent"
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Descargar PDF
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);
