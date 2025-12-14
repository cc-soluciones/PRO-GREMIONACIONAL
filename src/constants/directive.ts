import { FileText, Shield, Users } from "lucide-react";

export const directive = [
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
];

export const transparencyDocuments = [
    {
        title: "Estatutos del Gremio",
        description: "Accede a nuestros estatutos oficiales y normativas internas.",
        file: "/documents/estatutos.pdf",
        icon: FileText,
    },
    {
        title: "Política de Neutralidad",
        description: "Conoce nuestra política de independencia y neutralidad política.",
        file: "/documents/politica_neutralidad.pdf",
        icon: Shield,
    },
    {
        title: "Declaración de Intereses",
        description: "Declaración pública de intereses de la directiva nacional.",
        file: "/documents/declaracion_intereses.pdf",
        icon: Users,
    },
];