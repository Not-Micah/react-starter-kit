"use client";

import { navBarLinks } from "@/data";
import useNavModal from "@/hooks/useNavModal";
import { IoCloseOutline } from "react-icons/io5";

const NavModal = () => {
    const { onClose, isOpen } = useNavModal();

    console.log(isOpen);

    return (
        <nav
        className={`w-[100vw] h-[100vh]
        fixed top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2
        flex flex-col gap-y-6 p-standard
        bg-minimalistGray
        transition-all duration-500
        ${!isOpen && 'translate-x-[100vw]'}`}>
            <button
            onClick={() => {
                onClose();
            }}
            className="mb-16">
                <IoCloseOutline size={30} />
            </button>
            {
                navBarLinks.map((item, index) => (
                    <a
                    key={index}
                    href={item.link}
                    className="dynamic-text text-offBlack
                    w-full pb-4 border-b-[1px] border-offBlack/20">
                        {item.label}
                    </a>
                ))
            }
        </nav>
    )
}

export default NavModal;