import { Hero } from "@/components/Hero";
import { News as NewsComponents } from "@/components/News/News";

export const News = () => (
    <>
        <Hero title="Noticias y Actualizaciones" description="Mantente informado sobre las actividades, logros y eventos del GNJR en todo Chile" />
        <NewsComponents />
    </>
)