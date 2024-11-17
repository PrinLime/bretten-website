import { Grid2, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { expertieses } from "./Resources";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CalculateIcon from "@mui/icons-material/Calculate";
import SchoolIcon from "@mui/icons-material/School";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BookIcon from "@mui/icons-material/Book";
import theme from "../styles";

const AbteilungComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid2
        container
        mt={2}
        mb={2}
        spacing={{ xs: 2, md: 3 }}
        columns={3} // Set the total columns to 3 for a 2-row, 3-column layout
        sx={{
          flexWrap: "nowrap", // Prevents wrapping
          width: "100%", // Full width of the container
          justifyContent: "center", // Centers content if needed
        }}
      >
        {expertieses.map((item, index) => (
          <Grid2
            key={index}
            size={{ xs: 4, sm: 4, md: 4 }}
            sx={{
              width: "calc(100% / 3)", // Each item takes 1/3 of the container width
              maxWidth: "33.33%", // Limit max width to 1/3 of the container for fixed layout
            }}
          >
            <Grid2
              height={250}
              width={"100%"}
              component={"button"}
              borderRadius={5}
              onClick={() => {
                navigate(item.link);
              }}
              sx={{
                justifySelf: "center",
                alignSelf: "center",
                backgroundColor: theme.palette.secondary.main,
                display: "flex",
                alignItems: "flex-end", // Aligns items to the bottom
                justifyContent: "center", // Centers items horizontally
                paddingBottom: "10px", // Adds some padding from the bottom
                textAlign: "center",
                border: 0,
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  // backgroundColor: darken(theme.palette.grey[100], 0.5),
                  transform: "scale(1.05)",
                },
              }}
            >
              <Stack
                height={"100%"}
                direction={"column-reverse"}
                alignItems="center"
                justifyContent="center"
              >
                <Grid2
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {index === 0 && (
                    <ApartmentIcon sx={{ fontSize: 72, color: "whitesmoke" }} />
                  )}
                  {index === 1 && (
                    <CalculateIcon sx={{ fontSize: 72, color: "whitesmoke" }} />
                  )}
                  {index === 2 && (
                    <SchoolIcon sx={{ fontSize: 72, color: "whitesmoke" }} />
                  )}
                  {index === 3 && (
                    <RiceBowlIcon sx={{ fontSize: 72, color: "whitesmoke" }} />
                  )}
                  {index === 4 && (
                    <EngineeringIcon
                      sx={{ fontSize: 72, color: "whitesmoke" }}
                    />
                  )}
                  {index === 5 && (
                    <BookIcon sx={{ fontSize: 72, color: "whitesmoke  " }} />
                  )}
                </Grid2>
                <Typography variant="h5" color="whitesmoke">
                  {item.name}
                </Typography>
              </Stack>
            </Grid2>
          </Grid2>
        ))}
      </Grid2>
    </>
  );
};

export default AbteilungComponent;
