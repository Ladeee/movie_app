// ------------- import external dependencies ------------
import React from "react";

// ------------ import internal dependencies -------------
import Seo from "../../shared/Seo";
import SideNav from "./components/SideNav";

function AdminLayout() {
  return (
    <>
      <Seo content="Skip to navigation" section="navigation" allowSkip>
        <main className=" bg-white-100">
          <SideNav />
        </main>
      </Seo>
    </>
  );
}

export default AdminLayout;
