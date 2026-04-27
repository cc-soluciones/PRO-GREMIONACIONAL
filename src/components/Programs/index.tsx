import { Hero } from "@/components/Hero";
import { Featured } from "@/components/Programs/Featured";
import { Projects } from "@/components/Programs/Projects";
import { Institutions } from "@/components/Programs/Institutions";
import { Cta } from "@/components/Programs/Cta";

export const Programs = () => (
    <>
        <Hero title="Programas y Proyectos" description="Iniciativas que impulsan el desarrollo, la innovación y el liderazgo de la juventud rural chilena" />
        <Featured />
        <Projects />
        <Institutions />
        <Cta />
    </>
);