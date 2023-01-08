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
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <BasicSection imageUrl="/demo-illustration-1.svg" title="Individuelles Angebot" overTitle="sit amet gogo">
            <p>
              Gerne erstelle ich Ihnen ein individuelles Angebot für Ihre Wunsch Homepage oder berate Sie, nehmen Sie dazu einfach Kontakt auf. Auch wird Ihre Homepage geschützt, geupdatet und professionell gehostet - somit brauchen Sie sich um nichts kümmern. Privat, Verein oder KMU - ich biete eine passende Lösung für Sie: Webseite mieten statt kaufen - Bei ch-web.design ganz einfach.

            </p>
          </BasicSection>
          <BasicSection imageUrl="/demo-illustration-2.svg" title="So einfach erhalten Sie Ihre individuelle Homepage zur Miete:" overTitle="lorem ipsum" reversed>
            <p>
              So einfach erhalten Sie Ihre individuelle Homepage zur Miete:
            </p>
            <ul>
              <li>Sie teilen mir Ihre Anforderungen an Design und Funktionalität für Ihre Homepage mit
              </li>
              <li>Sie erhalten einen Vorschlag für das Design und das am besten geeignetste CMS (Contao oder Wordpress)</li>
              <li>Ich nehme die Registrierung Ihrer Domain vor.
              </li>
              <li>Wenn Sie bereits eine Domain besitzen, wird die Domain auf meinen Server transferiert. Bitte beachten Sie, dass Miet-Webseiten nur auf meinem Server zur Verfügung gestellt werden können.</li>
              <li>Sie stellen Bilder und Texte zur Verfügung.</li>
              <li>Die Homepage wird von mir erstellt und auf Ihre Domain aufgeschaltet.
              </li>
              <li>Nach Ihrer Freigabe wird die Homepage online geschaltet.</li>

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
