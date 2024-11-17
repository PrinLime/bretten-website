import {
  Avatar,
  Box,
  Container,
  Divider,
  Fab,
  Grid2,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import InstagramEmbed, { members } from "./Resources";
import { useEffect, useState } from "react";
import AbteilungComponent from "./AbteilungComponent";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const news = [
  {
    url: "https://bsb-bretten.de/2024/10/11/https-bsb-bretten-de-wp-content-uploads-2024-10-jungerukrainerfsj-jpeg/",
    image:
      "https://bsb-bretten.de/wp-content/uploads/2024/10/JungerUkrainerFSJ-300x225.jpeg",
    title: "Junger Ukrainer möchte Fachinformatiker werden",
  },
  {
    url: "https://bsb-bretten.de/2024/07/28/verabschiedung-von-markus-bader-an-den-bsb/",
    image:
      "https://bsb-bretten.de/wp-content/uploads/2024/07/240726_Verabschiedung-Bader-300x195.jpeg",
    title: "Verabschiedung von Markus Bader an den BSB",
  },
  {
    url: "https://bsb-bretten.de/2024/07/16/7904/",
    image:
      "https://bsb-bretten.de/wp-content/uploads/2024/07/240716_Abschlussfeier_02-300x170.jpeg",
    title: "Entlassungsfeier der BSB erstmals im Hallenzentrum „Grüner“",
  },
  {
    url: "https://bsb-bretten.de/2024/07/15/chemiekurs-setzt-theoriet-in-praxis-um/",
    image:
      "https://bsb-bretten.de/wp-content/uploads/2024/07/240715_ChemieBach_01-300x169.jpg",
    title: "Chemiekurs setzt Theorie in Praxis um",
  },
  {
    url: "https://bsb-bretten.de/2024/07/12/melanchthon-schuelerpreis-mit-750-euro-fuer-laura-katz-sgg/",
    image:
      "https://bsb-bretten.de/wp-content/uploads/2024/07/240711_Melanchthonpreis-225x300.jpg",
    title: "Melanchthon-Schülerpreis mit 750 Euro für Laura Katz (SGG)",
  },
];

export default function Homepage() {
  const theme = useTheme();

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300); // Show after scrolling down 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: 600,
          width: "100%",
          aspectRatio: "19 / 9", // Keeps the container's aspect ratio
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity to control darkness
            zIndex: 1,
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
          WILLKOMMEN AN DEN BERUFLICHEN SCHULEN BRETTEN
        </Typography>
        <Box
          component="img"
          src="assets/homepage_background.png"
          alt="Background Image"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      </Box>
      <AbteilungComponent />
      <Grid2
        container
        padding={2}
        sx={{
          display: "flex",
        }}
      >
        <Grid2
          size={{ xs: 6, md: 8 }}
          sx={{ paddingLeft: 12, paddingRight: 12 }}
        >
          <Paper sx={{ height: "fit-content", zIndex: 9999, padding: 2 }}>
            <Box>
              <Typography
                variant="h4"
                sx={{ color: "darkblue", textAlign: "center" }}
              >
                <i>
                  <b>Liebe Schülerinnen und Schüler</b>
                </i>
              </Typography>
              <Typography variant="subtitle1" fontSize="large">
                <br />
                Die ersten sieben Wochen des Schuljahres liegen hinter uns und
                die Zeit ist – wie immer – wie im Fluge vergangen. Erste Tests
                und Klausuren sind geschrieben worden und nach den Herbstferien
                fällt mit den ersten Abschlussprüfungen der Gewerblichen und
                Kaufmännischen Abteilungen der Startschuss für unseren
                alljährlichen Prüfungsmarathon.
                <br />
                <br /> Das gesamte Schulleitungsteam und alle Lehrerinnen und
                Lehrer wünschen euch schöne Herbstferien bei hoffentlich gutem
                Wetter. Genießt die freien Tage und erholt euch gut.
                <br />
                <br /> Wir freuen uns, wenn wir uns nach den Herbstferien wieder
                sehen.
                <br />
                <br /> Nicole Roeder, Schulleiterin
                <br />
                <br />
                <br /> Die Westerwaldschule Driedorf ist eine integrierte
                Gesamtschule mit Grundstufe und hat für alle Kinder und
                Jugendliche der Großgemeinde Driedorf und ihren Einzugsbereich
                folgendes zu bieten: <br />
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>
                        alle Bildungsgänge im gegliederten Schulsystem vom 1.
                        bis zum 10. Schuljahr (Grundschule, Haupt-, Realschule
                        und Gymnasium)
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>
                        Schwerpunktklassen (iPad-, Kreativ-, Natur-Klasse) ab
                        dem 5.Schuljahr
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>
                        eine leistungsbezogene Differenzierung in A-, B-,
                        C-Kurse in den Fächern Mathematik und Englisch ab dem 6.
                        Schuljahr
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>
                        eine leistungsbezogene Differenzierung in A-, B-,
                        C-Kurse im Fach Deutsch ab dem 7. Schuljahr
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>
                        die Fremdsprachen Englisch, Französisch und Latein
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>
                        ein vielfältiges Angebot an Wahlpflichtkursen und
                        Arbeitsgemscheinschaften
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>
                        abschlussbezogene Klassen, die das Ziel eines
                        Hauptschulabschlusses, Realschulabschlusses oder der
                        gymnasialen Eignung haben
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>
                        Pakt für den Nachmittag in der Grundschule
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>
                        individuelle Förderung durch innere und äußere
                        Differenzierung
                      </Typography>
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon sx={{ color: "black", fontSize: 12 }} />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography>einen wohnortnahen Schulstandort</Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Typography>
            </Box>
          </Paper>
          <Paper
            sx={{ height: "fit-content", zIndex: 9999, padding: 2, mt: 4 }}
          >
            <Box>
              <Typography variant="h4" sx={{ color: "darkblue", ml: 4 }}>
                <b>Videos</b>
              </Typography>
              <Stack
                useFlexGap
                direction={
                  useMediaQuery(theme.breakpoints.up("lg")) ? "row" : "column"
                }
                padding={1}
                spacing={{ sm: 2, md: 6 }}
                sx={{
                  display: "flex",
                  alignItems: useMediaQuery(theme.breakpoints.up("lg"))
                    ? "flex-end"
                    : "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Grid2 mr={2} justifyItems={"center"}>
                  <video height={200} width={300} controls>
                    <source
                      src="https://bsb-bretten.de/wp-content/uploads/2021/10/210122_Imagefilm_BSB.mp4"
                      type="video/mp4"
                    ></source>
                  </video>
                  <Typography variant="subtitle1">Imagefilm</Typography>
                </Grid2>
                <Grid2 mr={2} justifyItems={"center"}>
                  <Link href="https://www.unserebroschuere.de/video/20AA30190">
                    <img
                      src="https://bsb-bretten.de/wp-content/uploads/2023/02/thumbnail.jpg"
                      height={185}
                      width={300}
                    ></img>
                  </Link>
                  <Typography variant="subtitle1">
                    Wir bilden Zukunft
                  </Typography>
                </Grid2>
                <Grid2 mr={2} justifyItems={"center"}>
                  <video height={200} width={300} controls>
                    <source
                      src="https://bsb-bretten.de/wp-content/uploads/2021/10/210202_BSB_Schulhausrundgang.mp4"
                      type="video/mp4"
                    ></source>
                  </video>
                  <Typography variant="subtitle1">
                    Tour durchs Schulhaus
                  </Typography>
                </Grid2>
              </Stack>
            </Box>
          </Paper>
          <Paper
            sx={{
              height: "fit-content",
              zIndex: 9999,
              padding: 2,
              mt: 4,
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
                        <Typography
                          variant="h5"
                          color={theme.palette.common.white}
                        >
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
        </Grid2>
        <Grid2
          size={{ xs: 6, md: 4 }}
          sx={{
            justifyItems: "center",
          }}
        >
          <Box
            width={"70%"}
            alignItems="center"
            justifyContent="center"
            mb={2}
            sx={{
              transition: "transform 0.3s ease, background-color 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Link
              href="https://www.unserebroschuere.de/BSB/WebView/"
              underline="none"
            >
              <Grid2
                width={"100%"}
                height={"100%"}
                component={"img"}
                borderRadius={4}
                boxShadow={8}
                src="assets\Infobroschuere_bretten.jpg"
              />
            </Link>
          </Box>
          <Box
            width={"70%"}
            alignItems="center"
            justifyContent="center"
            mt={2.5}
          >
            <Grid2 sx={{ textAlign: "center" }}>
              <Typography variant="h5">
                <b>Infobroschüre</b>
              </Typography>
            </Grid2>
          </Box>
          <Box width={"90%"}>
            <Grid2
              height={"100%"}
              sx={{
                mt: 6,
                mb: 4,
                justifyItems: "center",
              }}
            >
              <Typography
                variant="h4"
                color={theme.palette.custom?.brettenBackground}
              >
                Neuigkeiten
              </Typography>
            </Grid2>
          </Box>
          <Box width={"90%"} boxShadow={8} borderRadius={2}>
            <Paper sx={{ p: 2, mb: 4, zIndex: 999, borderRadius: 2 }}>
              <Grid2
                height={"100%"}
                sx={{
                  mt: 4,
                  justifyItems: "center",
                }}
              >
                <ImageList
                  cols={1}
                  sx={{
                    width: "100%",
                    height: 600,
                    transform: "translateZ(0)",
                  }}
                >
                  {news.map((item) => {
                    return (
                      <>
                        <Link href={item.url}>
                          <ImageListItem>
                            <img src={item.image}></img>
                            <ImageListItemBar
                              title={item.title}
                            ></ImageListItemBar>
                          </ImageListItem>
                        </Link>
                      </>
                    );
                  })}
                </ImageList>
              </Grid2>
            </Paper>
          </Box>
          <Box width={"90%"}>
            <Grid2
              height={"100%"}
              sx={{
                mt: 6,
                mb: 4,
                justifyItems: "center",
              }}
            >
              <Typography
                variant="h4"
                color={theme.palette.custom?.brettenBackground}
              >
                Soziale Medien
              </Typography>
            </Grid2>
          </Box>
          <Box width={"90%"} boxShadow={8}>
            <Paper sx={{ p: 2, zIndex: 999 }}>
              <Grid2
                height={"100%"}
                sx={{
                  mt: 4,
                  justifyItems: "center",
                }}
              >
                <ImageList
                  cols={1}
                  sx={{
                    width: "100%",
                    height: 600,
                    transform: "translateZ(0)",
                  }}
                >
                  <ImageListItem>
                    <InstagramEmbed />
                  </ImageListItem>
                  <ImageListItem>
                    <InstagramEmbed />
                  </ImageListItem>
                  <ImageListItem>
                    <InstagramEmbed />
                  </ImageListItem>
                  <ImageListItem>
                    <InstagramEmbed />
                  </ImageListItem>
                  <ImageListItem>
                    <InstagramEmbed />
                  </ImageListItem>
                </ImageList>
              </Grid2>
            </Paper>
          </Box>
          <Box
            width={"70%"}
            alignItems="center"
            justifyContent="center"
            padding={1}
            mt={4}
          >
            <Link
              href="https://bsb-bretten.de/wp-content/uploads/2024/11/Infotag_2025.png"
              underline="none"
            >
              <Grid2
                width={"100%"}
                height={"100%"}
                component={"img"}
                borderRadius={4}
                boxShadow={8}
                src="assets\Infotag.png"
                sx={{
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Link>
          </Box>
        </Grid2>
      </Grid2>
      {show && (
        <Fab
          variant="circular"
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}
        >
          <ArrowUpwardIcon />
        </Fab>
      )}
    </>
  );
}
