"use client";

import { useLanguage } from "@/context/language-context";
import { translations, profileData } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden bg-[#050816]">
            {/* Background Glow (Orb) */}
            <div className="absolute top-[20%] right-[30%] w-[150px] h-[150px] bg-orange-200/40 blur-[60px] rounded-full pointer-events-none z-0" />
            <div className="absolute top-[22%] right-[32%] w-[40px] h-[40px] bg-white/60 blur-[10px] rounded-full pointer-events-none z-10" />

            {/* Floating 3D-like Cubes (CSS/Motion) */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[30%] left-[35%] w-32 h-32 bg-[#2a2a2a] border border-white/10 shadow-2xl z-0"
                style={{ transform: "rotateX(45deg) rotateY(45deg)" }}
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[30%] left-[45%] w-40 h-40 bg-[#1a1a1a] border border-white/10 shadow-2xl z-0"
                style={{ transform: "rotateX(30deg) rotateY(-20deg)" }}
            />
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-[50%] right-[35%] w-24 h-24 bg-[#333333] border border-white/10 shadow-2xl z-0"
                style={{ transform: "rotateX(-15deg) rotateY(30deg)" }}
            />

            <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <span className="text-xl md:text-2xl text-[#aaa6c3] tracking-wider mb-2">
                        Hi, my name is
                    </span>
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase mb-2">
                        {profileData.name}
                    </h1>
                    <p className="text-sm md:text-base text-[#aaa6c3] tracking-[0.3em] font-medium uppercase">
                        {t.role.split(' ').join(', ')}.
                    </p>
                </motion.div>

                {/* Optional scroll indicator or minimal pointer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute right-[33%] top-[45%] w-8 h-8 rounded-full border border-cyan-400/30 flex items-center justify-center"
                >
                    <div className="w-1 h-1 bg-cyan-400 rounded-full" />
                </motion.div>
            </div>
        </section>
    );
}
