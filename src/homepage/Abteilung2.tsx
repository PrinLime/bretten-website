import { Grid2, Typography } from "@mui/material";
import AbteilungComponent from "./AbteilungComponent";

const Abteilung2 = () => {
  return (
    <>
      <Grid2
        component={"img"}
        height={500}
        width={"100%"}
        src="src\assets\abt2.png"
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
        Kaufmännische Schule
      </Typography>
      <AbteilungComponent />
    </>
  );
};

export default Abteilung2;
