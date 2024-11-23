import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import AbteilungComponent from "./AbteilungComponent";
import theme from "../styles";

const Abteilung6 = () => {
  return (
    <>
      {/* Wrap image and text in Box for better position control */}
      <Box sx={{ position: "relative", height: 500, width: "100%" }}>
        <Grid2
          component={"img"}
          height={500}
          width={"100%"}
          src="src/assets/abt4.png"
          sx={{
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
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
            zIndex: 1, // Ensures text stays above the image
          }}
        >
          Berufliches Gymnasium
        </Typography>
      </Box>

      <AbteilungComponent />

      <Container
        sx={{ mt: 8, mb: 6, display: "flex", justifyContent: "center" }}
      >
        <Stack
          direction={"row"}
          spacing={4}
          justifyContent="center"
          width="100%"
        >
          <Grid2 sx={{ maxWidth: "600px" }}>
            <Typography
              variant="h4"
              color={theme.palette.custom?.brettenBackground}
            >
              Berufliches Gymnasium
            </Typography>
            <Typography variant={"subtitle1"} color={theme.palette.grey[600]}>
              Das berufliche Gymnasium der dreijährigen Aufbauform wird an den
              Beruflichen Schulen Bretten als Technisches Gymnasium mit den
              Fachrichtungen Informationstechnik, Technik und Management,
              Gestaltungs- und Medientechnik und als Sozial- und
              gesundheitswissenschaftliches Gymnasium mit der Fachrichtung
              Gesundheit und Biologie angeboten. Das Berufliche Gymnasium
              bereitet naturwissenschaftlich-technisch, informationstechnisch
              und sozial- und gesundheitswissenschaftlich interessierte junge
              Menschen sowohl auf das Studium an einer Hochschule als auch in
              besonderer Weise auf die Berufswelt vor.
            </Typography>
          </Grid2>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <a href="https://bsb-bretten.de/wp-content/uploads/2023/01/Informationsbroschure_BG_2301.pdf">
              <Grid2
                component={"img"}
                src="src/assets/BGBild.jpg"
                height={300}
                width={600}
              />
            </a>
          </Box>
        </Stack>
      </Container>

      <Container sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <a href="https://bsb-bretten.de/wp-content/uploads/2023/02/BSB_Berufliches_Gymnasium.mov">
            <Grid2
              component={"img"}
              src="src/assets/thumbnail.jpg"
              height={300}
              width={500}
            />
          </a>

          <Typography
            variant="subtitle1"
            fontWeight={"bold"}
            sx={{ textAlign: "center" }}
          >
            Erklärvideo zu den Beruflichen Gymnasien
          </Typography>
        </Box>
      </Container>

      <Container sx={{ mt: 2, mb: 4 }}>
        <Typography
          variant="h6"
          fontWeight={"bold"}
          color={theme.palette.custom?.brettenBackground}
          sx={{ mt: 4 }}
        >
          Information für unsere Schülerinnen und Schüler
        </Typography>
        <Typography>
          <a href="https://km.baden-wuerttemberg.de/de/service/publikation/did/leitfaden-fuer-die-gymnasiale-oberstufe-abitur-2025">
            Leitfaden für das Abitur 2025
          </a>
          – externer Link
          <br />
          <br />
          <a href="https://km.baden-wuerttemberg.de/fileadmin/redaktion/m-km/intern/PDF/Publikationen/Gymnasium/2023_Leitfaden_fuer_die_gymnasiale_Oberstufe_Abitur_2026.pdf">
            Leitfaden für das Abitur 2026
          </a>
          – externer Link
          <br />
          <br />
          <a href="https://www.landesrecht-bw.de/bsbw/searchhttps://www.landesrecht-bw.de/jportal/?quelle=jlink&query=BerGymAbiPrV+BW&psml=bsbawueprod.psml&max=true&aiz=true">
            Abiturverordnung Berufliche Gymnasien gültig ab Abitur 2024 (BGVO –
            gültig ab 01.08.2021)
          </a>
          – externer Link
          <br />
          <br />
          <a href="http://www.landesrecht-bw.de/jportal/?quelle=jlink&query=FHSchulGymOStV+BW&psml=bsbawueprod.psml&max=true">
            Verordnung des Kultusministeriums über den Erwerb der
            Fachhochschulreife in der gymnasialen Oberstufe
          </a>
          – externer Link
        </Typography>
      </Container>
    </>
  );
};

export default Abteilung6;
