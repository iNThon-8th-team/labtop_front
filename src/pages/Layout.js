import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "../lib/styles/theme";
import NavBar from "../components/NavBar";

function Layout() {
  return (
    <ThemeProvider theme={customTheme}>
      <NavBar />
      <Outlet />
    </ThemeProvider>
  );
}

export default Layout;
