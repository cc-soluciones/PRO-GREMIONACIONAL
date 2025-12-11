import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Tag } from "lucide-react"

export default function NoticiasPage() {
  const noticias = [
    {
      title: "GNJR participa en mesa de trabajo con INDAP sobre políticas de juventud rural",
      excerpt:
        "Representantes del gremio se reunieron con autoridades de INDAP para discutir nuevos instrumentos de fomento productivo dirigidos específicamente a jóvenes agricultores.",
      date: "15 Dic 2024",
      location: "Santiago",
      category: "Políticas Públicas",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Lanzamiento exitoso de AgroDigitalIA en región de Valparaíso",
      excerpt:
        "Más de 40 jóvenes agricultores participaron en el lanzamiento del programa de transformación digital para el agro en la región de Valparaíso.",
      date: "10 Dic 2024",
      location: "Valparaíso",
      category: "Programas",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Taller de liderazgo rural convoca a más de 50 jóvenes en Concepción",
      excerpt:
        "La Escuela de Liderazgo Rural del GNJR realizó su primer taller en la región del Biobío con gran convocatoria y participación activa.",
      date: "5 Dic 2024",
      location: "Concepción",
      category: "Capacitación",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "GNJR firma convenio de colaboración con la Universidad de Chile",
      excerpt:
        "El gremio establece alianza estratégica con la Facultad de Ciencias Agronómicas para desarrollar programas de extensión e investigación.",
      date: "1 Dic 2024",
      location: "Santiago",
      category: "Alianzas",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Red de emprendedores rurales: primera rueda de negocios 2024",
      excerpt:
        "Jóvenes emprendedores del campo tuvieron la oportunidad de conectar con compradores, distribuidores y inversionistas en evento organizado por el GNJR.",
      date: "28 Nov 2024",
      location: "Rancagua",
      category: "Emprendimiento",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "GNJR presenta propuestas para nueva Ley de Fomento Agrícola",
      excerpt:
        "El gremio participó en audiencia pública presentando propuestas concretas para incluir la perspectiva de la juventud rural en la nueva legislación.",
      date: "20 Nov 2024",
      location: "Valparaíso",
      category: "Políticas Públicas",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Noticias y Actualizaciones</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mantente informado sobre las actividades, logros y eventos del GNJR en todo Chile
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noticias.map((noticia, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={noticia.image || "/placeholder.svg"}
                  alt={noticia.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {noticia.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {noticia.location}
                    </span>
                  </div>
                  <div className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mb-3">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      {noticia.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-balance">{noticia.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{noticia.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
