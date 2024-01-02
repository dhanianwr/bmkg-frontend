import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ClipboardDocumentListIcon,
  CloudIcon,
  EnvelopeOpenIcon,
  ExclamationTriangleIcon,
  NewspaperIcon,
  PhotoIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import {
  Avatar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "../../context";
import SidebarDropdown from "./sidenavDropdown";
import bgimg from "../../../assets/logo-bmkg-no-text.png";

const icon = {
  className: "w-7 h-7 text-inherit",
};

const routes = [
  {
    name: "Cuaca dan Iklim",
    icon: <CloudIcon {...icon} />,
    pages: [
      {
        name: "Cuaca Hari Ini",
        path: "/dashboard/cuaca-hariini",
      },
      {
        name: "Cuaca Besok",
        path: "/dashboard/cuaca-Besok",
      },
      {
        name: "Analisis Curah Hujan",
        path: "/dashboard/analisis-curah-hujan",
      },
      {
        name: "Analisis Sifat Hujan",
        path: "/dashboard/analisis-sifat-hujan",
      },
      {
        name: "Prakiraan Curah Hujan",
        path: "/dashboard/prakiraan-sifat-hujan",
      },
      {
        name: "Hari Tanpa Hujan",
        path: "/dashboard/hari-tanpa-hujan",
      },
      {
        name: "Normal Musim",
        path: "/dashboard/normal-musim",
      },
      // {
      //   name: "Objek Wisata",
      //   path: "/dashboard/imageCuaca",
      // },
      {
        name: "Tourism",
        path: "/dashboard/tourism",
      },
    ]
  },
  // {
  //   name: "Objek Wisata",
  //   path: "/dashboard/wisata",
  //   icon: <CloudIcon {...icon} />,
  // },
  {
    name: "Peringatan",
    path: "/dashboard/peringatan",
    icon: <ExclamationTriangleIcon {...icon} />,
  },
  {
    name: "Berita",
    path: "/dashboard/berita",
    icon: <NewspaperIcon {...icon} />,
  },

  {
    name: "Buletin",
    path: "/dashboard/buletin",
    icon: <ClipboardDocumentListIcon {...icon} />,
  },
  {
    name: "Gallery",
    path: "/dashboard/gallery",
    icon: <PhotoIcon {...icon} />,
  },
  {
    name: "Pegawai",
    path: "/dashboard/pegawai",
    icon: <UsersIcon {...icon} />,
  },
  {
    name: "Kritik Saran",
    path: "/dashboard/kritik-saran",
    icon: <EnvelopeOpenIcon {...icon} />,
  },
];

export function Sidenav({ brandImg, brandName }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { openSidenav } = controller;
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <aside
      className={`${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } overflow-y-auto fixed inset-0 z-50 mt-4 ml-4 w-[300px] rounded-t-xl bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 transition-transform duration-300 xl:translate-x-0`}
    >
      <div className="relative">
        <Link to="/" className="flex items-center gap-4 px-8 pt-6">
          <Avatar src={bgimg} size="sm" />
          <Typography variant="h6" color="white">
            BMKG Banyuwangi
          </Typography>
        </Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-2.5 top-2.5 grid border-2 border-white xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>
      </div>
      <hr className="my-2 mx-4 border-white" />
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          {routes.map((route, index) => {
            if (route.pages) {
              return (
                <SidebarDropdown
                  key={index}
                  setIsOpen={setIsOpen}
                  route={route}
                  isOpen={isOpen}
                />
              );
            }

            return (
              <li key={index}>
                <NavLink to={route.path}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color={isActive ? "light-blue" : "white"}
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {route.icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {route.name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;
