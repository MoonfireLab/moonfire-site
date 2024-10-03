import React from "react";
import Container from "./Container";
import Image from "next/image";

function CreatorsHero() {
  return (
    <section className="overflow-hidden py-2 sm:py-2 lg:pb-12 xl:pb-3">
      <Container>
        <div className="relative flex w-full">
          <Image
            src="/images/creators-1.png"
            width={1500}
            height={1000}
            alt=""
          ></Image>
        </div>
      </Container>
      <Container>
      <div className="relative flex w-full">
        <Image
          src="/images/creators-2.png"
          width={1500}
          height={1000}
          alt=""
        ></Image>
      </div>
    </Container>
    </section>
  );
}

export default CreatorsHero;
