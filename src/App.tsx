import "./App.css";
import Homepage from "./homepage/Homepage";
import Navbar from "./homepage/Navbar";
import Footer from "./homepage/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
        {/* <SideDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
