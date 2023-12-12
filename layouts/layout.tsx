// styled
import styled from "styled-components";
// components
import TabBar from "@/components/tab-bar/tab-bar";
//
import { paths } from "@/routes/paths";
//
import Header from "./header";

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

interface Props {
  children: React.ReactNode;
}

const TabBarItems = [
  { name: "Spectrum Status", pathName: paths.dashboard.root },
  { name: "Spectrum WebSocket", pathName: paths.dashboard.spectrum_ws },
];
const DashboardLayout = ({ children }: Props) => {


  return (
    <>
      <Header />
      <StyledMain>
        <TabBar items={TabBarItems} />
        {children}
      </StyledMain>
    </>
  );
};

export default DashboardLayout;

const StyledMain = styled.main``;
