import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const Info = () => (
    <div>
        <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
        <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contacto@gnjr.cl</p>
                    <p className="text-muted-foreground">info@gnjr.cl</p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+56 9 1234 5678</p>
                    <p className="text-muted-foreground">+56 2 2345 6789</p>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-muted-foreground">
                        Av. Libertador Bernardo O'Higgins 1234
                        <br />
                        Santiago, Región Metropolitana
                        <br />
                        Chile
                    </p>
                </div>
            </div>
        </div>

        <div>
            <h3 className="font-semibold mb-4">Síguenos en Redes Sociales</h3>
            <div className="flex gap-3">
                <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                    <Facebook className="w-5 h-5" />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                    <Instagram className="w-5 h-5" />
                </a>
                <a
                    href="#"
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                    <Twitter className="w-5 h-5" />
                </a>
            </div>
        </div>

        <div className="mt-8">
            <Card>
                <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Horario de Atención</h3>
                    <p className="text-sm text-muted-foreground">
                        Lunes a Viernes: 9:00 - 18:00
                        <br />
                        Sábado: 9:00 - 13:00
                        <br />
                        Domingo: Cerrado
                    </p>
                </CardContent>
            </Card>
        </div>
    </div>
);
