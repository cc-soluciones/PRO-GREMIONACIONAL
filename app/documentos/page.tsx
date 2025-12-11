import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

export default function DocumentosPage() {
  const documentos = [
    {
      title: "Estatuto Oficial del GNJR",
      description: "Documento fundacional y normativo del Gremio Nacional de Juventudes Rurales de Chile.",
      category: "Legal",
      size: "2.3 MB",
      date: "2024",
    },
    {
      title: "Manual del Socio",
      description: "Guía completa para socios del GNJR: derechos, deberes y beneficios de la membresía.",
      category: "Membresía",
      size: "1.8 MB",
      date: "2024",
    },
    {
      title: "Política de Juventud Rural",
      description:
        "Propuesta integral del GNJR para el desarrollo de políticas públicas dirigidas a la juventud rural.",
      category: "Políticas Públicas",
      size: "3.2 MB",
      date: "2024",
    },
    {
      title: "Informe de Actividades 2023-2024",
      description: "Resumen de las principales actividades, logros y desafíos del gremio durante el último período.",
      category: "Informes",
      size: "4.5 MB",
      date: "2024",
    },
    {
      title: "Presentación Institucional",
      description: "Material de presentación oficial del GNJR para uso en eventos, reuniones y alianzas.",
      category: "Institucional",
      size: "5.1 MB",
      date: "2024",
    },
    {
      title: "Acta Asamblea General 2024",
      description: "Acta oficial de la última asamblea general de socios del GNJR.",
      category: "Actas",
      size: "890 KB",
      date: "2024",
    },
    {
      title: "Declaración de Principios",
      description: "Documento que establece los valores, principios y compromisos fundamentales del gremio.",
      category: "Institucional",
      size: "1.2 MB",
      date: "2024",
    },
    {
      title: "Política de Transparencia y Probidad",
      description: "Marco normativo para la gestión transparente y ética del GNJR.",
      category: "Legal",
      size: "1.5 MB",
      date: "2024",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Documentos</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Accede a estatutos, informes, actas y documentos oficiales del GNJR
            </p>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentos.map((doc, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div className="inline-block px-2 py-1 bg-muted text-xs rounded-full mb-3">{doc.category}</div>
                  <h3 className="font-semibold text-lg mb-2">{doc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{doc.description}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{doc.size}</span>
                    <span>{doc.date}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar PDF
                  </Button>
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
