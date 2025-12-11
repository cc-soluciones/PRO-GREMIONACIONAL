import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Users, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Sobre Nosotros</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos la voz organizada de la juventud rural de Chile, trabajando por un futuro donde el campo sea un
              espacio de oportunidades, innovación y desarrollo.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  El Gremio Nacional de Juventudes Rurales de Chile (GNJR) nace de la necesidad de articular y
                  representar a los jóvenes del mundo rural en un solo movimiento organizado y con visión de futuro.
                </p>
                <p>
                  Fundado por jóvenes agricultores, emprendedores y líderes comunitarios de diferentes regiones de
                  Chile, el GNJR se posiciona como una organización profesional y estratégica que busca incidir en
                  políticas públicas y generar oportunidades reales para la juventud rural.
                </p>
                <p>
                  A diferencia de otras organizaciones del sector, nuestro enfoque integra innovación tecnológica,
                  desarrollo territorial y representatividad nacional, posicionándonos como un actor clave en la
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

      {/* Principios */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Principios</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Los valores que guían nuestro trabajo y compromiso con la juventud rural
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Representatividad</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ser la voz legítima y organizada de la juventud rural ante instituciones y sociedad.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Inclusión</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Valorar la diversidad territorial, cultural y de género en el mundo rural.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Colaboración</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Trabajar en red con organizaciones, instituciones y comunidades rurales.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Innovación</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Impulsar soluciones tecnológicas y creativas para el desarrollo rural.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferencias */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">¿Por qué GNJR?</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Enfoque Generacional</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Somos un gremio específicamente diseñado para jóvenes rurales (18-40 años), con programas y
                      servicios adaptados a las necesidades de nuestra generación.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Innovación y Tecnología</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Integramos la transformación digital en el desarrollo rural, con programas como AgroDigitalIA que
                      capacitan a jóvenes en tecnologías agrícolas de vanguardia.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Representación Nacional</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Articulamos la voz de la juventud rural de todo Chile ante INDAP, INJUV, SERCOTEC, CORFO y otras
                      instituciones clave.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Identidad Territorial</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Valoramos y promovemos la identidad rural, reconociendo las particularidades de cada territorio y
                      cultura local.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mapa de Operaciones */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Presencia Nacional</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Operamos en múltiples regiones de Chile, conectando jóvenes rurales de norte a sur
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <img
              src="/map-of-chile-regions-infographic.jpg"
              alt="Mapa de operaciones"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
