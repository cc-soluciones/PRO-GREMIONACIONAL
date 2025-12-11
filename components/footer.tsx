import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[oklch(0.45_0.05_60)] text-white border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">GN</span>
              </div>
              <span className="font-bold text-lg">GNJR Innovación & Desarrollo</span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Gremio Nacional de Juventudes Rurales de Chile. Transformando el territorio desde la juventud rural.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="text-sm text-white/80 hover:text-primary-foreground transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/directiva"
                  className="text-sm text-white/80 hover:text-primary-foreground transition-colors"
                >
                  Directiva Nacional
                </Link>
              </li>
              <li>
                <Link
                  href="/programas"
                  className="text-sm text-white/80 hover:text-primary-foreground transition-colors"
                >
                  Programas
                </Link>
              </li>
              <li>
                <Link
                  href="/unirse"
                  className="text-sm text-white/80 hover:text-primary-foreground transition-colors"
                >
                  Únete
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/noticias"
                  className="text-sm text-white/80 hover:text-primary-foreground transition-colors"
                >
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  href="/documentos"
                  className="text-sm text-white/80 hover:text-primary-foreground transition-colors"
                >
                  Documentos
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-white/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="w-4 h-4" />
                contacto@gnjr.cl
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="w-4 h-4" />
                +56 9 1234 5678
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80">
                <MapPin className="w-4 h-4" />
                Santiago, Chile
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/70">
          <p>
            © {new Date().getFullYear()} GNJR - Gremio Nacional de Juventudes Rurales de Chile. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
