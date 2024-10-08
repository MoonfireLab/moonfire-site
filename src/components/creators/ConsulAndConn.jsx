import React from 'react'
import Container from "../containers/Container";
import Image from "next/image";

function ConsulAndConn() {
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
                            src="/images/Consultoria-Conteudo.png"
                            width={40}
                            height={40}
                            alt=""
                        >
                        </Image>
                        <h3 className="relative text-3xl text-purple-700 flex justify-start items-center">
                            Consultoria de Conteúdo
                        </h3>
                    </div>

                    {/* Row2 Text*/}
                    <div>
                        <h3 className="relative text-2xl text-purple-500 flex justify-start items-center">
                            Auxiliamos criadores a desenvolverem estratégias
                            que maximizam engajamento e alcance ideais
                            para cada nicho.
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
                            src="/images/Conexao-Marcas.png"
                            width={40}
                            height={40}
                            alt=""
                        >
                        </Image>
                        <h3 className="relative text-3xl text-purple-700 flex justify-start items-center">
                            Conexão com Marcas
                        </h3>
                    </div>

                    {/* Row2 Text*/}
                    <div>
                        <h3 className="relative text-2xl text-purple-500 flex justify-start items-center">
                            Facilitamos parcerias entre criadores e marcas,
                            desenhadas para gerar valor para ambos os lados.
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Container>
  )
}

export default ConsulAndConn