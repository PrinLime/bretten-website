import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import AbteilungComponent from "./AbteilungComponent";
import theme from "../styles";

const Abteilung5 = () => {
  return (
    <>
      {/* Wrapping image and overlay text in a Box */}
      <Box sx={{ position: "relative", height: 500, width: "100%" }}>
        <Grid2
          component={"img"}
          height={500}
          width={"100%"}
          src="src/assets/abt2.png"
          sx={{ position: "relative", zIndex: 0 }}
        />
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "72px",
            fontWeight: "bold",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          Berufskollegs
        </Typography>
      </Box>
      <AbteilungComponent />
      <Container sx={{ mt: 8, mb: 6 }}>
        <Stack direction={"row"}>
          <Grid2>
            <Typography
              variant="h4"
              color={theme.palette.custom?.brettenBackground}
            >
              Berufskollegs
            </Typography>
            <Typography
              variant="subtitle1"
              color={theme.palette.grey[600]}
              fontWeight={"bold"}
            >
              Eine komplexere Arbeitswelt und der gesellschaftliche Wandel
              führen zu neuen Ansprüchen und Herausforderungen. Diese nimmt das
              Berufskolleg in einer Verknüpfung von Theorie und Praxis an. Das
              Profil(-fach) spielt dabei eine wesentliche Rolle für eine
              entsprechende berufliche Qualifikation. Gleichzeitig wird eine
              erweiterte allgemeine Bildung vermittelt.
            </Typography>
            <Typography variant="subtitle1" color={theme.palette.grey[600]}>
              Neben der Fachhochschulreife kann in jedem Profil ein Assistent
              (beispielsweise „Staatlich geprüfter Assistent“ bzw. „Staatlich
              geprüfte Assistentin“) erworben werden.
            </Typography>
          </Grid2>
          <Grid2 component={"img"} src="src\assets\BKBild.jpg" />
        </Stack>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          color={theme.palette.custom?.brettenBackground}
        >
          Wählen Sie Ihren Weg zur Fachhochschulreife
        </Typography>
        <Grid2 component={"img"} src="src\assets\BKWeg.jpg" />
      </Container>
    </>
  );
};

export default Abteilung5;
