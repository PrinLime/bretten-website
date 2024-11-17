import { Box, Container, Grid2, Typography } from "@mui/material";
import theme from "../styles";

const Imprint = () => {
  return (
    <>
      <Grid2
        component={"img"}
        width={"100%"}
        src="assets\Impressum.png"
      ></Grid2>
      <Container sx={{ mb: 4 }}>
        <Box mt={10} mb={5}>
          <Typography variant="h3" fontWeight={"bold"}>
            Impressum
          </Typography>
          <Typography variant="subtitle1" color={theme.palette.grey[700]}>
            Land Baden-Württemberg – Vertreten durch Beruflichen Schulen Bretten
            <br />
            Wilhelmstr. 22
            <br /> 75015 Bretten
            <br />
            <br /> <b>Vertreten durch:</b>
            <br /> Schulleiterin: OStD’in Nicole Roeder
            <br />
            Stellvertretender Schulleiter: StD Klaus-Martin Foos
            <br />
            <br />
          </Typography>
          <Typography variant="h4" fontWeight={"bold"}>
            Kontakt
          </Typography>
          <Typography variant="subtitle1" color={theme.palette.grey[700]}>
            Telefon: 0721/936-61600
            <br /> Telefax: 0721/936-61789
            <br /> E-Mail: sekretariat@bsb-bretten.de
            <br />
          </Typography>
          <Typography variant="h4" fontWeight={"bold"}>
            Redaktionell verantwortlich
          </Typography>
          <Typography variant="subtitle1" color={theme.palette.grey[700]}>
            Bernd Gottselig
            <br /> Wilhelmstr.22
            <br /> 75015 Bretten
            <br /> E-Mail: bernd.gottselig@bsb-bretten.de
            <br />
            <br /> Tim Hossmann
            <br /> Wilhelmstr.22
            <br /> 75015 Bretten
            <br />
            <br /> Pressereferent
            <br /> Bernd Neuschl
            <br /> Wilhelmstr.22
            <br /> 75015 Bretten
            <br /> E-Mail: bernd.neuschl@bsb-bretten.de
            <br />
            <br /> Alle weiteren, als Autoren in Presseartikeln genannten
            Personen, erreichen Sie über die oben angegebene Postadresse mit dem
            Zusatz „zu Händen von …“ oder über E-Mail:
            sekretariat@bsb-bretten.de mit der Bitte um Weiterleitung an die
            betreffende Person.
            <br />
            <br />
          </Typography>
          <Typography variant="h4" fontWeight={"bold"}>
            Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
            <br />
            <br />
          </Typography>
          <Typography variant="subtitle1" color={theme.palette.grey[700]}>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </Typography>
        </Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2615.709942134858!2d8.700804976854206!3d49.035123488252516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47977580f9fbad67%3A0x50be0ea39fcbef52!2sBerufliche%20Schulen%20Bretten!5e0!3m2!1sde!2sde!4v1731872302472!5m2!1sde!2sde"
          width="100% "
          height="400"
          loading="lazy"
        ></iframe>
      </Container>
    </>
  );
};

export default Imprint;
