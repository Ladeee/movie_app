// ------------- import external dependencies ------------
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

// ------------ import internal dependencies -------------
import Seo from "../../shared/Seo";
import ContentHeader from "./components/ContentHeader";
import SideNav from "./components/SideNav";
import { sizes } from "../../utils/screenSizes";

function AdminLayout() {
  // ------ component state managers ------
  const [open, setOpen] = useState(false);
  const [screenSize, setScreenSize] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize && screenSize <= 1024) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [screenSize]);
  return (
    <>
      <Seo content="Skip to navigation" section="navigation" allowSkip>
        <main className="bg-white-100 h-[100vh] overflow-y-auto">
          {/* ------ admin sidebar wrapper -------- */}
          {open && <SideNav close={() => setOpen(false)} />}

          {/* ------- main content section --------- */}
          <MainContent>
            <ContentHeader click={() => setOpen(true)} />
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

  @media screen and (max-width: ${sizes.tabletL}) {
    margin-left: 0;
  }
`;
