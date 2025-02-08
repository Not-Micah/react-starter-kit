import { organizationInfo, socialLinks } from '@/data'
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa6'
import ButtonLink from '../common/ButtonLink'
import Text from '../common/Text'

/**
 * Footer component with social links, organization info, and copyright notice.
 */
const iconMap = {
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaGithub
}

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gray-50">
            <div className="default-container py-16">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto space-y-8">
                    {/* Organization Info */}
                    <div className="space-y-4">
                        <Text className="text-2xl font-bold text-gray-900">
                            {organizationInfo.name}
                        </Text>
                        <Text className="text-base text-gray-500">
                            {organizationInfo.description}
                        </Text>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((social) => {
                            const Icon = iconMap[social.icon as keyof typeof iconMap]
                            return (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        p-2 rounded-lg
                                        text-gray-500 hover:text-blue-600
                                        hover:bg-white
                                        transition-all duration-200
                                        group
                                    "
                                >
                                    <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                                </a>
                            )
                        })}
                    </div>

                    {/* Call to Action */}
                    <div className="pt-4">
                        <ButtonLink 
                            href={organizationInfo.joinButtonLink}
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            {organizationInfo.joinButtonText}
                        </ButtonLink>
                    </div>

                    {/* Copyright Notice */}
                    <Text className="text-base text-gray-500">
                        &copy; {currentYear} {organizationInfo.name}. All rights reserved.
                    </Text>
                </div>
            </div>
        </footer>
    )
}

export default Footer