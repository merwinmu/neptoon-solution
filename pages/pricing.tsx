import styled from 'styled-components';
import Page from 'components/Page';
import FaqSection from 'views/PricingPage/FaqSection';
import PricingTablesSection from 'views/PricingPage/PricingTablesSection';

export default function PricingPage() {
  return (
    <>
      <title>Preisliste - Preise und Leistungen</title>
      <meta name="description" content="Unsere Preise" />
      <meta property="og:title" content="Preisliste - neptoon.ch" />
      <meta property="og:description" content="Unsere Preise" />
      <meta property="og:url" content="https://neptoon.ch/pricing" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
      <Page title="Mietpreise" description="Preise und Leistungen">
        <Wrapper>
          <PricingTablesSection />
          <FaqSection />
        </Wrapper>
      </Page>
    </>

  );
}

const Wrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;
