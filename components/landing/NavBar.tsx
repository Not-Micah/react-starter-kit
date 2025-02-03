"use client";

import { navBarLinks } from "@/data";
import { RxHamburgerMenu } from "react-icons/rx";
import useNavModal from "@/hooks/useNavModal";
import Text from "../common/Text";

const NavBar = () => {
  const { onOpen } = useNavModal();

  return (
    <nav
      className={`
        z-10 fixed top-[20px] left-1/2 transform -translate-x-1/2
        max-w-[1520px] w-[calc(100%-40px)]
        flex justify-between items-center
        px-8 py-3
        rounded-2xl 
        bg-white/70 backdrop-blur-sm
        shadow-md
        border-[1px] border-black/[0.06]
      `}
    >
      {/* Logo */}
      <img 
        src="/logo.png" 
        className="w-11 h-auto rounded-xl" 
        alt="Logo"
      />

      {/* Desktop Navigation Links */}
      <div className="flex gap-x-10 max-md:hidden">
        {navBarLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="text-offBlack/80 hover:text-offBlack transition-colors"
          >
            <p>{item.label}</p>
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={onOpen}
        className="hidden max-md:block text-offBlack/70 hover:text-offBlack transition-colors"
        aria-label="Open mobile menu"
      >
        <RxHamburgerMenu size={20} />
      </button>
    </nav>
  );
};

export default NavBar;
