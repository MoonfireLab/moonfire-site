import AboutHero from "@/components/about/AboutHero";
import AboutProducts from "@/components/about/AboutProducts";
import "/src/app/globals.css";
import Header from "@/components/headers/Header";
import AboutPartners from "@/components/about/AboutPartners";

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