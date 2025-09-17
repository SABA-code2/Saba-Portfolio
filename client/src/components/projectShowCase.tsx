import { useEffect, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const images = [
    { src: "/images/bosch1.jpg", title: "Predictive Engine – Analytics Overview", desc: "..." },
    { src: "/images/bosch2.jpg", title: "Predictive Engine – Detailed Insights", desc: "..." },
    { src: "/images/easy.png", title: "Easytime – Timesheet Dashboard", desc: "..." },
    { src: "/images/asset.jpg", title: "Asset Management system", desc: "..." },
    { src: "/images/ADMS.jpg", title: "ADMS", desc: "..." },

];


export default function ProjectShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const goToPrev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    useEffect(() => {
        const interval = setInterval(goToNext, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="projects" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10">
                    A Peek into My Playground of Work
                </h2>

                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl mx-auto group">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={images[currentIndex].src}
                            alt={`Project ${currentIndex + 1}`}
                            className="w-full h-full object-container "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        />
                    </AnimatePresence>

                    {/* Overlay Caption */}
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white p-4 text-left">
                        <h3 className="text-xl font-semibold">{images[currentIndex].title}</h3>
                        <p className="text-sm">{images[currentIndex].desc}</p>
                    </div>

                    {/* Left Arrow */}
                    <button
                        onClick={goToPrev}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={goToNext}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`w-3 h-3 rounded-full ${i === currentIndex ? "bg-white" : "bg-gray-400/70"} transition`}
                            />
                        ))}
                    </div>
                </div>

                {/* <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg">
                    These snapshots highlight the work I've done across various projects.
                </p> */}
            </div>
        </section>
    );
}
