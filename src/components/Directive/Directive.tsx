import { Card, CardContent } from "@/components/ui/card";

import { directive } from "@/constants/directive";

export const Directive = () => (
    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {directive.map((member, index) => (
                    <Card key={index} className="overflow-hidden">
                        <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-64 object-cover"
                        />
                        <CardContent className="pt-6">
                            <h3 className="font-bold text-xl mb-1">
                                {member.name}
                            </h3>
                            <p className="text-primary font-semibold mb-2">
                                {member.role}
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">
                                {member.region}
                            </p>
                            <p className="text-sm leading-relaxed">
                                {member.bio}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
);