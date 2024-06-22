import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

import { FC } from "react";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Message from "./scenes/message";
import Patient from "./scenes/patient";
import Context from "./solana/Context";

require("./App.css");
require("@solana/wallet-adapter-react-ui/styles.css");

function getWallet() {}
const App: FC = () => {
  const [theme, colorMode] = useMode();

  return (
    <Context>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <div className="app">
              <Sidebar>
                <main className="content">
                <Topbar />
                  <Routes>
                    <Route path="/" element={<Dashboard />}></Route>
                    <Route path="/patient" element={<Patient />}></Route>
                    <Route path="/message" element={<Message />}></Route>
                  </Routes>
                </main>
              </Sidebar>
            </div>
          </CssBaseline>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Context>
  );
};

export default App;
