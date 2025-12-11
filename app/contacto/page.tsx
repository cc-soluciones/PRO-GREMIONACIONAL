"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formData)
    alert("¡Gracias por contactarnos! Te responderemos pronto.")
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" })
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contacto</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estamos aquí para escucharte. Ponte en contacto con nosotros.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
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

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="nombre">Nombre *</Label>
                      <Input
                        id="nombre"
                        required
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="asunto">Asunto *</Label>
                      <Input
                        id="asunto"
                        required
                        value={formData.asunto}
                        onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        required
                        rows={6}
                        value={formData.mensaje}
                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
