import Subheading from "../common/Subheading"

const Demo = () => {
    return (
        <div className="default-container space-y-12">
            <Subheading className="text-center">Still Not Convinced?</Subheading>

            {/* Video Container */}
            <div className="relative max-w-[1000px] mx-auto aspect-video rounded-xl overflow-hidden bg-gray-100">
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Product Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    )
}

export default Demo