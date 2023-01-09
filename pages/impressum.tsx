import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ImpressumPage() {
    return (
        <>
            <title>Preisliste - Preise und Leistungen</title>
            <meta name="description" content="Unsere Preise" />
            <meta property="og:title" content="Preisliste - neptoon.ch" />
            <meta property="og:description" content="Unsere Preise" />
            <meta property="og:url" content="https://neptoon.ch/pricing" />
            <meta property="og:type" content="website" />
            <link rel="icon" href="/favicon.ico" />
        </>

    );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
