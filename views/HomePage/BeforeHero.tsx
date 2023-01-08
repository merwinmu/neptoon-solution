import React from 'react'
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from 'components/Container';
import ParticlesWrapper from 'components/ParticlesWrapper';

function BeforeHero() {

  return (
      <HeroWrapper className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
        <ParticlesWrapper></ParticlesWrapper>

        <Contents className='mx-auto max-w-xl text-center'>
          <Heading>
            State of the Art Webseiten
          </Heading>
          <Heading2 className=" text-gray-200 py-32  sm:block ">
            Mieten statt kaufen
          </Heading2>

        </Contents>

      </HeroWrapper>
    

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
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;


const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
    font-weight: bold;
    margin-bottom: 40rem;
    margin-top: 20rem;
  }
`;


