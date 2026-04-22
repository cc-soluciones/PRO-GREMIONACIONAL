import { 
    Target,
    Heart,
    Users,
    Globe
} from "lucide-react";
import { name } from "./general";

export const titleHero = "Sobre Nosotros";
export const descriptionHero = `Somos la voz organizada de la juventud rural de
    Chile, trabajando por un futuro donde el campo sea
    un espacio de oportunidades, innovación y
    desarrollo.
`;

export const titleHistory = "Nuestra Historia";
export const imgHistory = "/chilean-rural-youth-group-meeting-organization.jpg";
export const descriptionHistory = [
    `El Gremio Nacional de Juventudes Rurales de Chile
    (GNJR) nace de la necesidad de articular y
    representar a los jóvenes del mundo rural en un solo
    movimiento organizado y con visión de futuro.`,
    `Fundado por jóvenes agricultores, emprendedores y
    líderes comunitarios de diferentes regiones de
    Chile, el GNJR se posiciona como una organización
    profesional y estratégica que busca incidir en
    políticas públicas y generar oportunidades reales
    para la juventud rural.`,
    `A diferencia de otras organizaciones del sector,
    nuestro enfoque integra innovación tecnológica,
    desarrollo territorial y representatividad nacional,
    posicionándonos como un actor clave en la
    transformación del mundo rural chileno.`
];

export const titleBeginning = "Nuestros Principios";
export const descriptionBeginning = "Los valores que guían nuestro trabajo y compromiso con la juventud rural";
export const beginning = [
    {
        title: "Representatividad",
        description: "Ser la voz legítima y organizada de la juventud rural ante instituciones y sociedad.",
        icon: Target
    },
    {
        title: "Inclusión",
        description: "Valorar la diversidad territorial, cultural y de género en el mundo rural.",
        icon: Heart
    },
    {
        title: "Colaboración",
        description: "Trabajar en red con organizaciones, instituciones y comunidades rurales.",
        icon: Users
    },
    {
        title: "Innovación",
        description: "Impulsar soluciones tecnológicas y creativas para el desarrollo rural.",
        icon: Globe
    }
];

export const titleDifferences = "¿Por qué GNJR?";
export const differences = [
    {
        title: "Enfoque Generacional",
        description: "Somos un gremio específicamente diseñado para jóvenes rurales (18-40 años), con programas y servicios adaptados a las necesidades de nuestra generación."
    },
    {
        title: "Innovación y Tecnología",
        description: "Integramos la transformación digital en el desarrollo rural, con programas como AgroDigitalIA que capacitan a jóvenes en tecnologías agrícolas de vanguardia."
    },
    {
        title: "Representación Nacional",
        description: "Articulamos la voz de la juventud rural de todo Chile ante INDAP, INJUV, SERCOTEC, CORFO y otras instituciones clave."
    },
    {
        title: "Identidad Territorial",
        description: "Valoramos y promovemos la identidad rural, reconociendo las particularidades de cada territorio y cultura local."
    }
    
];

export const titleMap = "Presencia Nacional";
export const descriptionMap = "Operamos en múltiples regiones de Chile, conectando jóvenes rurales de norte a sur";
export const map = {
    "LL": {
        name: "Región de Los Lagos",
        color: "!fill-blue-400 hover:!fill-blue-800 transition-colors duration-300",
        textColor: {
            initial: "bg-blue-400",
            hover: "bg-blue-800 transition-colors duration-300"
        }
    },
    "LR": {
        name: "Región de Los Ríos",
        color: "bg-green-400 !fill-green-400 hover:!fill-green-800 transition-colors duration-300",
        textColor: {
            initial: "bg-green-400",
            hover: "bg-green-800 transition-colors duration-300"
        }
    },
    "AR": {
        name: "Región de La Araucanía",
        color: "bg-red-400 !fill-red-400 hover:!fill-red-800 transition-colors duration-300",
        textColor: {
            initial: "bg-red-400",
            hover: "bg-red-800 transition-colors duration-300"
        }
    },
    // "BI": {
    //     name: "Región del Biobío",
    // },
    "NB": {
        name: "Región de Ñuble",
        color: "bg-yellow-400 !fill-yellow-400 hover:!fill-yellow-800 transition-colors duration-300",
        textColor: {
            initial: "bg-yellow-400",
            hover: "bg-yellow-800 transition-colors duration-300"
        }
    },
    "ML": {
        name: "Región del Maule",
        color: "bg-purple-400 !fill-purple-400 hover:!fill-purple-800 transition-colors duration-300",
        textColor: {
            initial: "bg-purple-400",
            hover: "bg-purple-800 transition-colors duration-300"
        }
    },
    "LI": {
        name: "Región del Libertador General Bernardo O'Higgins",
        color: "bg-orange-400 !fill-orange-400 hover:!fill-orange-800 transition-colors duration-300",
        textColor: {
            initial: "bg-orange-400",
            hover: "bg-orange-800 transition-colors duration-300"
        }
    },
    "RM": {
        name: "Región Metropolitana de Santiago",
        color: "bg-pink-400 !fill-pink-400 hover:!fill-pink-800 transition-colors duration-300",
        textColor: {
            initial: "bg-pink-400",
            hover: "bg-pink-800 transition-colors duration-300"
        }
    },
    "VA": {
        name: "Región de Valparaíso",
        color: "bg-indigo-400 !fill-indigo-400 hover:!fill-indigo-800 transition-colors duration-300",
        textColor: {
            initial: "bg-indigo-400",
            hover: "bg-indigo-800 transition-colors duration-300"
        }
    },
};
export const titleMembers = "Nuestros Miembros";
export const members = {
    "LL": [
        {
            name: "Elías Armando Espinoza Manquilef"
        }
    ],
    "LR": [
        {
            name: "Nivaldo José Martín Martín"
        },
        {
            name: "Fabiola Soledad Martín Martín"
        },
        {
            name: "Rolando Omar Martín Martín"
        },
        {
            name: "Esteban Alberto Cárdenas Isla"
        },
        {
            name: "Marcos Josué Erices Tapia"
        },
        {
            name: "Luis Daniel Correa Llanquiman"
        },
        {
            name: "Miguel Ángel Toro Pérez"
        },
        {
            name: "Guido Aníbal Lienlaf Lienlaf"
        },
        {
            name: "Zoe Rodríguez Valenzuela"
        },
        {
            name: "Tamara Jazmín Calfil Calfil"
        }
    ],
    "AR": [
        {
            name: "Kiria Conzuelo Millarayen Manquepillan Antileo"
        }
    ],
    // "BI": "Región del Biobío",
    "NB": [
        {
            name: "Juan Milton Brayan Cartes Cárdenas"
        }
    ],
    "ML": [
        {
            name: "Matías Raymundo Correa Fuenzalida"
        },
        // {
        //     name: "Cooperativa Agrofrutícola Rauco Ltda"
        // }
    ],
    "LI": [
        {
            name: "José Patricio Llanca Llanca"
        },
        {
            name: "Javiera Valentina Aliaga Gutiérrez"
        },
        // {
        //     name: "Girasol SpA"
        // }
    ],
    "RM": [
        // {
        //     name: "Gustavo Andrés Soriano Ulloa"
        // },
        {
            name: "Bryan Custodio Ortiz Pinto"
        },
        {
            name: "Valeria Francisca Bertens Álvarez"
        },
        {
            name: "Hermanos Ortiz Ltda"
        }
    ],
    "VA": [
        {
            name: "Marlene Paz Figueroa Zoro"
        }
    ],
}