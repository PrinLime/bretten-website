import { Box, Container, Grid2, Typography } from "@mui/material";
import AbteilungComponent from "./AbteilungComponent";
import theme from "../styles";

const Abteilung2 = () => {
  return (
    <>
      {/* Wrapping the image and text inside a Box for better control */}
      <Box sx={{ position: "relative", height: 500, width: "100%" }}>
        <Grid2
          component={"img"}
          height={500}
          width={"100%"}
          src="assets/abt2.png"
          sx={{ position: "relative", zIndex: 0 }} // Keep image at a base level
        />
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
            zIndex: 1, // Lower zIndex to keep it under other components
          }}
        >
          Kaufmännische Schule
        </Typography>
      </Box>
      <AbteilungComponent />
      <Container sx={{ mt: 8, mb: 6, position: "relative", zIndex: 2 }}>
        <Typography
          variant="h4"
          mb={2}
          fontWeight={"bold"}
          color={theme.palette.custom?.brettenBackground}
        >
          Herzlich Willkommen in der Kaufmännischen Berufsschule
        </Typography>
        <Typography
          variant="h5"
          mt={2}
          mb={2}
          color={theme.palette.custom?.brettenBackground}
        >
          Entschuldigung oder Freistellung notwendig?
        </Typography>
        <Typography variant="subtitle1">
          Nutzen Sie bitte folgende E-Mail-Adresse: kbs@bsb-bretten.de <br />
          Bitte geben Sie den Namen und die Klasse des „Azubis“ an.
        </Typography>
        <Typography
          variant="h5"
          mt={2}
          mb={2}
          color={theme.palette.custom?.brettenBackground}
        >
          Wann findet der Unterricht im Schuljahr 2024/2025 statt?
        </Typography>
        <Typography variant="subtitle1">
          Der Unterricht in der kaufmännischen Berufsschule beginnt – mit
          Ausnahme des Blocks – in der zweiten Schulwoche.
        </Typography>
        <Typography
          variant="h5"
          mt={2}
          mb={2}
          color={theme.palette.custom?.brettenBackground}
        >
          Kaufmännische Ausbildungsgänge
        </Typography>
        <Typography>
          <b>Einzelhändler/-in / Verkäufer/-in:</b>
          <br />
          <ul>
            <li>1. Ausbildungsjahr (W1KE) Dienstag und Freitag </li>
            <li>2. Ausbildungsjahr (W2KE) Montag und Donnerstag </li>
            <li>3. Ausbildungsjahr (W3KE) Mittwoch und Freitag</li>
          </ul>
          <b>Industriekaufmann/-frau:</b>
          <ul>
            <li>Erstes Ausbildungsjahr: Montag + Freitag </li>
            <li>
              Zweites und drittes Ausbildungsjahr: Blockunterricht nach dem
              Blockplan KBS Bretten 2024-25
            </li>
          </ul>
          <b>
            Kaufleute für IT-Systemmanagement & Kaufleute für
            Digitalisierungsmanagement:
          </b>
          <ul>
            <li>
              Erstes Ausbildungsjahr (W1SY/DM): Mittwoch und Dienstag (A-Woche)
            </li>
            <li>
              Zweites Ausbildungsjahr (W2SY/DM): Donnerstag und Freitag
              (A-Woche)
            </li>
            <li>
              Drittes Ausbildungsjahr (W3SY/DM, W3DM): Montag und Dienstag
              (B-Woche)
            </li>
          </ul>
        </Typography>
        <Typography
          variant="h5"
          mt={2}
          mb={2}
          color={theme.palette.custom?.brettenBackground}
        >
          Gewerbliche Ausbildungsgänge in der kaufm. Abteilung
        </Typography>
        <Typography variant="subtitle1">
          <b>Fachinformatiker/-in Anwendungsentwicklung</b>
          <ul>
            <li>1. Ausbildungsjahr (E1FA) Mittwoch + Dienstag (B-Woche) </li>
            <li>2. Ausbildungsjahr (E2FA) Donnerstag + Freitag (A-Woche)</li>
            <li>3. Ausbildungsjahr (E3FA) Montag + Dienstag (A-Woche)</li>
          </ul>
          <b>Fachinfomatiker Systemintegration:</b>
          <ul>
            <li>1. Ausbildungsjahr (E1FS) Mittwoch + Dienstag (A-Woche)</li>
            <li>2. Ausbildungsjahr (E2FS) Donnerstag + Freitag (B-Woche)</li>
            <li>3. Ausbildungsjahr (E3FS) Montag + Dienstag (A-Woche)</li>
          </ul>
          Die Ausbildungsgänge Fachinformatiker/in Digitale Vernetzung, sowie
          Daten und Prozessanalyse sind in Planung.
        </Typography>
      </Container>
    </>
  );
};

export default Abteilung2;
