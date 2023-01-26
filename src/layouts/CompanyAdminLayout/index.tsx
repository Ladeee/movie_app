// ------------- import external dependencies ------------
import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// ------------ import internal dependencies -------------
import Seo from "../../shared/Seo";
import ContentHeader from "./components/ContentHeader";
import SideNav from "./components/SideNav";
import { sizes } from "../../utils/screenSizes";

function AdminLayout() {
  return (
    <>
      <Seo content="Skip to navigation" section="navigation" allowSkip>
        <main className="bg-white-100 h-[100vh]">
          {/* ------ admin sidebar wrapper -------- */}
          <SideNav />

          {/* ------- main content section --------- */}
          <MainContent>
            <ContentHeader />
            <Outlet />
          </MainContent>
        </main>
      </Seo>
    </>
  );
}

export default AdminLayout;

const MainContent = styled.section`
  margin-left: 280px;
  padding: 1.5rem 2rem;

  @media screen and (max-width: ${sizes.tablet}) {
    margin-left: 0;
  }
`;
