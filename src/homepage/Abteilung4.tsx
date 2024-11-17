import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import AbteilungComponent from "./AbteilungComponent";
import theme from "../styles";

const Abteilung4 = () => {
  return (
    <>
      {/* Wrapping the image and text inside a Box for better control */}
      <Box sx={{ position: "relative", height: 500, width: "100%" }}>
        <Grid2
          component={"img"}
          height={500}
          width={"100%"}
          src="assets/abt1.png"
          sx={{ position: "relative", zIndex: 0 }} // Keep image at a base level
        />
        <Typography
          sx={{
            position: "absolute",
            top: "50%", // Centers vertically
            left: "50%", // Centers horizontally
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "72px",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 1, // Lower zIndex, so it stays behind the Container and Stack components
          }}
        >
          Hauswirtschaftlich- sozialwissenschaftliche Schule
        </Typography>
      </Box>
      <AbteilungComponent />
      <Container sx={{ mt: 8, mb: 6 }}>
        <Stack direction={"row"}>
          <Grid2>
            <Typography
              variant="h4"
              color={theme.palette.custom?.brettenBackground}
              mb={2}
            >
              Hauswirtschaftlich – sozialwissenschaftliche Schule
            </Typography>
            <Typography variant="subtitle1" color={theme.palette.grey[600]}>
              Die Hauswirtschaftlich – sozialwissenschaftlichen Schulen an den
              Beruflichen Schulen Bretten stehen für Vielfalt, Weiterbildung und
              ein Vorankommen im persönlichen Lebenslauf. In allen
              Schulbereichen steht eine enge Verknüpfung von Theorie und Praxis
              der jeweiligen beruflichen Profile im Vordergrund.
            </Typography>
          </Grid2>
          <a href="https://bsb-bretten.de/wp-content/uploads/2024/11/2-jaehriger-Flyer_Altenpflegehilfe_Nichtmuttersprachler-11_24.pdf">
            <Grid2
              height={300}
              width={600}
              component={"img"}
              src="assets/Abt4Bild.jpg"
            />
          </a>
        </Stack>
        <Typography
          variant="h4"
          color={theme.palette.custom?.brettenBackground}
          mb={2}
        >
          Wir legen Wert auf Lernen mit Kopf, Herz und Hand!
        </Typography>
        <Typography variant="subtitle1" color={theme.palette.grey[600]}>
          Die Zweijährigen Berufsfachschulen mit ihren Profilen Hauswirtschaft
          und Ernährung, Gesundheit und Pflege, Wirtschaft, Elektrotechnik und
          Metalltechnik bieten die Möglichkeit eines mittleren
          Bildungsabschlusses mit beruflicher Grundbildung und vertiefter
          Allgemeinbildung!
          <br />
          <br />
          Die Zweijährigen Berufsfachschulen zur beruflichen Aus- und
          Weiterbildung gliedern sich in drei Schularten:
          <br />
          <br />
          Die Zweijährige Berufsfachschule sozialpädagogische Assistenz (ehem.
          „Kinderpflege“) mit anschließendem Anerkennungsjahr führt zur
          staatlichen Anerkennung und befähigt als Zweitkraft in Einrichtungen
          öffentlicher und freier Trägerschaft bei der Erziehung, Bildung,
          Pflege und Betreuung von Kindern eingesetzt zu werden. Dies gilt
          ebenso für die dreijährige praxisintegrierte Ausbildung zur staatlich
          anerkannten sozialpädagogischen Assistenz (PIA). Für weitere
          Informationen klicken Sie hier.
          <br />
          <br />
          Die Zweijährige Berufsfachschule für Altenpflegehilfe für
          Migrant*innen führt zu einer staatlichen Anerkennung in der Pflege und
          Betreuung von unterstützungsbedürftigen Menschen unter Anleitung einer
          Fachkraft.
          <br />
          <br />
          Die Berufsfachschule zum Erwerb von Zusatzqualifikationen, Schwerpunkt
          Vorbereitung Erzieher*innenabschluss führt zum Einsatz als Erstkraft
          in sozialpädagogischen Einrichtungen öffentlicher und freier
          Trägerschaft.
        </Typography>
      </Container>
    </>
  );
};

export default Abteilung4;
