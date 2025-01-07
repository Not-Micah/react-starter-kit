"use client";

import { navBarLinks } from "@/data";
import { RxHamburgerMenu } from "react-icons/rx";
import useNavModal from "@/hooks/useNavModal";

const NavBar = () => {
  const { onOpen } = useNavModal();

  return (
    <nav
      className="max-w-[1520px] w-[calc(100%-20px)] rounded-lg border-[1px] border-offBlack/20 backdrop-blur-sm
    flex justify-between px-8 py-4
    fixed top-[20px] left-1/2 transform -translate-x-1/2"
    >
      <div className="text-black/20 dynamic-text">LOGO</div>
      <div className="flex gap-x-6 max-md:hidden">
        {navBarLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-offBlack dynamic-text"
          >
            {item.label}
          </a>
        ))}
      </div>
      <button
        onClick={() => {
          onOpen();
        }}
        className="hidden max-md:block"
      >
        <RxHamburgerMenu size={22.5} />
      </button>
    </nav>
  );
};

export default NavBar;
