import styled from 'styled-components';
import Page from 'components/Page';
import { media } from 'utils/media';
import FormSection from 'views/ContactPage/FormSection';
import InformationSection from 'views/ContactPage/InformationSection';

export default function ContactPage() {
  return (
    <>
      <title>Kontakt - Kontaktiere und teile uns deine Wunsch Webseite</title>
      <meta name="description" content="Teile uns deine Wunsch Webseite" />
      <meta property="og:title" content="Kontakt - neptoon.ch" />
      <meta property="og:description" content="Teile uns deine Wunsch Webseite" />
      <meta property="og:url" content="https://neptoon.ch/contact" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
      <Page title="Kontakt" description="Kontaktiere und teile uns deine Wunsch Webseite">
        <ContactContainer>
          <InformationSection />
          <FormSection />
        </ContactContainer>
      </Page>
    </>

  );
}

const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
