import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import PricingCard from 'components/PricingCard';
import SectionTitle from 'components/SectionTitle';

export default function PricingTablesSection() {
  return (
    <Wrapper>
      <SectionTitle>Flexibles Preisgestaltung</SectionTitle>
      <AutofitGrid>
        <PricingCard
          title="Starter"
          description="für Privatpersonen"
          benefits={[
            'bis zu 1 Inhaltseiten',
            'Next.js',
            'Kontaktformulare',
            'Optimiert für Mobile, Tablet',
            'Support',
            'DSGVO konform',
            'Hostinggebühren',
            'Domaingebühren',
            'SSL-Zertifikat',
          ]}
        >
          CHF 69<span>/Monat</span>
        </PricingCard>
        <PricingCard
          title="Standard"
          description="für Startups"
          benefits={[
            'bis zu 4 Inhaltseiten',
            'Next.js und Strapi CMS',
            'Kontaktformulare',
            'Optimiert für Mobile, Tablet',
            'Support',
            'Wartung',
            '',
            'SEO Optimierung',
            'DSGVO konform',
            'Hostinggebühren',
            'Domaingebühren',
            'SSL-Zertifikat',
          ]}
        >
          CHF 89<span>/Monat</span>
        </PricingCard>
        <PricingCard
          title="Premium"
          description="für KMU's"
          benefits={[
            'bis zu 8 Inhaltseiten',
            'Next.js und Strapi CMS',
            'Kontaktformulare',
            'Optmiert für Mobile, Tablet',
            'Support',
            'Wartung',
            'SEO Optimierung',
            'DSGVO konform',
            'Hostinggebühren',
            'Domaingebühren',
            'SSL-Zertifikat',
          ]}
        >
          CHF 99<span>/Monat</span>
        </PricingCard>
        <PricingCard
          title="Dynamic"
          description="SaaS idee?"
          benefits={[
            'Dynamische inhaltseiten',
            'Next.js und Django (Python)',
            'Kontaktformulare',
            'Optmiert für Mobile, Tablet',
            'Support',
            'Wartung',
            'DSGVO konform',
            'Hostinggebühren',
            'Domaingebühren',
            'SSL-Zertifikat',
          ]}
        >
          <span>Kontaktiere uns</span>
        </PricingCard>
      </AutofitGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > *:not(:first-child) {
    margin-top: 8rem;
  }
`;
