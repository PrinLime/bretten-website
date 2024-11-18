import {
  AppBar,
  Box,
  Button,
  Grid2,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import theme from "../styles";
import { useNavigate } from "react-router";

const pages = [
  { page: "Willkommen", link: "/" }, //main site
  { page: "Aktuelles", link: "/aktuelles" }, //Aktuelles, insta, facebook, etc.
  {
    page: "Schulgemeinde +",
    underpages: [
      { page: "Schulleitung", link: "/schulleitung" },
      { page: "Sekreteriat", link: "/sekretariat" },
      { page: "Kollegium", link: "/kollegium" },
    ],
  }, //Beratung, Berufsorientierung, Speiseplan,
  {
    page: "BSB-Intern +",
    underpages: [
      {
        page: "Webuntis",
        link: "https://borys.webuntis.com/WebUntis/index.do;jsessionid=E4047A9BB7C2553AD07859B48C4A8D22#/basic/login",
      },
      {
        page: "PaedML",
        link: "https://intranet.bsb-bretten.de/nextcloud/login",
      },
      { page: "Schülermoodle", link: "https://bw.schule/login" },
    ],
  },
  {
    page: "Anmeldung +",
    underpages: [
      {
        page: "Berufsschulen",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_Berufsschule_2025-26.pdf",
      },
      {
        page: "Einjährige Berufsschule - Metall",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_AVDual_1BFMF_2025-26.pdf",
      },
      {
        page: "Fachschule für Technik",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_FTM_2025-26.pdf",
      },
      {
        page: "AVDual",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_AVDual_1BFMF_2025-26.pdf",
      },
      {
        page: "VABO",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_VABO_2025-26.pdf",
      },
      {
        page: "Berufsfachschulen zur Aus- und Weiterbildung",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_BFS_berufliche_Weiterb._2025-26.pdf",
      },
      {
        page: "Aufbaukurs Gruppenleitung",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/02/Anmeldeformular_Aufbaukurs_Gruppenleitung_2024.pdf",
      },
      {
        page: "BKFH",
        link: "https://bsb-bretten.de/wp-content/uploads/2024/11/Aufnahmeantrag_BKFH_2025-26.pdf",
      },
    ],
  },
  {
    page: "Kontakt +",
    underpages: [
      { page: "Impressum", link: "/impressum" },
      { page: "Datenschutzerklärung", link: "/Datenschutzerklärung" },
    ],
  }, //Auslandaktivitäten an den BSB, Speiseplan, Kontakt, Aufbaukurs Gruppenleitung, KVV-Ticket
];
const imageMediaPaths = [
  "assets/facebook_white.png",
  "assets/insta_white.png",
  "assets/moodle_white.png",
  "assets/untis_white.png",
];

// interface NavbarProps {
//   setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Track the anchor element
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const [atTop, setAtTop] = useState(true);
  const navigation = useNavigate();

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  // Effect to monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY; // Updated to use scrollY
      setAtTop(currentScrollTop === 0); // Set atTop to true only when scrolled to the top
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "sticky",
          top: 0,
          backgroundColor: theme.palette.custom?.brettenBackground,
          height: atTop ? "5%" : "2%",
          transition: "height 0.3s ease-out",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: "auto", // Allows dynamic height adjustment
            px: 2, // Optional: padding for the toolbar
          }}
        >
          <Stack
            direction="column"
            minHeight={"auto"}
            width="100%"
            alignItems={"center"}
          >
            <Stack
              direction={"row"}
              width={"fit-content"}
              alignItems="center"
              sx={{
                maxHeight: atTop ? "200px" : "0px", // Adjust height based on scroll position
                overflow: "hidden", // Hide the content when collapsed
                opacity: atTop ? 1 : 0, // Fade out effect
                transition: "max-height 0.3s ease-out, opacity 0.3s ease-out",
              }}
            >
              <IconButton
                edge="start"
                onClick={() => {
                  navigation("/");
                }}
              >
                <img
                  src="assets\bretten_logo_white.png"
                  height={125}
                  width={125}
                />
              </IconButton>
              <Grid2 ml={2}>
                <Typography variant="h3" color={theme.palette.grey[300]}>
                  <b>Berufl. Schulen Bretten</b>
                </Typography>
              </Grid2>
            </Stack>
            <Box
              width={"fit-content"}
              alignItems="center"
              justifyContent={"center"}
              sx={{
                flexGrow: 1,
                display: "flex",
                flexWrap: "wrap", // Allow wrapping on small screens
              }}
            >
              {useMediaQuery(theme.breakpoints.up("lg")) ? (
                pages.map((page, index) => (
                  <div key={index}>
                    <Button
                      onClick={(e) => {
                        if (page.underpages) {
                          // Toggle submenu based on current state
                          setOpenSubMenuIndex(
                            openSubMenuIndex === index ? null : index
                          );
                          setAnchorEl(e.currentTarget); // Set the button as the anchor element for the menu
                        } else {
                          navigation(page.link); // Navigate if no underpages
                        }
                      }}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        ml: 2,
                        fontSize: 15,
                      }}
                    >
                      <Typography color={theme.palette.grey[300]} variant="h6">
                        {page.page}
                      </Typography>
                    </Button>

                    {page.underpages &&
                      openSubMenuIndex === index && ( // Only open the submenu for the selected page
                        <Menu
                          anchorEl={anchorEl} // Use the anchorEl state
                          open={Boolean(openSubMenuIndex === index)}
                          onClose={() => setOpenSubMenuIndex(null)} // Close when clicking outside
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                        >
                          {page.underpages.map((underpage, subIndex) => (
                            <MenuItem
                              key={subIndex}
                              onClick={() => {
                                setOpenSubMenuIndex(null); // Close the menu
                                if (underpage.link.startsWith("/")) {
                                  navigation(underpage.link);
                                } else {
                                  window.open(underpage.link, "_blank");
                                }
                              }}
                            >
                              <Typography
                                color={theme.palette.primary.main}
                                variant="body1"
                              >
                                {underpage.page}
                              </Typography>
                            </MenuItem>
                          ))}
                        </Menu>
                      )}
                  </div>
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
        <Grid2 sx={{
          backgroundColor: theme.palette.custom?.brettenBackground,
          height: atTop ? "0%" : "0%",
          transition: "max-height 0.3s ease-out, opacity 0.3s ease-out"}}>
        { useMediaQuery(theme.breakpoints.down("lg")) && openDrawer && (
          pages.map((page, index) => (
            <div key={index} style={{backgroundColor: theme.palette.custom?.brettenBackground}}>
              <Button
                onClick={(e) => {
                  if (page.underpages) {
                    // Toggle submenu based on current state
                    setOpenSubMenuIndex(
                      openSubMenuIndex === index ? null : index
                    );
                    setAnchorEl(e.currentTarget); // Set the button as the anchor element for the menu
                  } else {
                    navigation(page.link); // Navigate if no underpages
                  }
                }}
                sx={{
                  width: "100%",
                  my: 2,
                  color: "black",
                  display: "block",
                  ml: 2,
                  fontSize: 15,
                }}
              >
                <Typography color={theme.palette.grey[300]} variant="h6">
                  {page.page}
                </Typography>
              </Button>

              {page.underpages &&
                openSubMenuIndex === index && ( // Only open the submenu for the selected page
                <Menu
                anchorEl={anchorEl} // Use the anchorEl state
                open={Boolean(openSubMenuIndex === index)}
                onClose={() => setOpenSubMenuIndex(null)} // Close when clicking outside
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                >
                  <Paper 
                    sx={{width: "100vh", justifyContent: "center"}}>
                  <MenuList
                    dense
                  >
                    {page.underpages.map((underpage, subIndex) => (
                      <MenuItem
                        key={subIndex}
                        onClick={() => {
                          setOpenSubMenuIndex(null); // Close the menu
                          if (underpage.link.startsWith("/")) {
                            navigation(underpage.link);
                          } else {
                            window.open(underpage.link, "_blank");
                          }
                        }}
                    sx={{width: "100%", border: 2}}

                      >
                        <Typography
                          color={theme.palette.primary.main}
                          variant="body1"
                        >
                          {underpage.page}
                        </Typography>
                      </MenuItem>
                    ))}
                  </MenuList>
                  </Paper>
                  </Menu>
                )}
            </div>
          )))}</Grid2>
      </AppBar>
    </>
  );
};

export default Navbar;
