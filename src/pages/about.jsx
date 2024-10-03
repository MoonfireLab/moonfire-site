'use client'

import AboutHero from "@/components/AboutHero";
import AboutProducts from "@/components/AboutProducts";
import "/src/app/globals.css";
import Header from "@/components/Header";
import AboutPartners from "@/components/AboutPartners";

export default function About() {
    return (
        <main>
            <Header />
            <AboutHero />
            <AboutProducts />
            <AboutPartners />
        </main>
    );
}