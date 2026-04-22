import { titleHistory, descriptionHistory, imgHistory } from "@/constants/aboutUs";

export const History = () => (
    <section className="py-20">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">
                        {titleHistory}
                    </h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        {descriptionHistory.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <img
                        src={imgHistory}
                        alt="Historia GNJR"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    </section>
);
