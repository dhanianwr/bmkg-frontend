import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const SidebarDropdown = ({ route }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <li
        className="flex items-center capitalize "
        onClick={() => setSubMenuOpen(!subMenuOpen)}
      >
        <Button
          variant={subMenuOpen ? "gradient" : "text"}
          color={subMenuOpen ? "light-blue" : "white"}
          className="flex items-center gap-4 px-4 capitalize"
          fullWidth
        >
          {route.icon}
          <Typography
            color="inherit"
            className="w-32 flex-initial font-medium capitalize"
          >
            {route.name}
          </Typography>
          <ChevronDownIcon
            className={`inset-y-0 right-0 mx-auto h-5 w-5 transition-transform  ${
              subMenuOpen && "rotate-180"
            } duration-200 `}
          />
        </Button>
      </li>
      <motion.ul
        animate={
          subMenuOpen
            ? {
                height: "fit-content",
              }
            : {
                height: 0,
              }
        }
        className="flex h-0 flex-col overflow-hidden text-[0.8rem] font-normal "
      >
        {route.pages?.map((page, i) => (
          <li key={i} className="my-0.5">
            <NavLink to={page.path} className="link !bg-transparent capitalize">
              {({ isActive }) => (
                <Button
                  key={i}
                  variant={isActive ? "gradient" : "text"}
                  color={isActive ? "light-blue" : "white"}
                  className="flex items-center gap-4 pl-2 capitalize"
                  fullWidth
                >
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  <Typography
                    color="inherit"
                    className="font-medium capitalize"
                  >
                    {page.name}
                  </Typography>
                </Button>
              )}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </>
  );
};

export default SidebarDropdown;
