export const History = () => (
    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">
                        Nuestra Historia
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            El Gremio Nacional de Juventudes Rurales de Chile
                            (GNJR) nace de la necesidad de articular y
                            representar a los jóvenes del mundo rural en un solo
                            movimiento organizado y con visión de futuro.
                        </p>
                        <p>
                            Fundado por jóvenes agricultores, emprendedores y
                            líderes comunitarios de diferentes regiones de
                            Chile, el GNJR se posiciona como una organización
                            profesional y estratégica que busca incidir en
                            políticas públicas y generar oportunidades reales
                            para la juventud rural.
                        </p>
                        <p>
                            A diferencia de otras organizaciones del sector,
                            nuestro enfoque integra innovación tecnológica,
                            desarrollo territorial y representatividad nacional,
                            posicionándonos como un actor clave en la
                            transformación del mundo rural chileno.
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        src="/chilean-rural-youth-group-meeting-organization.jpg"
                        alt="Historia GNJR"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    </section>
);
