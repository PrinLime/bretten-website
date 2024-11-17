import {
  AppBar,
  Box,
  Button,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
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
  { page: "Anmeldung +", underpages: [{ page: "Beratung", link: "/" }] },
  {
    page: "Service +",
    underpages: [{ page: "Impressum", link: "/impressum" }],
  }, //Auslandaktivitäten an den BSB, Speiseplan, Kontakt, Aufbaukurs Gruppenleitung, KVV-Ticket
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
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Track the anchor element

  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const navigation = useNavigate();

  const handleToggle = (index: number | null) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "sticky", // Stick the AppBar to the top
          top: 0, // Ensure it's at the very top of the page
          backgroundColor: theme.palette.primary.main, // Set your background color
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
              <Grid2 ml={2}>
                <Typography variant="h3">
                  <b>Berufl. Schulen Bretten</b>
                </Typography>
              </Grid2>
            </Stack>
            <Box
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
                                color={theme.palette.grey[300]}
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
