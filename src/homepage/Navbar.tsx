import {
  AppBar,
  Box,
  Button,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../styles";

const pages = [
  { page: "Willkommen" }, //main site
  { page: "Neuigkeiten +", underpages: ["Aktuelles"] }, //Aktuelles, insta, facebook, etc.
  { page: "Schulgemeinde +", underpages: ["Beratung"] }, //Beratung, Berufsorientierung, Speiseplan,
  { page: "BSB-Intern +" },
  { page: "Anmeldung +" },
  { page: "Service +", underpages: ["Kontakt"] }, //Auslandaktivitäten an den BSB, Speiseplan, Kontakt, Aufbaukurs Gruppenleitung, KVV-Ticket
];
const imageMediaPaths = [
  "src/assets/facebook_white.png",
  "src/assets/insta_white.png",
  "src/assets/moodle_white.png",
  "src/assets/untis_white.png",
];

// interface NavbarProps {
//   setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Navbar = () => {
  const [_, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [openDrawer, setOpenDrawer] = useState(false);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number | null) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          display: "flex",
          position: "absolute",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Toolbar disableGutters>
          <Stack direction="column" width="100%" alignItems={"center"}>
            <Stack direction={"row"} width={"fit-content"} alignItems="center">
              <IconButton edge="start">
                <img
                  src="src\assets\bretten_logo.png"
                  height={125}
                  width={125}
                />
              </IconButton>
              <Grid2 direction={"column"} ml={2}>
                <Typography variant="h3">
                  <b>Berufl. Schulen Bretten</b>
                </Typography>
              </Grid2>
            </Stack>
            <Box
              border={2}
              width={"fit-content"}
              justifyContent="center"
              alignItems="center"
              sx={{
                flexGrow: 1,
                display: "flex",
                flexWrap: "wrap", // Allow wrapping on small screens
              }}
            >
              {useMediaQuery(theme.breakpoints.up("lg")) ? (
                pages.map((page, index) => (
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "black",
                      display: "block",
                      ml: 2,
                      fontSize: 15,
                    }}
                  >
                    <Typography color={theme.palette.text.primary} variant="h6">
                      {page.page}
                    </Typography>
                  </Button>
                ))
              ) : (
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => {
                    setOpenDrawer(!openDrawer);
                  }}
                >
                  <MenuIcon
                    sx={{ fontSize: 40, color: theme.palette.common.white }}
                  />
                </IconButton>
              )}
              <Stack
                direction={"row"}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  justifyContent="center"
                  alignItems="center"
                  sx={{ ml: "auto" }}
                >
                  <IconButton>
                    <SearchIcon
                      sx={{ fontSize: 40, color: theme.palette.common.white }}
                    />
                  </IconButton>
                </Box>
                {imageMediaPaths.map((image, index) => (
                  <IconButton
                    key={image}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <a
                      href={
                        index == 0
                          ? "https://www.facebook.com/bsbbretten"
                          : index == 1
                          ? "https://www.instagram.com/bsb_bretten/"
                          : index == 2
                          ? "https://bw.schule/login"
                          : index == 3
                          ? "https://webuntis.com/#/basic/login"
                          : ""
                      }
                    >
                      <img
                        src={`${image}`}
                        height={50}
                        width={50}
                        alt={
                          index == 0
                            ? "Facebook"
                            : index == 1
                            ? "Instagram"
                            : index == 2
                            ? "Moodle"
                            : index == 3
                            ? "Untis"
                            : ""
                        }
                      />
                    </a>
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Toolbar>
        {openDrawer && (
          <List>
            {pages.map((page, index) => (
              <ListItem
                component="button"
                key={index}
                onClick={() => handleToggle(index)}
              >
                <ListItemText primary={page.page} />
                {index === openIndex ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            ))}
          </List>
        )}
      </AppBar>
    </>
  );
};

export default Navbar;
