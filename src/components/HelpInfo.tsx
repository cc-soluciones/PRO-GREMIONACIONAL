import { ReactNode } from "react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

import { useIsMobile } from "@/hooks/useIsMobile";

interface Props {
    children: ReactNode;
    label?: string;
    side?: "top" | "left" | "right" | "bottom";
    position?: "start" | "center" | "end";
    className?: string;
};

export const HelpInfo = ({
    children,
    label = "",
    side = "top",
    position = "center",
    className = "",
} : Props) => {

    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <Popover>
                <PopoverTrigger asChild>
                    {children}
                </PopoverTrigger>
                <PopoverContent className={`w-48 text-sm ${className}`} side={side} align={position}>
                    {label}
                </PopoverContent>
            </Popover>
        );
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={position} className={className}>
                    {label}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
