import { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";

import { directive } from "@/constants/directive";
import { members } from "@/constants/general";

export const Directive = () => {
    const [membersDirective, setMembersDirective] = useState<any[]>([]);

    useEffect(() => {
        const auxMembers : any[] = [];
        Object.keys(members).filter((item) => {
            const aux = members[item as keyof typeof members].filter((member) => "role" in member && member.role !== undefined);
            if (aux.length > 0) {
                auxMembers.push(...aux);
            }
        })
        setMembersDirective(auxMembers);
    }, []);

    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {membersDirective.map((member, index) => (
                        <div key={index}>
                            <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className="w-64 h-64 object-cover rounded-full m-auto"
                            />
                            <div className="bg-white text-center shadow-xl rounded-2xl -mt-10 z-10 relative w-100 m-auto p-2">
                                <h3 className="font-bold text-xl mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-primary font-semibold mb-2">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};