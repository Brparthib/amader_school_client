import React from "react";
import { Typography, MenuItem } from "@material-tailwind/react";
import {
  QueueListIcon,
  QuestionMarkCircleIcon,
  MoonIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

// nav list component
const navListItems = [
  {
    label: "Courses",
    icon: QueueListIcon,
  },
  {
    label: "Blog",
    icon: PencilSquareIcon,
  },
  {
    label: "FAQ",
    icon: QuestionMarkCircleIcon,
  },
  {
    label: "Dark",
    icon: MoonIcon,
  },
];

const NavList = () => {
  return (
    <>
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {navListItems.map(({ label, icon }, key) => (
          <Typography
            key={label}
            as="a"
            href="#"
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              {label}
            </MenuItem>
          </Typography>
        ))}
      </ul>
    </>
  );
};

export default NavList;
