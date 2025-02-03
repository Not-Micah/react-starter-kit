import Subheading from "../common/Subheading"
import Text from "../common/Text"

import { testimonials } from "@/data"
import { FaStar } from "react-icons/fa"

const Testimonials = () => {
    return (
        <div className="default-container space-y-12">
            <div className="space-y-4">
                <Subheading className="text-center">Our Wall of Love</Subheading>
                <Text className="text-center">
                    Read what our user have to say about Me2.
                </Text>
            </div>
            
            {/* Masonry-style layout container */}
            <div className="columns-1 md:columns-2 gap-6 [column-fill:_initial]">
                {testimonials.map((testimonial, index) => (
                    <div 
                        key={index}
                        className={`
                            bg-white rounded-lg p-6 mb-6
                            break-inside-avoid-column
                            shadow-md
                            transform transition-all duration-300
                            hover:scale-[1.025] hover:shadow-lg
                        `}
                    >
                        <div className="flex flex-col">
                            {/* Star Rating */}
                            <div className="flex items-center gap-2 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`w-4 h-4 ${
                                            i < testimonial.rating
                                                ? "text-yellow-400"
                                                : "text-gray-400"
                                        }`}
                                    />
                                ))}
                            </div>
                            
                            {/* Content */}
                            <p className="text-[15px] leading-relaxed text-gray-600 mb-4">
                                "{testimonial.testimonial}"
                            </p>
                            
                            {/* Author */}
                            <div className="mt-4">
                                <h4 className="font-medium text-primary">
                                    {testimonial.name}
                                </h4>
                                <p className="text-sm text-gray-600">
                                    {testimonial.title}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials