import { Hero } from "@/components/Hero";
import { Info } from "@/components/Contacts/Info";
import { Form } from "@/components/Contacts/Form";

export const Contact = () => (
    <>
        <Hero title="Contacto" description="Estamos aquí para escucharte. Ponte en contacto con nosotros." />
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <Info/> 
                    <Form/>
                </div>
            </div>
        </section>
    </>
);
