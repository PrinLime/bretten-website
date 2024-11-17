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
import Abteilung1 from "./homepage/Abteilung1";
import Abteilung2 from "./homepage/Abteilung2";
import Abteilung3 from "./homepage/Abteilung3";
import Abteilung4 from "./homepage/Abteilung4";
import Abteilung5 from "./homepage/Abteilung5";
import Abteilung6 from "./homepage/Abteilung6";

function App() {
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
            <Route path="/abteilung-1" element={<Abteilung1 />} />
            <Route path="/abteilung-2" element={<Abteilung2 />} />
            <Route path="/abteilung-3" element={<Abteilung3 />} />
            <Route path="/abteilung-4" element={<Abteilung4 />} />
            <Route path="/abteilung-5" element={<Abteilung5 />} />
            <Route path="/abteilung-6" element={<Abteilung6 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
