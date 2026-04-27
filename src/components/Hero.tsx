import React from "react";

interface Props {
    title?: string;
    description?: string | React.ReactNode;
};

export const Hero = ({ 
    title, 
    description 
}: Props) => (
    <section className="pt-32 pb-20 bg-muted/50">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                    {title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    </section>
);