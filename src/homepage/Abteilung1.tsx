import { Container, Grid2, Typography } from "@mui/material";
import AbteilungComponent from "./AbteilungComponent";
import theme from "../styles";

const Abteilung1 = () => {
  return (
    <>
      <Grid2
        component={"img"}
        height={500}
        width={"100%"}
        src="src\assets\abt1.png"
      ></Grid2>
      <Typography
        sx={{
          position: "absolute", // Places the text on top of the image
          top: "50%", // Centers vertically
          left: "50%", // Centers horizontally
          transform: "translate(-50%, -50%)", // Perfectly centers it
          color: "white",
          fontSize: "72px",
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 1, // Ensures text stays above the image
        }}
      >
        Gewerbliche Schule
      </Typography>
      <AbteilungComponent />
      <Container sx={{ mt: 8, mb: 2 }}>
        <Typography
          variant="h4"
          color={theme.palette.custom?.brettenBackground}
        >
          Gewerbliche Berufsschule
        </Typography>
        <Typography variant="subtitle1">
          Sie wollen…
          <br />
          <ul>
            <li>
              im dualen Ausbildungssystem eine fundierte Ausbildung erhalten,
              wobei sich die Lernorte „Betrieb“ und „Berufsschule“ in ihren
              theoretischen und praktischen Lernorten ideal ergänzen?
            </li>
            <li>
              als Hauptschüler nach der abgeschlossenen Berufsausbildung durch
              die Zusatzqualifikation „9+3“ einen mittleren Bildungsabschluss
            </li>
            erhalten?
          </ul>
          Oder
          <ul>
            <li>
              als Realschüler nach der abgeschlossenen Berufsausbildung und
              Zusatzunterricht die Fachhochschulreifeerlangen?
            </li>
            <li>
              einen Neustart an einer bestens ausgestatteten Schule mit
              kompetenten Lehrerteams, interessanten Arbeitsgemeinschaften und
              Beratungsangeboten?
            </li>
          </ul>
          Dann lernen Sie je nach Dauer Ihres Ausbildungsverhältnisses im
          Teilzeitunterricht bis zur schriftlichen und mündlichen
          Abschlussprüfung …<br />
          <ul>
            <li>
              Aufbauendes in bekannten Fächern wie Deutsch und
              Gemeinschaftskunde.
            </li>
            <li>
              Neues im berufsspezifischen Bereich in Fächern der
              Lernfeldkonzeption Hier geht es um Berufsfachliche Kompetenz,
              Projektkompetenz und Wirtschaftskompetenz.
            </li>
          </ul>
          Zusätzlich bieten wir…
          <ul>
            <li>
              als Industriemechaniker die IHK-Zusatzqualifikation zur
              Elektrofachkraft.
            </li>
            <li>
              als Konstruktionsmechaniker die TÜV-Zusatzqualifikation zur
              Elektrofachkraft.
            </li>
            <li>mit der Zusatzqualifikation Fachhochschulreife.</li>
          </ul>
        </Typography>
      </Container>
    </>
  );
};

export default Abteilung1;
