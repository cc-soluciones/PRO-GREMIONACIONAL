import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Laptop, GraduationCap, Users, Sprout, DollarSign, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ProgramasPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Programas y Proyectos</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Iniciativas que impulsan el desarrollo, la innovación y el liderazgo de la juventud rural chilena
            </p>
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground border-0 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12">
                <div className="inline-block px-3 py-1 bg-primary-foreground/20 rounded-full text-sm font-medium mb-4">
                  Programa Destacado
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">AgroDigitalIA</h2>
                <p className="text-lg mb-6 text-primary-foreground/90 leading-relaxed">
                  Programa integral de transformación digital para jóvenes agricultores. Capacitación en tecnologías
                  agrícolas, inteligencia artificial, sistemas de riego inteligente y gestión digital de predios.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/80" />
                    <span>Capacitación en tecnologías agrícolas de vanguardia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/80" />
                    <span>Asesoría técnica personalizada</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/80" />
                    <span>Acceso a financiamiento para implementación</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/80" />
                    <span>Red de mentores y expertos</span>
                  </li>
                </ul>
                <Button variant="secondary" size="lg">
                  Más Información
                </Button>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="AgroDigitalIA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Other Programs */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Otros Programas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Múltiples iniciativas diseñadas para fortalecer capacidades y oportunidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Escuela de Liderazgo Rural</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Formación integral en liderazgo, gestión de organizaciones y advocacy para jóvenes líderes
                  territoriales.
                </p>
                <Button variant="outline" size="sm">
                  Más Información
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Sprout className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Capacitación Técnica Agrícola</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Talleres especializados en manejo de cultivos, riego tecnificado, control de plagas y buenas prácticas
                  agrícolas.
                </p>
                <Button variant="outline" size="sm">
                  Más Información
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Red de Emprendedores Rurales</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Conecta con otros emprendedores, accede a mentorías y participa en ruedas de negocios y ferias
                  regionales.
                </p>
                <Button variant="outline" size="sm">
                  Más Información
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Digitalización de Predios</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Implementación de herramientas digitales para gestión de predios, trazabilidad y comercialización
                  online.
                </p>
                <Button variant="outline" size="sm">
                  Más Información
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Innovación Rural</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Apoyo a proyectos de innovación en agricultura, agroindustria y soluciones tecnológicas para el campo.
                </p>
                <Button variant="outline" size="sm">
                  Más Información
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Acceso a Financiamiento</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Orientación y apoyo para postular a fondos de INDAP, SERCOTEC, CORFO y otros instrumentos públicos.
                </p>
                <Button variant="outline" size="sm">
                  Más Información
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Instituciones */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Vinculación Institucional</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Trabajamos en colaboración con instituciones clave del ecosistema rural
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
              <span className="font-bold text-lg text-center">INDAP</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
              <span className="font-bold text-lg text-center">INJUV</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
              <span className="font-bold text-lg text-center">SERCOTEC</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
              <span className="font-bold text-lg text-center">CORFO</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para participar?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Únete al GNJR y accede a todos nuestros programas, capacitaciones y oportunidades de financiamiento.
            </p>
            <Button size="lg" asChild>
              <Link href="/unirse">Únete Ahora</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
