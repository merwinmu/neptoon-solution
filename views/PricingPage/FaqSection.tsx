import styled from 'styled-components';
import Accordion from 'components/Accordion';
import SectionTitle from 'components/SectionTitle';

export default function FaqSection() {
  return (
    <Wrapper>
      <SectionTitle>Frequently asked question</SectionTitle>
      <Accordion title="Mindestvertragslaufzeit?">
        Die Mindestvertragslaufzeit beträgt 24 Monate
      </Accordion>
      <Accordion title="Wo wird die Webseite gehostet?">
        Die Webseite wird auf Firebase (Google) gehostet.
      </Accordion>
      <Accordion title="Wo wird die Domain registiert?">
      Die Domain wird auf Hostpoint.ch registiert.
      </Accordion>
      <Accordion title="Können sie die Website ändern?">
        Ja, Änderungen können 1 x mal pro Monat pro Seite von uns vorgenommen werden
      </Accordion>
      <Accordion title="Wie lange geht die Entwicklungszeit?">
      Wie lange die Entwicklung eines Projekts dauert, hängt davon ab, wie komplex die Website gestaltet werden soll. 
      </Accordion>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 15rem;
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
