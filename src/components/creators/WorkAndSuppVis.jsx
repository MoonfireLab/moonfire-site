import React from 'react'
import Container from "../containers/Container";
import Image from "next/image";

function WorkAndSuppVis() {
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
                            src="/images/Workshops-Treinamentos.png"
                            width={40}
                            height={40}
                            alt=""
                        >
                        </Image>
                        <h3 className="relative text-3xl text-purple-700 flex justify-start items-center">
                            Workshop e Treinamentos
                        </h3>
                    </div>

                    {/* Row2 Text*/}
                    <div>
                        <h3 className="relative text-2xl text-purple-500 flex justify-start items-center">
                            Investimos no desenvolvimento dos criadores
                            com workshops e treinamentos em diversas áreas
                            como: edição de vídeo, estratégia de conteúdo
                            e negociação.
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
                            src="/images/Suporte-Visual.png"
                            width={40}
                            height={40}
                            alt=""
                        >
                        </Image>
                        <h3 className="relative text-3xl text-purple-700 flex justify-start items-center">
                            Suporte Visual
                        </h3>
                    </div>

                    {/* Row2 Text*/}
                    <div>
                        <h3 className="relative text-2xl text-purple-500 flex justify-start items-center">
                            Oferecemos soluções completas de design
                            e produção audiovisual, criando desde identidades
                            visuais, thumbnails, media kit, vídeos e campanhas.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Container>
  )
}

export default WorkAndSuppVis