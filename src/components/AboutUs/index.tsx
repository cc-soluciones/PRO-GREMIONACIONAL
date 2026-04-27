import { Hero } from "@/components/Hero";
import { History } from "@/components/AboutUs/History";
import { Beginning } from "@/components/AboutUs/Beginning";
import { Differences } from "@/components/AboutUs/Differences";
import { Map } from "@/components/AboutUs/Map";

import { titleHero, descriptionHero } from "@/constants/aboutUs";

export const AboutUs = () => (
    <>
        <Hero title={titleHero} description={descriptionHero} />
        <History />
        <Beginning />
        <Differences />
        <Map />
    </>
);