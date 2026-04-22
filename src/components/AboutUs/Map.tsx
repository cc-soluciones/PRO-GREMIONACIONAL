import { MapChile } from "@/components/svg/MapChile";

export const Map = () => (
    <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Presencia Nacional
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Operamos en múltiples regiones de Chile, conectando
                    jóvenes rurales de norte a sur
                </p>
            </div>

            <div className="max-w-4xl h-210 mx-auto flex items-center justify-center aspect-[280/1640]">
                <MapChile/>
            </div>
        </div>
    </section>
);