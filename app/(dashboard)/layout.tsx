"use client"

// css
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
// layout
import DashboardLayout from "@/layouts/layout";
// redux
import ReduxProvider from "@/redux/redux-provider";
// styled components
import { ThemeProvider } from "styled-components";
import StyledComponentsRegistry from "../registry";



const theme = {
  colors: {
    header: "white",
    body: "#020617",
    footer: "",
  },
  mobile: "768px",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
    <StyledComponentsRegistry> 
      <ReduxProvider>
        <ThemeProvider theme={theme}>
              <DashboardLayout>{children}</DashboardLayout>
        </ThemeProvider>
      </ReduxProvider>
      </StyledComponentsRegistry>
    </>
  );
}
