import { Hero, Info, Form } from "@/components/Contacts";

export const ContactPage = () => (
    <>
        <Hero />
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
