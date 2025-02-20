import React, { useState } from "react";
import TopNav from "./components/TopNav";
import Sidenav from "./components/Sidenav";

const GoogleTravelLayout = ({ children }) => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  const closeSidenav = () => {
    setIsSidenavOpen(false);
  };

  return (
    <div className={`flex h-screen bg-gray-900 text-white overflow-hidden`}>
      <Sidenav isOpen={isSidenavOpen} onClose={closeSidenav} />
      <div className="flex-1 flex flex-col">
        <TopNav onOpenSidenav={toggleSidenav} />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default GoogleTravelLayout;
