import NextLink from 'next/link';
import styled, { keyframes } from 'styled-components'
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import Wave from 'react-wavify'

export default function WaveCta() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <>
      <Wave fill='#0f131a'
        paused={false}
        options={{
          height: 20,
          amplitude: 89,
          speed: 0.15,
          points: 3
        }}
      />
      <CtaWrapper>
        <Container>
          <Title>Kontaktiere uns</Title>
          <CustomButtonGroup>
            <Button onClick={() => setIsModalOpened(true)}>
              Subscribe to the newsletter <span>&rarr;</span>
            </Button>
            <NextLink href="/features" passHref>
              <OutlinedButton transparent>
                Features <span>&rarr;</span>
              </OutlinedButton>
            </NextLink>
          </CustomButtonGroup>
        </Container>
      </CtaWrapper>
    </>
  );
}

const CtaWrapper = styled.div`
  background: rgb(var(--secondary));
  margin-top: -1rem;
  padding-bottom: 16rem;

  ${media('<=tablet')} {
    padding-top: 8rem;
  }
`;

const Title = styled(SectionTitle)`
  color: rgb(var(--textSecondary));
  margin-bottom: 4rem;
`;

const OutlinedButton = styled(Button)`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;

const CustomButtonGroup = styled(ButtonGroup)`
  justify-content: center;
`;


