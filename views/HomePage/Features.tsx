import React from 'react';
import styled from 'styled-components';
import AutofitGrid from 'components/AutofitGrid';
import BasicCard from 'components/BasicCard';
import Container from 'components/Container';
import { media } from 'utils/media';

const FEATURES = [
  {
    imageUrl: '/grid-icons/asset-1.svg',
    title: 'Design',
    description:
      'UX and UI',
  },
  {
    imageUrl: '/grid-icons/asset-2.svg',
    title: 'Suchmaschine Optimierungen',
    description:
      'Onpage- und Offpage-Optimierung',
  },
  {
    imageUrl: '/grid-icons/asset-3.svg',
    title: 'Responsive',
    description:
      'Mobile, Tablet und Desktop optimierungen',
  },
  {
    imageUrl: '/grid-icons/asset-4.svg',
    title: 'Support',
    description:
      'Jederzeit erreichbar',
  },
  {
    imageUrl: '/grid-icons/asset-5.svg',
    title: 'Schweizer Hosting',
    description:
      'Wir hosten bei Hostpoint.ch',
  },
  {
    imageUrl: '/grid-icons/asset-6.svg',
    title: 'Next.js und Django',
    description:
      'Wir verwenden Next.js um Webseiten zu erstellen',
  },
  {
    imageUrl: '/grid-icons/asset-7.svg',
    title: 'State of Art Webdesign',
    description:
      'Wir verwenden die neuesten Design Frameworks',
  },
  {
    imageUrl: '/grid-icons/asset-8.svg',
    title: 'Social Media Integration',
    description:
      'Verlinkungen auf Facebook, Twitter und Instagram',
  },
  {
    imageUrl: '/grid-icons/asset-9.svg',
    title: 'Swiss Made',
    description:
      'Entwicklung in der Schweiz',
  },
];

export default function Features() {
  return (
    <Container>
      <CustomAutofitGrid>
        {FEATURES.map((singleFeature, idx) => (
          <BasicCard key={singleFeature.title} {...singleFeature} />
        ))}
      </CustomAutofitGrid>
    </Container>
  );
}

const CustomAutofitGrid = styled(AutofitGrid)`
  --autofit-grid-item-size: 40rem;

  ${media('<=tablet')} {
    --autofit-grid-item-size: 30rem;
  }

  ${media('<=phone')} {
    --autofit-grid-item-size: 100%;
  }
`;
