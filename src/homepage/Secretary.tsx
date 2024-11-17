import {
  Box,
  Container,
  Grid2,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import theme from "../styles";

const Secretary = () => {
  return (
    <>
      <Container sx={{ padding: 10 }}>
        <Box width={"100%"}>
          <Paper sx={{ zIndex: 9999, padding: 2 }}>
            <Stack
              direction={"row"}
              width={"fit-content"}
              alignItems="center"
              ml={2}
            >
              <IconButton edge="start">
                <img src="assets\bretten_logo.png" height={125} width={125} />
              </IconButton>
              <Grid2 ml={2}>
                <Typography variant="h3">
                  <b>Berufl. Schulen Bretten</b>
                </Typography>
              </Grid2>
            </Stack>
            <Stack>
              <Box ml={4}>
                <Typography variant="h5">
                  Wilhemlstraße 22 - 75015 Bretten
                </Typography>
                <Typography variant="subtitle1">
                  Telefonnr: 0721 936-61600{" "}
                </Typography>
                <Typography variant="subtitle1">
                  Fax: 0721 936-61789{" "}
                </Typography>
                <Typography variant="subtitle1">
                  E-Mail: sekretariat@bsb-bretten.de
                </Typography>
              </Box>
              <Box
                height={50}
                width={"100%"}
                sx={{
                  mt: 2,
                  backgroundColor: theme.palette.custom?.brettenBackground,
                  display: "flex",
                  justifyContent: "center", // Horizontally center content
                  alignItems: "center", // Vertically center content
                }}
              >
                <Typography variant="h4" color={theme.palette.grey[200]}>
                  Öffnungszeiten Sekretariat
                </Typography>
              </Box>
            </Stack>
            <Box
              width="100%"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                height: "auto", // Allow content to flow naturally
                textAlign: "center", // Align text in the center
              }}
            >
              <Stack direction="column" justifyContent="center" spacing={2}>
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  color={theme.palette.custom?.brettenBackground}
                >
                  Mo - Fr 9:00 - 10:00 Uhr
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={"bold"}
                  color={theme.palette.custom?.brettenBackground}
                >
                  Mo - Fr 11:00 - 12:00 Uhr
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={theme.palette.custom?.brettenBackground}
                >
                  Schulbescheinigungen, Fahrkartenanträge u.ä. können in den
                  Briefkasten eingeworfen werden. Sie erhalten diese über den
                  Klassenlehrer*in nach Erledigung zurück.
                  <br />
                  <br />
                  In ganz dringenden Angelegenheiten kann außerhalb der Zeiten
                  telefonisch ein Termin vereinbart werden.
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={theme.palette.custom?.brettenBackground}
                >
                  Tel: 0721 936 61 600
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={theme.palette.custom?.brettenBackground}
                >
                  E-Mail:
                  <a
                    href="mailto:sekretariat@bsb-bretten.de"
                    style={{ textDecoration: "none" }}
                  >
                    <strong>sekretariat@bsb-bretten.de</strong>
                  </a>
                </Typography>
                <Typography
                  variant="subtitle1"
                  color={theme.palette.custom?.brettenBackground}
                >
                  Vielen Dank im Voraus
                </Typography>
              </Stack>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Secretary;
