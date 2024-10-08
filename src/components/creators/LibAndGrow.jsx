import React from "react";
import Container from "../containers/Container";
import Image from "next/image";

function LibAndGrow() {
  return (
    <Container className="items-start justify-start py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-2 lg:gap-y-12">
            {/* Col Left*/}
            <div className="items-start justify-start">
                <div className="items-start justify-start">
                    <div className="lg:grid lg:grid-rows-2 lg:gap-x-2 lg:gap-y-1">
                        {/* Row1 Title*/}
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/images/Liberdade-Criatriva.png"
                                width={40}
                                height={40}
                                alt=""
                            >
                            </Image>
                            <h3 className="relative text-3xl text-purple-700 flex justify-start items-center">
                                Liberdade Criativa
                            </h3>
                        </div>

                        {/* Row2 Text*/}
                        <div>
                            <h3 className="relative text-2xl text-purple-500 flex justify-start items-center">
                                A Moonfire Creators não impõe exclusividade.
                                Valorizamos a autonomia para que explorem mais
                                oportunidades de crescimento sem restrições.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Col Right*/}
            <div className="items-start justify-start">
                <div className="items-start justify-start">
                    <div className="lg:grid lg:grid-rows-2 lg:gap-x-2 lg:gap-y-1">
                        {/* Row1 Title*/}
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/images/Crescimento-Estrategico.png"
                                width={40}
                                height={40}
                                alt=""
                            >
                            </Image>
                            <h3 className="relative text-3xl text-purple-700 flex justify-start items-center">
                                Crescimento Estratégico
                            </h3>
                        </div>

                        {/* Row2 Text*/}
                        <div>
                            <h3 className="relative text-2xl text-purple-500 flex justify-start items-center">
                                Oferecemos suporte completo, desde a construção
                                da identidade de marca até a negociação de
                                parcerias e contratos.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Container>
  )
}

export default LibAndGrow