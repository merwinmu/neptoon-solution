import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ContactPage() {
  return (
    <Page title="Cookies">
      <CookiesPolicyContainer>
        <RichText>
          <p>
            Diese Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die es ermöglichen, spezifische, auf den Nutzer bezogene Informationen auf dem Endgerät des Nutzers zu speichern, während der Nutzer die Website nutzt. Cookies ermöglichen es insbesondere, die Nutzungshäufigkeit und die Anzahl der Nutzer der Seiten zu ermitteln, Verhaltensmuster der Seitennutzung zu analysieren, aber auch, unser Angebot kundenfreundlicher zu gestalten. Cookies bleiben über das Ende einer Browser-Sitzung hinaus gespeichert und können bei einem erneuten Besuch der Seite wieder abgerufen werden. Wenn Sie dies nicht wünschen, sollten Sie Ihren Internet-Browser so einstellen, dass er die Annahme von Cookies verweigert. Ein genereller Widerspruch gegen die Verwendung von Cookies zu Online-Marketing-Zwecken kann für eine Vielzahl der Dienste, insbesondere beim Tracking, über die US-Seite http://www.aboutads.info/choices/ oder die EU-Seite http://www.youronlinechoices.com/ erklärt werden. Darüber hinaus kann die Speicherung von Cookies durch Deaktivierung in den Browsereinstellungen erreicht werden. Bitte beachten Sie, dass in diesem Fall nicht alle Funktionen dieses Online-Angebots genutzt werden können.
          </p>
        </RichText>
      </CookiesPolicyContainer>
    </Page>
  );
}

const CookiesPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
