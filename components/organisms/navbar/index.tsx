"use client";
import { FC, ReactElement, useState } from "react";
import { CalendarIcon, HamburgerIcon, IIcon } from "@/components";
import HimatifIcon from "@/public/himatif.png";
import { motion } from "framer-motion";

export const Navbar: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex border-2 border-black justify-between items-center lg:px-12 px-7 h-[10vh] text-[#020181] font-semibold text-lg">
      <motion.figure
        style={{
          x: -400,
        }}
        animate={{
          x: [-400, 0],
        }}
        className="flex items-center w-28 lg:w-[8vw] justify-around k text-xl "
      >
        <img src={HimatifIcon.src} alt="Himatif" className="w-[2rem]" />
        <figcaption>Himatif</figcaption>
      </motion.figure>

      {/* Desktop */}
      <nav className="hidden lg:block">
        <motion.ul
          style={{
            x: 400,
          }}
          animate={{
            x: [400, 0],
          }}
          className="flex lg:w-[25vw] xl:w-[20vw] justify-between"
        >
          <li className="flex items-center w-24 justify-between">
            <CalendarIcon /> Agenda
          </li>
          <li className="flex items-center w-36 justify-between">
            <IIcon /> Visi dan misi
          </li>
        </motion.ul>
      </nav>

      {/* Mobile */}
      <nav className="block lg:hidden">
        <HamburgerIcon open={isOpen} onClick={toggle} />
      </nav>
    </header>
  );
};
