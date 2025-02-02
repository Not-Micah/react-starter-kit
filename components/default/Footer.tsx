import { organizationInfo, socialLinks } from '@/data'
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa6'
import ButtonLink from './ButtonLink'
import Text from './Text'

const iconMap = {
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGithub
}

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-100">
            <div className="default-container py-16">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">
                    {/* Title and Description */}
                    <div className="space-y-4">
                        <Text className="text-2xl font-bold text-gray-800">{organizationInfo.name}</Text>
                        <p className="text-gray-600">
                            {organizationInfo.description}
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {socialLinks.map((social) => {
                            const Icon = iconMap[social.icon as keyof typeof iconMap]
                            return (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    <Icon className="w-6 h-6" />
                                </a>
                            )
                        })}
                    </div>

                    {/* Join Button */}
                    <ButtonLink href={organizationInfo.joinButtonLink}>
                        {organizationInfo.joinButtonText}
                    </ButtonLink>

                    {/* Copyright */}
                    <p className="text-gray-500 text-sm">
                        &copy; {currentYear} {organizationInfo.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer