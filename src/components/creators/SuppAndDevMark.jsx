import React from 'react'
import Container from "../containers/Container";
import Image from "next/image";

function SuppAndDevMark() {
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
                            src="/images/Suporte-JF.png"
                            width={40}
                            height={40}
                            alt=""
                        >
                        </Image>
                        <h3 className="relative text-3xl text-purple-700 flex justify-start items-center">
                            Suporte Jurídico e Financeiro
                        </h3>
                    </div>

                    {/* Row2 Text*/}
                    <div>
                        <h3 className="relative text-2xl text-purple-500 flex justify-start items-center">
                            Apoiamos nossos talentos em todas as fases
                            da carreira, com revisão de contratos, gestão
                            financeira e orientação sobre tributação.
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
                            src="/images/Desenvolvimento-MP.png"
                            width={40}
                            height={40}
                            alt=""
                        >
                        </Image>
                        <h3 className="relative text-3xl text-purple-700 flex justify-start items-center">
                            Desenvolvimento da Marca Pessoal
                        </h3>
                    </div>

                    {/* Row2 Text*/}
                    <div>
                        <h3 className="relative text-2xl text-purple-500 flex justify-start items-center">
                            Ajudamos criadores a definir sua identidade visual
                            e mensagem, posicionando-os como líderes no
                            mercado.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Container>
  )
}

export default SuppAndDevMark