import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import Cta from 'views/HomePage/Cta';
import Features from 'views/HomePage/Features';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';


export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME} - State of the Art Solutions</title>
        <meta
          name="description"
          content="Spare Entwicklungskosten für eine Webseite statt eine zu kaufen"
        />
        <meta property="og:title" content="Webseite mieten statt kaufen - neptoon.ch"/>
        <meta property="og:description" content="Spare Entwicklungskosten für eine Webseite statt eine zu kaufen"/>
        <meta property="og:url" content={EnvVars.SITE_NAME}/>
        <meta property="og:type" content="website"></meta>
        <meta name="google-site-verification" content="PwpGioH3AELiwc5A7p_HPOfLzYiWV6zV6FjmFXvdMAY" />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Individuelles Angebot" overTitle="">
            <p>
              Nehmen Sie Kontakt mit uns auf, wenn Sie ein konkretes Angebot für Ihre Wunsch-Homepage wünschen oder eine Beratung wünschen. Sie brauchen sich keine Sorgen zu machen, denn auch Ihre Homepage wird professionell gehostet, aktualisiert und abgesichert egal ob Privatperson, Verein oder KMU.
            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="Schritte" overTitle="" reversed>
            <p>
              Wie funktionierts:
            </p>
            <ul>
              <li>Sie nennen uns Ihre Anforderungen an Design und Funktionalität für Ihre Homepage.
              </li>
              <li>Sie erhalten von uns einen Vorschlag für das Design und die passende Technik für die Website.</li>
              <li>Die Registrierung der Domain wird von uns übernommen 
              </li>
              <li>Sie stellen Texte und Bilder zur Verfügung</li>
              <li>Die Webseite wird von uns programmiert
              </li>
              <li>Schliesslich wird die Webseite hochgeladen</li>

            </ul>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <FeaturesGallery />
          <Features />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
