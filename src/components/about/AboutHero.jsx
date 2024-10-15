import Image from "next/image";
import Container from "@/components/containers/Container";
import "/src/app/globals.css";

const AboutHero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden py-2 sm:py-2 lg:pb-12 xl:pb-3"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
          {/* Left Side */}
          <div className="relative flex justify-center items-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos dolores beatae mollitia.
            </p>
          </div>
          {/* Right Side */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/Pocao-Lab.png"
              width={350}
              height={350}
              alt=""
            ></Image>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
