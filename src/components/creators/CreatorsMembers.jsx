import React from 'react'
import Container from '../containers/Container'
import clsx from "clsx";
import Image from 'next/image';

function CreatorsMembers() {
  return (
    <section
    id="creators"
    className="overflow-hidden py-2 sm:py-2 lg:pb-12 xl:pb-3"
    >
        <Container className="items-center justify-center py-8">
            <div className="relative flex w-full items-center justify-center">
                <h2 className={clsx("text-3xl font-bold text-purple-700")}>
                    Conheça algumas das nossas estrelas
                </h2>
            </div>
        </Container>
        <Container className="items-center justify-center py-8">
            <div className="relative flex w-full items-center justify-center">
            <Image
                src="/images/Influencers.png"
                width={1200}
                height={500}
                alt=""
            >
            </Image>
            </div>
        </Container>

    </section>
  )
}

export default CreatorsMembers