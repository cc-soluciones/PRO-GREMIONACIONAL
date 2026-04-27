import { useState } from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { MapChile } from "@/components/svg/MapChile";
import { titleMap, descriptionMap, titleMembers, members, map } from "@/constants/aboutUs";


export const Map = () => {
    const [ selectedRegion, setSelectedRegion ] = useState<string | null>(null);
    return (
        <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {titleMap}
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {descriptionMap}
                    </p>
                </div>

                <div className="flex md:flex-nowrap flex-wrap-reverse justify-center items-center gap-10">
                    <div className="max-w-4xl h-300 mx-auto flex items-center justify-center aspect-[280/1640]">
                        <MapChile/>
                    </div>
                    <Card className="p-6 w-full md:w-auto">
                        <CardTitle className="md:text-2xl text-center">
                            {titleMembers}
                        </CardTitle>
                        <CardContent>
                            {Object.keys(members).flat().map((key) => {
                                const isSelected = selectedRegion === key;
                                const regionData = map[key as keyof typeof map];
                                return (
                                    <div key={key}>
                                    <h3 className="md:text-lg flex items-center gap-2 font-medium">
                                        <div className={`p-2 ${!isSelected ? regionData.textColor?.initial : regionData.textColor?.hover}`}></div>
                                        {map[key as keyof typeof map].name}
                                    </h3>
                                    {members[key as keyof typeof members].map((member) => (
                                        <p key={member.name} className="text-muted-foreground ml-6">
                                            {member.name}
                                        </p>
                                    ))}
                                </div>
                                );
                            })}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
};