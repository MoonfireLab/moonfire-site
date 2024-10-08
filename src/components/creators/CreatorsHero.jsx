import React from "react";
import Container from "@/components/containers/Container";
import clsx from "clsx";

function CreatorsHero() {
  return (
    <section
      id="home"
      className="overflow-hidden py-2 sm:py-2 lg:pb-12 xl:pb-3"
    >
      <Container className="items-center justify-center">
        <div className="relative flex w-full items-center justify-center">
          <h1 className={clsx("text-4xl font-bold text-purple-700")}>
            Crie, Conecte, Cresça
          </h1>
        </div>

        <div className="relative flex w-full py-12 pb-12 items-center justify-center">
          <h3 className={clsx("text-3xl font-bold text-purple-700")}>
            A Moonfire Creators te ajuda a construir uma carreira de sucesso!
          </h3>
        </div>

        <div className="relative flex justify-center pb-12">
          <div className="w-[750px]">
            <h3 className={clsx("text-2xl font-bold text-purple-700 justify-between")}>
              Com foco em gestão de carreira de criadores de conteúdo,
              influenciadores e artistas. Oferecemos suporte completo para
              impulsionar carreiras e fortalecer parcerias com marcas.
            </h3>
          </div>
        </div>
      </Container>
      <Container>
        <div className="relative flex w-full"></div>
      </Container>
    </section>
  );
}

export default CreatorsHero;
