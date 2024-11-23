import {
  Box,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import theme from "../styles";

const News = () => {
  const news = [
    {
      headline:
        "Projekttag gegen Cybermobbing an den Beruflichen Schulen Bretten",
      date: "7. November 2024",
      description:
        "  Eine hämische Beleidigung im Klassen-Chat oder heftige Hasskommentare auf Instagram oder WhatsApp: Cybermobbing entwickelt sich zu einem bedeutenden Problem. Das Verfolgen, Belästigen oder Bedrohen einer Person über digitale Kommunikationsmittel […]",
      image: "src/assets/cybermobing.jpeg",
    },
    {
      headline: "Jahrgangsstufe 2 auf Abschlussfahrt in der Hansestadt",
      date: "7. November 2024",
      description:
        "  Hamburg – das Tor zur Welt. Nicht nur bei Touristen, auch bei Jugendlichen steht die Elb-Metropole in Sachen Reiseziel ganz oben auf der Liste. So machten sich Schülerinnen und […]",
      image: "src/assets/jahrgangsstufe.jpg",
    },
    {
      headline: "Brasilianische Kultur und Natur vor Ort erkundet",
      date: "7. November 2024",
      description:
        "Brasilien-Austausch: Vom weißen Strand über Wasserfälle zum Oktoberfest Vom 18. bis zum 30. Oktober 2024 hatten zehn deutsche und zehn brasilianische Schüler die Gelegenheit, an einem kulturellen Austausch teilzunehmen. Die […]",
      image: "src/assets/brasilien.jpg",
    },
    {
      headline: "Schülerpraktikum in Dublin: Ein unvergessliches Erlebnis",
      date: "7. November 2024",
      description:
        "We love Dublin Vom 29. September bis zum 18. Oktober 2024 durften 17 Schülerinnen und Schüler der FTM1, der kaufmännischen Berufsschule und des Berufskollegs Fremdsprachen ein spannendes dreiwöchiges Praktikum in […]",
      image: "src/assets/dublin.jpeg",
    },
    {
      headline: "Solarenergie und Umweltschutz à la française",
      date: "7. November 2024",
      description:
        "Jahrgangsstufe 1 reist mit TGV nach Montebeliard Im Oktober waren 15 Schüler der 12. Klasse gemeinsam mit Frau Traxel und Frau Stier in Montbéliard, Frankreich für ein Umweltprojekt. Vom Karlsruher […]",
      image: "src/assets/solarenergie.jpeg",
    },
  ];
  return (
    <>
      <Box
        width={"100%"}
        display="flex"
        justifyContent="center"
        sx={{ mt: 4, mb: 2 }}
      >
        <Grid2 container width={"80%"} justifyContent={"left"}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: theme.palette.custom?.brettenBackground,
            }}
          >
            Aktuelles
          </Typography>
        </Grid2>
      </Box>
      <Box width={"100%"} display="flex" justifyContent="center">
        <Grid2 container width={"80%"} justifyContent={"center"}>
          <List>
            {news.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2, // Add spacing between list items
                    boxShadow: 1, // Optional: add a subtle shadow for visual separation
                    borderRadius: 2,
                    padding: 2,
                  }}
                >
                  <ListItemIcon sx={{ width: "fit-content", mr: 2 }}>
                    <img
                      src={item.image}
                      height={200}
                      width={300}
                      style={{ borderRadius: 15 }}
                    />
                  </ListItemIcon>
                  <Stack direction={"column"}>
                    <ListItemText
                      primary={
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            color: theme.palette.custom?.brettenBackground,
                          }}
                        >
                          {item.date}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="h6" color="textSecondary">
                          {item.headline}
                        </Typography>
                      }
                    ></ListItemText>
                    <Typography>{item.description}</Typography>
                  </Stack>
                </ListItem>
              );
            })}
          </List>
        </Grid2>
      </Box>
    </>
  );
};

export default News;
