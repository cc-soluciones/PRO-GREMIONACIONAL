import type React from "react";
import { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Form = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("[v0] Contact form submitted:", formData);
        alert("¡Gracias por contactarnos! Te responderemos pronto.");
        setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
    };

    return (
        <div>
            <Card>
                <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-6">
                        Envíanos un Mensaje
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <Label htmlFor="nombre">Nombre *</Label>
                            <Input
                                id="nombre"
                                required
                                value={formData.nombre}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        nombre: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <Label htmlFor="asunto">Asunto *</Label>
                            <Input
                                id="asunto"
                                required
                                value={formData.asunto}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        asunto: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div>
                            <Label htmlFor="mensaje">Mensaje *</Label>
                            <Textarea
                                id="mensaje"
                                required
                                rows={6}
                                value={formData.mensaje}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        mensaje: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                            Enviar Mensaje
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
