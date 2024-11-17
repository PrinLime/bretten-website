import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid2,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { members } from "./Resources";
import theme from "../styles";

const SchoolMembers = () => {
  return (
    <>
      <Paper
        sx={{
          height: "fit-content",
          zIndex: 9999,
          padding: 2,
          backgroundColor: theme.palette.custom?.brettenBackground,
        }}
      >
        <Container sx={{ padding: 1 }}>
          <Grid2>
            <Stack
              divider={
                <Divider
                  orientation="horizontal"
                  color={theme.palette.common.white}
                  sx={{ width: 200 }}
                />
              }
              spacing={2}
            >
              <Typography variant="h2" color={theme.palette.common.white}>
                <b>Unser Team</b>
              </Typography>
              <Typography variant="h4" color={theme.palette.common.white}>
                Die BSB
              </Typography>
            </Stack>
          </Grid2>
          <Stack
            useFlexGap
            spacing={{ xs: 2, sm: 6 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              flexWrap: "wrap",
            }}
          >
            {members.map((member, index) => (
              <>
                <Grid2
                  key={index}
                  size={{
                    md: index < 2 ? 5 : 5,
                    lg: index < 2 ? 4 : 6,
                    xl: index < 2 ? 4 : 5,
                  }}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{ textAlign: "center" }}
                >
                  <Stack
                    direction="column"
                    divider={
                      <Divider
                        orientation="horizontal"
                        color={theme.palette.common.white}
                      ></Divider>
                    }
                    spacing={1}
                  >
                    <Link underline="none">
                      <Avatar
                        src={member.image}
                        sx={{
                          mb: 1,
                          width: 200,
                          height: 200,
                          transition:
                            "transform 0.3s ease, background-color 0.3s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      ></Avatar>
                    </Link>
                    <Typography variant="h5" color={theme.palette.common.white}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      whiteSpace={"nowrap"}
                      color={theme.palette.common.white}
                    >
                      {member.title}
                    </Typography>
                  </Stack>
                </Grid2>
              </>
            ))}
          </Stack>
        </Container>
      </Paper>

      <Container
        sx={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Center image and text vertically
            flexDirection: "column", // Stack text and image vertically
            mt: 2,
            mb: 2,
            padding: 2,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: theme.palette.custom?.brettenBackground,
              fontWeight: "bold",
              textAlign: "center", // Center the text horizontally
              mb: 2, // Add margin-bottom for spacing between title and image
            }}
          >
            Organigramm
          </Typography>
          <Box
            component="img"
            src="src/assets/Organigramm.png"
            alt="Organigramm" // Add alt text for accessibility
            sx={{
              maxWidth: "100%", // Make sure the image is responsive
              height: "auto", // Maintain the aspect ratio
              borderRadius: 2, // Optional: Add some border radius to image for styling
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default SchoolMembers;
