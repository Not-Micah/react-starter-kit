"use client";

import { useState } from 'react'
import { FAQs } from '@/data'
import Subheading from '../common/Subheading'
import Text from '../common/Text'
import { IoAdd } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * FAQ component with expandable questions and answers.
 * Features smooth animations and modern styling.
 */
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <div className="default-container py-16">
            <div className="grid lg:grid-cols-[35%_1fr] gap-12">
                {/* Header Section */}
                <div className="space-y-3">
                    <Subheading className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                        Frequently Asked Questions
                    </Subheading>
                    <Text className="text-gray-500">
                        Have another question? Contact me on Twitter or by email.
                    </Text>
                </div>

                {/* FAQ Items */}
                <div className="space-y-1">
                    {FAQs.map((faq, index) => (
                        <div key={index}>
                            <div
                                className={`
                                    rounded-lg overflow-hidden
                                    ${activeIndex === index ? 'bg-blue-50' : ''}
                                `}
                            >
                                {/* Question Header */}
                                <div
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className={`
                                        flex justify-between items-center p-4 
                                        cursor-pointer
                                        transition-colors duration-200
                                        ${activeIndex === index 
                                            ? 'text-blue-600' 
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }
                                    `}
                                >
                                    <Text className="font-medium text-base">
                                        {faq.question}
                                    </Text>
                                    
                                    <div className={`
                                        p-1.5 rounded-full 
                                        transition-all duration-200 
                                        ${activeIndex === index 
                                            ? 'bg-blue-100 rotate-45' 
                                            : 'bg-gray-100'
                                        }
                                    `}>
                                        <IoAdd className="w-4 h-4" />
                                    </div>
                                </div>
                                
                                {/* Answer Section */}
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <Text className="px-4 pb-4 text-base text-gray-600">
                                                {faq.answer}
                                            </Text>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ