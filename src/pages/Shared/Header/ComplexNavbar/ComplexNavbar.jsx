import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import NavList from "../NavList/NavList";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import logo from "../../../../assets/puzzle.png";

const ComplexNavbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar className="bg-[#999cb5] mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
        <div className="relative mx-auto flex items-center text-blue-gray-900">
          <img className="w-8" src={logo} alt="" />
          <Typography
            as="a"
            href="#"
            className="text-xl mr-4 ml-2 cursor-pointer py-1.5 font-medium text-white"
          >
            Amader School
          </Typography>
          <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
            <NavList />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
          <ProfileMenu />
        </div>
        <Collapse open={isNavOpen} className="overflow-scroll">
          <NavList />
        </Collapse>
      </Navbar>
    </>
  );
};

export default ComplexNavbar;
