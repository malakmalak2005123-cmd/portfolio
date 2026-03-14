"use client";

import { translations, profileData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export function Projects() {
    const t = translations.projects;
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const projects = profileData.projects;

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const getCardStyle = (index: number) => {
        const diff = (index - activeIndex + projects.length) % projects.length; // 0, 1, 2...
        // We need to handle wrapping correctly for visual positioning
        // For simple 2 items: 0 and 1.
        // If active 0: index 0 is center. index 1 is right (or left).

        // Let's us a centered offset approach for the carousel
        // Calculate distance from active index considering wrap around

        let offset = index - activeIndex;
        // Adjust offset for wrap-around
        if (offset < -Math.floor(projects.length / 2)) offset += projects.length;
        if (offset > Math.floor(projects.length / 2)) offset -= projects.length;

        // If we only have 2 items, special case: Active is center, other is Right (or Left)
        if (projects.length === 2) {
            offset = index === activeIndex ? 0 : 1;
            // 0 is center, 1 is right. Ideally we want it to feel like it cycles.
            // Let's force index 1 to be "right" when 0 is active, and 0 to be "left" when 1 is active? 
            // Actually with 2 items, a standard center/right toggle is fine.
            if (index !== activeIndex) return {
                x: isMobile ? 50 : 300, scale: 0.8, zIndex: 1, opacity: 0.5, rotateY: -25
            }
        }

        const isActive = offset === 0;
        const isRight = offset > 0;
        const isLeft = offset < 0;

        // Responsive spacing
        const spacing = isMobile ? 40 : 450;
        // On mobile, we might want them essentially stacked or very close, 
        // relying more on opacity/scale to differentiate.

        // Base styles
        let x = offset * spacing;
        let scale = 1 - Math.abs(offset) * 0.2;
        let zIndex = 10 - Math.abs(offset);
        let opacity = 1 - Math.abs(offset) * 0.3;
        let rotateY = offset * -25; // Rotate towards center

        // Clamp values for distant items to fade out/hide nicely
        if (Math.abs(offset) > 1) {
            opacity = 0;
            scale = 0.5;
            // Hide completely if far away to prevent overlap issues
            if (isMobile) x = offset * 1000; // Move far away
        }

        return { x, scale, zIndex, opacity, rotateY, isActive };
    };

    return (
        <section id="projects" className="py-20 bg-[#050816] relative overflow-hidden min-h-screen flex flex-col justify-center">
            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-2">
                        My work
                    </p>
                    <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                        {t.title || "Projects"}.
                    </h2>
                </motion.div>

                <div className="relative h-[650px] md:h-[600px] flex items-center justify-center perspective-1000">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-1 md:left-10 z-[100] p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white transition-all transform hover:scale-110 flex items-center justify-center shadow-lg border border-white/10"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-1 md:right-10 z-[100] p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white transition-all transform hover:scale-110 flex items-center justify-center shadow-lg border border-white/10"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                    </button>

                    {/* Cards */}
                    <div className="relative w-full max-w-[280px] sm:max-w-md h-full flex items-center justify-center perspective-container">
                        {projects.map((project, index) => {
                            let xVal = 0;
                            let scaleVal = 1;
                            let zIndexVal = 10;
                            let opacityVal = 1;
                            let rotateYVal = 0;

                            const spacing = isMobile ? 280 : 320;

                            if (projects.length === 2) {
                                if (index === activeIndex) {
                                    // Center
                                } else {
                                    // Put it to the right
                                    xVal = spacing;
                                    scaleVal = 0.8;
                                    zIndexVal = 5;
                                    opacityVal = 0.5;
                                    rotateYVal = -20;
                                }
                            } else {
                                let offset = index - activeIndex;
                                // Wrap around logic for > 2 items
                                const len = projects.length;
                                // Shortest path
                                if (Math.abs(offset) > len / 2) {
                                    if (offset > 0) offset -= len;
                                    else offset += len;
                                }

                                xVal = offset * spacing;
                                scaleVal = 1 - Math.abs(offset) * 0.15;
                                zIndexVal = 10 - Math.abs(offset);
                                opacityVal = Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.4;
                                rotateYVal = offset * -15;
                            }

                            // Force the 'other' one to be visible but pushed back for 2 items
                            if (projects.length === 2 && index !== activeIndex) {
                                xVal = isMobile ? 60 : 250;
                                scaleVal = isMobile ? 0.8 : 0.85;
                                zIndexVal = 5;
                                opacityVal = isMobile ? 0.4 : 0.6;
                                rotateYVal = -15;
                            }

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute top-1/2 left-1/2 w-full max-w-[400px] md:max-w-[450px]"
                                    initial={false}
                                    animate={{
                                        x: `calc(-50% + ${xVal}px)`,
                                        y: "-50%",
                                        scale: scaleVal,
                                        opacity: opacityVal,
                                        zIndex: zIndexVal,
                                        rotateY: rotateYVal,
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    {/* Card Content */}
                                    <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[580px] md:h-[550px] flex flex-col">

                                        {/* Top Image Part */}
                                        <div className="h-[250px] w-full relative bg-[#050816] group">
                                            {/* @ts-ignore - Check if images array exists and has items */}
                                            {project.images && project.images.length > 0 ? (
                                                <img
                                                    // @ts-ignore
                                                    src={project.images[0]}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-violet-900 to-indigo-900 flex items-center justify-center text-8xl font-black text-white/10">
                                                    {project.title.charAt(0)}
                                                </div>
                                            )}

                                            {/* Overlay on Active */}
                                            {index === activeIndex && (
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60" />
                                            )}
                                        </div>

                                        {/* Bottom Content Part */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                            <p className="text-gray-400 text-sm line-clamp-4 flex-1">
                                                {project.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {project.tags.map(tag => (
                                                    <div key={tag} className="bg-white/5 rounded-md px-2 py-1 flex items-center justify-center">
                                                        {/* Simple text or could map to icons if available */}
                                                        <span className="text-xs text-gray-300 font-mono">#{tag}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Links */}
                                            <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                                                <a
                                                    /* @ts-ignore */
                                                    href={project.repoUrl || '#'}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                                                >
                                                    <Github size={18} /> Code
                                                </a>
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        target={project.link.startsWith('/') ? "_self" : "_blank"}
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors text-sm font-medium"
                                                    >
                                                        {project.link.startsWith('/') ? "View Details" : "Live Demo"} <ExternalLink size={16} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all ${i === activeIndex ? "bg-violet-500 w-8" : "bg-white/20 hover:bg-white/40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
