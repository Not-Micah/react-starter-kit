import { twMerge } from "tailwind-merge"

interface ButtonLinkProps {
    children: React.ReactNode
    href?: string
    icon?: React.ReactNode
    className?: string
}

const ButtonLink = ({ children, href, icon, className }: ButtonLinkProps) => {
    const buttonClasses = twMerge(
        "inline-flex items-center",
        "px-10 py-3",
        "rounded-lg bg-blue-600 text-white font-medium",
        "transition-all duration-200",
        "hover:brightness-110 hover:shadow-md",
        className
    )

    return (
        <a href={href} className={buttonClasses}>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </a>
    )
}

export default ButtonLink