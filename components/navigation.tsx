"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true)
      else setIsScrolled(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/sobre-nosotros", label: "Sobre Nosotros" },
    { href: "/directiva", label: "Directiva" },
    { href: "/programas", label: "Programas" },
    { href: "/noticias", label: "Noticias" },
    { href: "/documentos", label: "Documentos" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? "bg-background/30 backdrop-blur-md border-b border-border"
          : "bg-background/95 border-b border-border"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">GN</span>
            </div>
            <span className="font-bold text-lg hidden sm:block">
              Gremio Nacional de Juventudes Rurales de Chile
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative text-md font-medium transition-colors pb-1
                    ${isActive ? "text-green-600" : "hover:text-primary"}
                  `}
                >
                  {link.label}

                  {/* Línea verde debajo del link activo */}
                  {isActive && (
                    <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-green-600 rounded-full" />
                  )}
                </Link>
              )
            })}

            <Button asChild>
              <Link href="/unirse">Únete al Gremio</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {links.map((link) => {
                const isActive = pathname === link.href

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      text-sm font-medium transition-colors
                      ${isActive ? "text-green-600" : "hover:text-primary"}
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Button asChild className="w-full">
                <Link href="/unirse">Únete al Gremio</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
