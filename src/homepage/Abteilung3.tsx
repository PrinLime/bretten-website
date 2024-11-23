import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import AbteilungComponent from "./AbteilungComponent";
import theme from "../styles";

const Abteilung3 = () => {
  return (
    <>
      {/* Wrapping image and overlay text in a Box */}
      <Box sx={{ position: "relative", height: 500, width: "100%" }}>
        <Grid2
          component={"img"}
          height={500}
          width={"100%"}
          src="src/assets/abt3.png"
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
          Übergang Schule und Beruf
        </Typography>
      </Box>
      <AbteilungComponent />
      <Container sx={{ mt: 8, mb: 6, position: "relative", zIndex: 2 }}>
        <Stack direction={"row"} spacing={4}>
          <Grid2>
            <Typography
              variant="h4"
              color={theme.palette.custom?.brettenBackground}
              mb={4}
            >
              Übergang Schule und Beruf
            </Typography>
            <Typography>
              Auf dieser Seite finden Sie alle Informationen zu den Schularten
              <br />
              <br />
              <a
                href="https://bsb-bretten.de/2022/03/25/avdual/"
                style={{ textDecoration: "none" }}
              >
                AVdual – Ausbildungsvorbereitung dual
              </a>
              <br />
              <br />
              <a
                href="https://bsb-bretten.de/2022/03/25/vabo/"
                style={{ textDecoration: "none" }}
              >
                Schule International – Informationen für zugewanderte
                Schülerinnen und Schüler (VABO)
              </a>
              <br />
              <br />
              <a
                href="https://formulare.virtuelles-rathaus.de/administrationCenter/Form-Solutions/08215000-01/consent?redirectId=b5a1cd7c-b737-4edb-b8a3-9c4b1423ed7e&releaseCacheId=5312b274-0044-47d6-82b2-43e7016b4e32"
                style={{ textDecoration: "none" }}
              >
                Anmeldeportal
              </a>
              für zugewanderte Schülerinnen und Schüler (VABO) des Landkreises
              Karlsruhe
            </Typography>
          </Grid2>
          <a href="https://bsb-bretten.de/wp-content/uploads/2023/01/Flyer_AVdual_BSB_2301.pdf">
            <Grid2
              component={"img"}
              height={300}
              width={600}
              src="src/assets/AVDual.jpg"
              sx={{ objectFit: "cover", borderRadius: 2 }}
            />
          </a>
        </Stack>
      </Container>
    </>
  );
};

export default Abteilung3;
