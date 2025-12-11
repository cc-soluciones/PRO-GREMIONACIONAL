import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Shield, Users } from "lucide-react"

export default function DirectivaPage() {
  const directiva = [
    {
      name: "Carlos Muñoz",
      role: "Presidente",
      region: "Región Metropolitana",
      bio: "Agricultor y emprendedor con 10 años de experiencia en desarrollo rural y políticas públicas.",
      image: "/chilean-young-man-professional-leader.jpg",
    },
    {
      name: "Patricia Torres",
      role: "Vicepresidenta",
      region: "Región del Maule",
      bio: "Ingeniera agrónoma especializada en innovación tecnológica para pequeños agricultores.",
      image: "/chilean-young-woman-professional-leader.jpg",
    },
    {
      name: "Luis Hernández",
      role: "Secretario General",
      region: "Región de O'Higgins",
      bio: "Especialista en organización comunitaria y coordinación de proyectos territoriales.",
      image: "/chilean-young-man-secretary.jpg",
    },
    {
      name: "Andrea Silva",
      role: "Tesorera",
      region: "Región de Valparaíso",
      bio: "Contadora con experiencia en gestión financiera de organizaciones sin fines de lucro.",
      image: "/chilean-young-woman-finance.jpg",
    },
    {
      name: "Roberto Campos",
      role: "Director de Transformación Digital",
      region: "Región del Biobío",
      bio: "Ingeniero informático especializado en tecnologías agrícolas y digitalización rural.",
      image: "/chilean-young-man-technology.jpg",
    },
    {
      name: "Marcela Ramírez",
      role: "Directora de Desarrollo Rural",
      region: "Región de La Araucanía",
      bio: "Trabajadora social con enfoque en emprendimiento rural y economía circular.",
      image: "/chilean-young-woman-rural-development.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Directiva Nacional</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Conoce al equipo de jóvenes líderes que dirigen y representan al GNJR en todo Chile
            </p>
          </div>
        </div>
      </section>

      {/* Directiva Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directiva.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <CardContent className="pt-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-3">{member.region}</p>
                  <p className="text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transparencia */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparencia y Probidad</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nuestro compromiso con la transparencia y la gestión responsable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Estatutos del Gremio</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Accede a nuestros estatutos oficiales y normativas internas.
                </p>
                <Button variant="outline" size="sm">
                  Descargar PDF
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Política de Neutralidad</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Conoce nuestra política de independencia y neutralidad política.
                </p>
                <Button variant="outline" size="sm">
                  Descargar PDF
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-3">Declaración de Intereses</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Declaración pública de intereses de la directiva nacional.
                </p>
                <Button variant="outline" size="sm">
                  Descargar PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
