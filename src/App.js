import "./App.css";
import Header from "./components/Header";
import Logo from "./components/Logo";
import { CssBaseline } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import OptionsTab from "./components/OptionsTab";
// OptionsTab
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box>
          <Header />
        </Box>
        <OptionsTab />
      </Box>
    </React.Fragment>
  );
}

export default App;
