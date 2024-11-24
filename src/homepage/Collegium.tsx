import { Box, Container, Grid2, Typography } from "@mui/material";
import theme from "../styles";

const Collegium = () => {
  return (
    <>
      <Container
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", mt: 5, mb: 4 }}>
          <Typography
            variant="h3"
            fontWeight={"bold"}
            color={theme.palette.custom?.brettenBackground}
          >
            Kollegium
          </Typography>
          <Grid2
            height={600}
            width={1200}
            component={"img"}
            src="assets/Kollegium.jpeg"
            sx={{
              marginTop: 2,
              maxWidth: "100%",
              height: "auto",
              borderRadius: 2,
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default Collegium;
