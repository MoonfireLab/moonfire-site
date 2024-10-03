import React from "react";
import Image from "next/image";
import Container from "./Container";
import "/src/app/globals.css";
import clsx from "clsx";

function AboutPartners() {
  return (
    <section
      id="partners"
      className="overflow-hidden py-8 sm:py-2 lg:pb-8 xl:pb-3"
    >
      <Container className="overflow-hidden py-2 lg:pb-12">
        <h1 className={clsx("text-3xl font-bold text-orange-600")}>
          Nossos Parceiros
        </h1>
      </Container>
      <Container>
        <div className="relative flex w-full">
          <Image
            src="/images/parceiros.png"
            width={1800}
            height={250}
            alt=""
          ></Image>
        </div>
      </Container>
    </section>
  );
}

export default AboutPartners;
