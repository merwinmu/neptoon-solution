import React from 'react'
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from 'components/Container';
import ParticlesWrapper from 'components/ParticlesWrapper';

function BeforeHero() {

  return (
    <div>
      <ParticlesWrapper></ParticlesWrapper>
      <HeroWrapper className='flex items-center justify-center h-screen'>
        <Contents className='mx-auto text-center '>
          <Heading >
            STATE OF THE ART
          </Heading>
          <Heading2 className=" sm:block ">
            Web Lösungen
          </Heading2>
        </Contents>
      </HeroWrapper>
    </div>
  )
}



export default BeforeHero

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const Heading2 = styled.h2`
  font-size: 3.2rem;
  font-weight: bold;
  opacity: 0.8;
  margin-bottom: 4rem;

  ${media('<=tablet')} {
    font-size: 2.6rem;
  }
`;

const HeroWrapper = styled(Container)`
  padding-top: 5rem;
  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;


const Contents = styled.div`
  ${media('<=desktop')} {
    max-width: 100%;
    font-weight: bold;
  }
`;



