import { institutions } from "@/constants/programs";

export const Institutions = () => (
    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Vinculación Institucional
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Trabajamos en colaboración con instituciones clave del
                    ecosistema rural
                </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {institutions.map((item) => (
                    <div key={`institutions-${item}`} className="flex items-center justify-center p-6 bg-muted rounded-lg">
                        <span className="font-bold text-lg text-center">{item}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
