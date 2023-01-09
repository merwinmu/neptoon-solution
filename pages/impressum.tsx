import styled from 'styled-components';
import Page from 'components/Page';
import RichText from 'components/RichText';

export default function ImpressumPage() {
    return (
        <Page title="Impressum">
            <PrivacyPolicyContainer>
                <RichText>
                    <strong>
                        Verantwortliche Instanz:
                    </strong>
                    <p>
                        michmieten.ch gmbh
                    </p>
                    <p>
                        Lärchenstrasse 3
                    </p>
                    <p>
                        4410 Liestal

                    </p>
                    <p>
                        Schweiz
                    </p>
                    <p>
                        michmieten@gmail.com
                    </p>
                    <br />
                    <strong>
                        Vertretungsberechtigte Personen

                    </strong>
                    <p>
                        <strong></strong>
                        Merwin Mudavamkunnel
                    </p>
                    <br />
                    <strong>
                        Name des Unternehmens: michmieten.ch gmbh
                    </strong>
                    <br />
                    <strong>
                        Registrationsnummer: CHE-227.795.534
                    </strong>

                    <br />
                    <strong>
                        Haftungsausschluss
                    </strong>
                    <p>
                        Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
                        Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen.

                        Alle Angebote sind freibleibend. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.

                    </p>
                    <br />
                    <strong>
                        Haftungsausschluss für Inhalte und Links

                    </strong>
                    <p>
                        Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.

                    </p>
                    <br />
                    <strong>
                        Urheberrechtserklärung

                    </strong>
                    <p>
                        Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, gehören ausschliesslich michmieten.ch oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
                    </p>
                    <strong>
                    Quelle: <a href="https://brainbox.swiss">Brainbox Solution</a>

                    </strong>



                </RichText>
            </PrivacyPolicyContainer>
        </Page>
    );
}

const PrivacyPolicyContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
