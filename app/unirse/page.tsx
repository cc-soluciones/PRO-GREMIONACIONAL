"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function UnirsePage() {
  const [formData, setFormData] = useState({
    nombre: "",
    rut: "",
    edad: "",
    genero: "",
    region: "",
    comuna: "",
    rolRural: "",
    tipoParticipacion: "",
    email: "",
    telefono: "",
    intereses: [] as string[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    alert("¡Gracias por tu interés! Nos contactaremos contigo pronto.")
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Únete al GNJR</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sé parte de la red de jóvenes rurales más grande de Chile. Tu voz y tu territorio importan.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información Personal */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Información Personal</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre Completo *</Label>
                        <Input
                          id="nombre"
                          required
                          value={formData.nombre}
                          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="rut">RUT *</Label>
                        <Input
                          id="rut"
                          required
                          placeholder="12.345.678-9"
                          value={formData.rut}
                          onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="edad">Edad *</Label>
                        <Input
                          id="edad"
                          type="number"
                          required
                          min="18"
                          max="40"
                          value={formData.edad}
                          onChange={(e) => setFormData({ ...formData, edad: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="genero">Género *</Label>
                        <select
                          id="genero"
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={formData.genero}
                          onChange={(e) => setFormData({ ...formData, genero: e.target.value })}
                        >
                          <option value="">Seleccionar</option>
                          <option value="masculino">Masculino</option>
                          <option value="femenino">Femenino</option>
                          <option value="otro">Otro</option>
                          <option value="prefiero-no-decir">Prefiero no decir</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Ubicación */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Ubicación</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="region">Región *</Label>
                        <select
                          id="region"
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={formData.region}
                          onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        >
                          <option value="">Seleccionar</option>
                          <option value="arica">Arica y Parinacota</option>
                          <option value="tarapaca">Tarapacá</option>
                          <option value="antofagasta">Antofagasta</option>
                          <option value="atacama">Atacama</option>
                          <option value="coquimbo">Coquimbo</option>
                          <option value="valparaiso">Valparaíso</option>
                          <option value="metropolitana">Metropolitana</option>
                          <option value="ohiggins">O'Higgins</option>
                          <option value="maule">Maule</option>
                          <option value="nuble">Ñuble</option>
                          <option value="biobio">Biobío</option>
                          <option value="araucania">La Araucanía</option>
                          <option value="los-rios">Los Ríos</option>
                          <option value="los-lagos">Los Lagos</option>
                          <option value="aysen">Aysén</option>
                          <option value="magallanes">Magallanes</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="comuna">Comuna *</Label>
                        <Input
                          id="comuna"
                          required
                          value={formData.comuna}
                          onChange={(e) => setFormData({ ...formData, comuna: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Perfil Rural */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Perfil Rural</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="rolRural">Rol en el Mundo Rural *</Label>
                        <select
                          id="rolRural"
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={formData.rolRural}
                          onChange={(e) => setFormData({ ...formData, rolRural: e.target.value })}
                        >
                          <option value="">Seleccionar</option>
                          <option value="agricultor">Agricultor/a</option>
                          <option value="emprendedor">Emprendedor/a Rural</option>
                          <option value="agroindustria">Agroindustria</option>
                          <option value="profesional">Profesional del Agro</option>
                          <option value="estudiante">Estudiante</option>
                          <option value="empresa">Empresa Relacionada</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="tipoParticipacion">Tipo de Participación *</Label>
                        <select
                          id="tipoParticipacion"
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          value={formData.tipoParticipacion}
                          onChange={(e) => setFormData({ ...formData, tipoParticipacion: e.target.value })}
                        >
                          <option value="">Seleccionar</option>
                          <option value="socio">Socio Activo</option>
                          <option value="colaborador">Colaborador</option>
                          <option value="empresa-aliada">Empresa Aliada</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Contacto */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Contacto</h3>
                    <div className="grid md:grid-cols-2 gap-4">
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
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input
                          id="telefono"
                          type="tel"
                          required
                          placeholder="+56 9 1234 5678"
                          value={formData.telefono}
                          onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Intereses */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Áreas de Interés</h3>
                    <div className="space-y-3">
                      {[
                        "Innovación y Tecnología",
                        "Agricultura Sostenible",
                        "Políticas Públicas",
                        "Cultura y Territorio",
                        "Participación Ciudadana",
                        "Emprendimiento",
                      ].map((interes) => (
                        <div key={interes} className="flex items-center gap-2">
                          <Checkbox
                            id={interes}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({ ...formData, intereses: [...formData.intereses, interes] })
                              } else {
                                setFormData({ ...formData, intereses: formData.intereses.filter((i) => i !== interes) })
                              }
                            }}
                          />
                          <Label htmlFor={interes} className="font-normal cursor-pointer">
                            {interes}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
