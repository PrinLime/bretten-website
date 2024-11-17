import "./App.css";
import Homepage from "./homepage/Homepage";
import Navbar from "./homepage/Navbar";
import Footer from "./homepage/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./homepage/News";
import SchoolMembers from "./homepage/School Members";
import Secretary from "./homepage/Secretary";
import Collegium from "./homepage/Collegium";
import Imprint from "./homepage/Imprint";

function App() {
  // const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aktuelles" element={<News />} />
            <Route path="/schulleitung" element={<SchoolMembers />} />
            <Route path="/sekretariat" element={<Secretary />} />
            <Route path="/kollegium" element={<Collegium />} />
            <Route path="/impressum" element={<Imprint />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* <SideDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
