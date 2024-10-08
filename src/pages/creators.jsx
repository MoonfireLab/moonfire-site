import CreatorsHero from '@/components/creators/CreatorsHero'
import React from 'react'
import "/src/app/globals.css";
import HeaderCreators from '@/components/headers/HeaderCreators';
import CreatorsExpertise from '@/components/creators/CreatorsExpertise';
import CreatorsWhy from '@/components/creators/CreatorsWhy';
import CreatorsMembers from '@/components/creators/CreatorsMembers';
import CreatorsSolution from '@/components/creators/CreatorsSolution';

export default function Creators() {
  return (
    <main>
        <HeaderCreators />
        <CreatorsHero />
        <CreatorsExpertise />
        <CreatorsWhy />
        <CreatorsMembers />
        <CreatorsSolution />
    </main>
  )
};
