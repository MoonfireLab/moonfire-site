import React from 'react'
import Container from '../containers/Container'
import clsx from "clsx";
import Image from "next/image";

function CreatorsSolution() {
  return (
    <section
    id="solution"
    className="overflow-hidden py-2 sm:py-2 lg:pb-12 xl:pb-3"
    >
        <Container className="items-center justify-center py-8">
            <div className="relative flex w-full items-center justify-center">
                <h1 className={clsx("text-3xl font-bold text-purple-700")}>
                    O que o mercado oferece?
                </h1>
            </div>
            <div>
                <h3 className="relative text-2xl text-purple-500 flex justify-start items-center py-8">
                    Embora cada plataforma ofereça seus próprios formatos de anúncios, com características e
                    abordagens diferenciadas, todas elas acabam lidando com os mesmos desafios e limitações.
                    Independente das variações nos formatos, as questões comuns que afetam a eficácia e
                    a experiência do usuário continuam presentes em todas as plataformas, que são:
                </h3>
            </div>
        </Container>

        <Container className="items-center justify-center py-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-2 lg:gap-y-12">
                {/* Col1 Text */}
                <div>
                    <div className="relative flex justify-center items-center py-3">
                        <h3 className="relative text-2xl text-purple-500 flex justify-center items-center">
                            Intrusão
                        </h3>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <p className="relative text-1xl text-purple-500 flex justify-center items-center">
                            Midia intrusiva que prejudica
                            a experiência do usuário.
                        </p>
                    </div>

                    <div className="relative flex justify-center items-center py-2">
                        <h3 className="relative text-2xl text-purple-500 flex justify-center items-center">
                            Creator Não Compátivel
                        </h3>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <p className="relative text-1xl text-purple-500 flex justify-center items-center">
                            Dificuldade em se conectar
                            com os criadores certos.
                        </p>
                    </div>

                    <div className="relative flex justify-center items-center py-2">
                        <h3 className="relative text-2xl text-purple-500 flex justify-center items-center">
                            Zero retorno para o criador
                        </h3>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <p className="relative text-1xl text-purple-500 flex justify-center items-center">
                            Alto custo e baixo retorno
                            para os criadores.
                        </p>
                    </div>
                </div>

                {/* Col2 Image */}
                <div>
                    <Image
                        src="/images/Empty-Potion.png"
                        width={300}
                        height={500}
                        alt=""
                    >
                    </Image>
    
                </div>

                {/* Col3 Text */}
                <div>
                    <div className="relative flex justify-center items-center py-2">
                            <h3 className="relative text-2xl text-purple-500 flex justify-start items-center">
                                Adblock
                            </h3>
                        </div>
                        <div className="relative flex justify-center items-center">
                            <p className="relative text-1xl text-purple-500 flex justify-start items-center">
                                Uso de bloqueadores de propaganda
                            </p>
                    </div>

                    <div className="relative flex justify-center items-center py-2">
                        <h3 className="relative text-2xl text-purple-500 flex justify-start items-center">
                            Falta de relevância
                        </h3>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <p className="relative text-1xl text-purple-500 flex justify-start items-center">
                            Falta de compreensão sobre o publico alvo.
                        </p>
                    </div>
                </div>
            </div>
        </Container>

        <Container className="items-center justify-center py-8">
            <div className="relative flex w-full items-center justify-center">
                <h1 className={clsx("text-3xl font-bold text-purple-700")}>
                    A nossa solução:
                </h1>
            </div>
        </Container>

        <Container className="items-center justify-center py-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-2 lg:gap-y-12">
                {/* Col1 Text */}
                <div>
                    <div className="relative flex justify-center items-center py-3">
                        <h3 className="relative text-2xl text-purple-500 flex justify-center items-center">
                            Conteúdo Orgânico
                        </h3>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <p className="relative text-1xl text-purple-500 flex justify-center items-center">
                            Midia hospedada em harmonia com
                            o conteúdo, sem interrupções.
                        </p>
                    </div>

                    <div className="relative flex justify-center items-center py-2">
                        <h3 className="relative text-2xl text-purple-500 flex justify-center items-center">
                            Creator certo
                        </h3>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <p className="relative text-1xl text-purple-500 flex justify-center items-center">
                            Estrátegia pensada para criadores com
                            mais aderência à marca/produto.
                        </p>
                    </div>

                    <div className="relative flex justify-center items-center py-2">
                        <h3 className="relative text-2xl text-purple-500 flex justify-center items-center">
                            Retorno para o criador
                        </h3>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <p className="relative text-1xl text-purple-500 flex justify-center items-center">
                            Maiores retornos para os criadores
                            sem prejudicar o conteúdo.
                        </p>
                    </div>
                </div>

                {/* Col2 Image */}
                <div>
                    <Image
                        src="/images/Pocao-Creators.png"
                        width={300}
                        height={500}
                        alt=""
                    >
                    </Image>
    
                </div>

                {/* Col3 Text */}
                <div>
                    <div className="relative flex justify-center items-center py-2">
                            <h3 className="relative text-2xl text-purple-500 flex justify-start items-center">
                                À prova de Adblock
                            </h3>
                        </div>
                        <div className="relative flex justify-center items-center">
                            <p className="relative text-1xl text-purple-500 flex justify-start items-center">
                                Mídia hospedada diretamente no conteúdo
                                do criador, garantia de inserção para todos.
                            </p>
                    </div>

                    <div className="relative flex justify-center items-center py-2">
                        <h3 className="relative text-2xl text-purple-500 flex justify-start items-center">
                            Relevância
                        </h3>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <p className="relative text-1xl text-purple-500 flex justify-start items-center">
                            Estratégia considerando os públicos de
                            cada conteúdo/criador.
                        </p>
                    </div>
                </div>
            </div>
        </Container>

        <Container className="items-center justify-center py-8">
            <div className="relative flex w-full items-center justify-center">
                <h1 className={clsx("text-3xl font-bold text-purple-700")}>
                    Vamos junstos construir a
                    carreira dos seus sonhos?
                </h1>
            </div>
        </Container>  
    </section>
  )
}

export default CreatorsSolution