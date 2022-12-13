import React from "react";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";
import Image from "next/image";

const Header = () => {
  return (
    <div className="header flex justify-center z-30 w-screen fixed bg-white">
      <div className="header__logo absolute top-0 left-0">
        <Image src="/logo.jpg" alt="YCC Logo" width="130" height="80" />
      </div>
      <div className="nav-bar lg:relative left-20 static flex items-center">
        <NavigationDesktop />
        <NavigationMobile />
      </div>
    </div>
  );
};

export default Header;
