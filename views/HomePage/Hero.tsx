import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import BeforeHero from './BeforeHero';

export default function Hero() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <div>
      <BeforeHero/>
      <HeroWrapper>
        <Contents>
          <Heading>Webseite mieten statt kaufen</Heading>
          <Description>

            Eine professionelle Webdesigner Webseite ist in der Anschaffung teuer, deswegen suchen Startups und KMU meist Alternativ-Möglichkeiten. Ich biete die optimale Lösung: eine Vermietung von professionellen Internetseiten. Eine Website mieten bietet alle Vorteile einer Webdesigner-Erstellung. Der Unterschied: Sie zahlen nicht die hohe Anschaffungsgebühr, sondern lediglich einen günstigen Festpreis pro Monat.
            Betreut wird das Projekt von den renomierten Basler Web-Agenturen Casulli Design und der Ideen-Werkstatt F-Ektiv GmbH.
            Wir sind Entwickler, Datenbank-Programmierer, Freelancer, WordPress-Jünger, Grafiker, Cartoonisten, Layouter, Designer, Fotografen und Blogger. Wir sind Freaks. Aus Leidenschaft. Und stolz darauf. Begriffe wie HTML, CSS, PHP, MySQL, Themes, Widgets, Plugins, Typekit, Pixel-Seitenverhältnis, RAW-Filter und Objektivkorrektur bereiten Ihnen Kopfzerbrechen?
            Herzlich willkommen! Wir freuen uns, dass Sie hier auf unserer Website vorbeischauen. Ob Web, Grafik oder Foto. Wir sind sehr gerne für Sie da. Unsere Arbeit ist für uns viel mehr als nur ein Job.
            Wir lieben unser Handwerk. Wir lieben es im freien Internet aktiv zu sein. Wir lieben es Wissen und Erfahrungen mit anderen zu teilen und Plattformen zu schaffen.
          </Description>

        </Contents>
        <ImageContainer>
          <HeroIllustration />
        </ImageContainer>
      </HeroWrapper>
    </div>

  );
}

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
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

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
