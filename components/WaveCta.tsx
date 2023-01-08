import NextLink from 'next/link';
import styled, { keyframes } from 'styled-components'
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';

export default function WaveCta() {
  const { setIsModalOpened } = useNewsletterModalContext();

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#0A121E"
          fillOpacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <CtaWrapper>
        <Container>
          <Title>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus delectus?</Title>
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

const spin = keyframes`
100% { transform: rotate(360deg); }
`


const Wave = styled.div`
height: 100vh;
background-color: #000;
overflow: hidden;
  
.wave,
.wave::before,
.wave::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250vw;
  height: 250vw;
  margin-left: -125vw;
  transform-origin: 50% 50%;
  background-color: transparent;
  border-radius: 38% 42%;
  box-shadow: inset 0 0 10vw rgba(255,0,255,0.8);
  animation: ${spin} 16s infinite linear;
  mix-blend-mode: multiply
}

.wave::before {
  width: 105%;
  height: 95%;
  margin-top: -125vw;
  transform-origin: 49% 51%;
  border-radius: 40% 38%;
  box-shadow: inset 0 0 10vw rgba(255,255,0,0.8);
  animation: ${spin} 13s infinite linear;
}

.wave::after {
  width: 102%;
  height: 98%;
  margin-top: -125vw;
  transform-origin: 51% 49%;
  border-radius: 48% 42%;
  box-shadow: inset 0 0 10vw rgba(0,255,255,0.8);
  animation: ${spin} 10s infinite linear;
}`
