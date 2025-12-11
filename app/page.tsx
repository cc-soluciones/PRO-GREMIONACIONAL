import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Sprout, Laptop, Mountain, ArrowRight, Calendar, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
          <img
            src="/chilean-rural-landscape-agriculture-young-farmers-.jpg"
            alt="Rural landscape"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Jóvenes rurales organizados para transformar el territorio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
              Innovación, representatividad y desarrollo desde y para el mundo rural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/unirse">Unirme al Gremio</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sobre-nosotros">Conocer la Misión</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/programas">Ver Programas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Pilares</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Construyendo un futuro sostenible para la juventud rural de Chile
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Representación Nacional</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Voz única y organizada de la juventud rural ante instituciones y políticas públicas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Sprout className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Desarrollo Rural</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fortalecimiento de capacidades productivas y emprendimiento en el campo.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Laptop className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Innovación y Tecnología</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Digitalización agrícola y adopción de tecnologías para el desarrollo rural.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Mountain className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Cultura y Territorio</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rescate y promoción de tradiciones, identidad y patrimonio rural.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Voces del Campo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Historias reales de jóvenes rurales transformando sus territorios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <img
                    src="/young-chilean-woman-farmer-smiling.jpg"
                    alt="María testimonial"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm italic text-muted-foreground mb-4 leading-relaxed">
                  "El GNJR me permitió conectar con otros jóvenes del campo y acceder a programas de capacitación que
                  transformaron mi emprendimiento agrícola."
                </p>
                <div>
                  <p className="font-semibold">María González</p>
                  <p className="text-sm text-muted-foreground">Agricultora, Región del Maule</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <img
                    src="/young-chilean-man-farmer-agriculture.jpg"
                    alt="Pedro testimonial"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm italic text-muted-foreground mb-4 leading-relaxed">
                  "Gracias al gremio conseguimos implementar tecnología de riego inteligente en nuestra comunidad. Somos
                  parte del cambio."
                </p>
                <div>
                  <p className="font-semibold">Pedro Martínez</p>
                  <p className="text-sm text-muted-foreground">Emprendedor Rural, Región de O'Higgins</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <img
                    src="/young-chilean-woman-agriculture-rural-leader.jpg"
                    alt="Carla testimonial"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <p className="text-sm italic text-muted-foreground mb-4 leading-relaxed">
                  "La representación que nos da el GNJR ante las instituciones es fundamental para que nuestra voz sea
                  escuchada."
                </p>
                <div>
                  <p className="font-semibold">Carla Sepúlveda</p>
                  <p className="text-sm text-muted-foreground">Líder Comunitaria, Región de La Araucanía</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Últimas Noticias</h2>
              <p className="text-muted-foreground">Mantente informado sobre nuestras actividades</p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/noticias">
                Ver Todas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <img src="/rural-chile-agriculture-meeting-young-people.jpg" alt="News 1" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    15 Dic 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Santiago
                  </span>
                </div>
                <h3 className="font-semibold mb-2 text-balance">GNJR participa en mesa de trabajo con INDAP</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Representantes del gremio se reunieron con autoridades para discutir políticas de juventud rural.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img src="/technology-agriculture-innovation-chile.jpg" alt="News 2" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    10 Dic 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Valparaíso
                  </span>
                </div>
                <h3 className="font-semibold mb-2 text-balance">
                  Lanzamiento de AgroDigitalIA en región de Valparaíso
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nuevo programa de transformación digital para jóvenes agricultores de la región.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <img src="/rural-youth-training-workshop-chile.jpg" alt="News 3" className="w-full h-48 object-cover" />
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />5 Dic 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Concepción
                  </span>
                </div>
                <h3 className="font-semibold mb-2 text-balance">Taller de liderazgo para jóvenes rurales</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Más de 50 jóvenes participaron en el programa de formación de líderes territoriales.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground border-0">
            <CardContent className="py-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Sé parte del cambio rural</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 text-pretty leading-relaxed">
                Únete a cientos de jóvenes que están transformando el mundo rural chileno. Tu voz y tu territorio
                importan.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/unirse">
                  Únete Ahora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
