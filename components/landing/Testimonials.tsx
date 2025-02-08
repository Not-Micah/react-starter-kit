"use client";

import Subheading from "../common/Subheading"
import Text from "../common/Text"
import { testimonials } from "@/data"
import { FaStar, FaQuoteLeft } from "react-icons/fa"
import { motion } from "framer-motion"

/**
 * Testimonials section displaying user reviews in a grid layout
 */
const Testimonials = () => {
    return (
        <div className="default-container py-16 space-y-12">
            {/* Header Section */}
            <div className="max-w-2xl mx-auto space-y-3 text-center">
                <Subheading className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                    Our Wall of Love
                </Subheading>
                <Text className="text-gray-500">
                    Read what our users have to say about Me2.
                </Text>
            </div>
            
            {/* Testimonials Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="flex flex-col h-full">
                            {/* Quote Icon */}
                            <div className="mb-4">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                                    <FaQuoteLeft className="w-3.5 h-3.5 text-blue-500" />
                                </div>
                            </div>

                            {/* Star Rating */}
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`w-3.5 h-3.5 ${
                                            i < testimonial.rating
                                                ? "text-yellow-400"
                                                : "text-gray-200"
                                        }`}
                                    />
                                ))}
                            </div>
                            
                            {/* Testimonial Content */}
                            <p className="text-base text-gray-600 flex-grow">
                                "{testimonial.testimonial}"
                            </p>
                            
                            {/* Author Information */}
                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-medium text-base text-gray-900">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-base text-gray-500 mt-0.5">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-base font-medium text-blue-600">
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials