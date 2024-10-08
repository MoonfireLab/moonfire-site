import React from "react";
import Container from "../containers/Container";
import clsx from "clsx";
import Image from "next/image";

const CreatorsExpertise = () => {
  return (
    <section
      id="expertise"
      className="overflow-hidden py-2 sm:py-2 lg:pb-12 xl:pb-3"
    >
      <Container className="items-center justify-center">
        <div className="relative flex w-full items-center justify-center">
          <h1 className={clsx("text-3xl font-bold text-purple-700")}>
            Empresas que já apostaram na parceria com a
            <span className="text-purple-500 text-3xl px-2">
              Moonfire Creators:
            </span>
          </h1>
        </div>
      </Container>
      <Container className="items-center justify-center py-10">
        <div className="relative flex w-auto h-auto items-center justify-center bg-purple-900">
          <Image
            src="/images/Partners-Transparent.png"
            width={800}
            height={600}
            alt=""
          ></Image>
        </div>
      </Container>
      <Container className="items-center justify-center py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {/* Left Side */}
          <div className=" lg:grid lg:grid-rows-2 flex justify-center items-center">
            <div className="relative text-3xl text-purple-700 flex justify-center items-center">
              <h3>
                Garantimos não exclusividade, permitindo que você explore outras
                oportunidades.
              </h3>
            </div>
            <div className="relative flex text-2xl text-purple-500 justify-center items-center">
              <h3>
                Nossa equipe, com mais de uma década de experiência no mercado,
                trabalha com design e audiovisual para impulsionar a sua
                carreira.
                
                Nosso serviço inclui consultoria de estratégia de
                conteúdo, apoio júridico e financeiro, além de desenvolvimento
                de marca pessoal e workshops para capacitar criadores.
              </h3>
            </div>
          </div>
          {/* Right Side */}
          <div className="relative flex justify-center items-center">
            <Image
              src="/images/Creators-Work.png"
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

export default CreatorsExpertise;
