import { Hero } from "@/components/Hero";
import { Documents as DocumentsComponent } from "@/components/Documents/Documents";

export const Documents = () => (
    <>
        <Hero title="Documentos" description="Accede a estatutos, informes, actas y documentos oficiales del GNJR" />
        <DocumentsComponent />
    </>
);