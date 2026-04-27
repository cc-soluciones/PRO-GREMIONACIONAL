import { Hero } from "@/components/Hero";
import { Directive as DirectiveComponent } from "@/components/Directive/Directive";
import { Transparency } from "@/components/Directive/Transparency";

export const Directive = () => (
    <>
        <Hero title="Directiva Nacional" description="Conoce al equipo de jóvenes líderes que dirigen y representan al GNJR en todo Chile" />
        <DirectiveComponent />
        <Transparency />
    </>
)