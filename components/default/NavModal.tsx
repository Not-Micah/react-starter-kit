"use client";

import { navBarLinks } from "@/data";
import useNavModal from "@/hooks/useNavModal";
import { IoCloseOutline } from "react-icons/io5";
import Text from "./Text";

const NavModal = () => {
    const { onClose, isOpen } = useNavModal();

    return (
        <nav
            className={`
                z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                w-[100vw] h-[100vh]
                flex flex-col
                px-8 py-12
                bg-white
                transition-all duration-500 ease-in-out
                ${!isOpen && 'translate-x-[100vw]'}
            `}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="self-end text-offBlack/70 hover:text-offBlack transition-colors"
                aria-label="Close mobile menu"
            >
                <IoCloseOutline size={28} />
            </button>

            {/* Mobile Navigation Links */}
            <div className="mt-16 flex flex-col">
                {navBarLinks.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        className={`
                            py-6
                            text-offBlack/80 hover:text-offBlack
                            transition-colors
                            border-b-[1px] border-black/[0.06]
                        `}
                    >
                        <Text>{item.label}</Text>
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default NavModal;