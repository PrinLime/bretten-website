import { Container, Paper, Typography } from "@mui/material";
import theme from "../styles";

const Speiseplan = () => {
  return (
    <>
      <Container sx={{ mt: 5, mb: 5 }}>
        <Paper sx={{ p: 5 }}>
          <Typography variant="h3" fontWeight={"italic"} fontStyle={"italic"}>
            La Cantina
          </Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            MITTAGSTISCH SOLANGE DER VORRAT REICHT!
            <br />
            <br />
          </Typography>
          <Typography variant="body1">
            Der Mittagtisch beinhaltet einen kleinen Beilagensalat oder ein
            Gläschen mit Nachtisch.
            <br />
            <br />
            Fleischhaltiges Tagesessen <b>8,50</b> €<br />
            <br />
            Vegetarisches Tagesessen <b>7,50 €</b>
            <br />
            <br />
            Schülerteller <b>6,50 €</b>
            <br />
            <br />
            Der Mittagstisch kann aus organisatorischen Gründen frühestens ab
            11.30 Uhr angeboten werden.
            <br />
            <br />
            Bitte um Beachtung!
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default Speiseplan;
