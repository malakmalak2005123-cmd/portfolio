"use client";

import { useLanguage } from "@/context/language-context";
import { translations, profileData } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden bg-stars">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8 relative z-10">

                {/* Profile Image / Initials Placeholder */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-32 h-32 mb-4 rounded-full p-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/10"
                >
                    <img
                        src="/images/profile-pic.jpg"
                        alt={profileData.name}
                        className="w-full h-full rounded-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4 max-w-3xl"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-sm font-medium mb-4 backdrop-blur-sm">
                        {t.role}
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        {t.greeting} {profileData.name}.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-[700px] mx-auto leading-relaxed">
                        {t.description}
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 min-w-[300px] justify-center"
                >
                    <a
                        href="#contact"
                        className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    >
                        {t.contactMe}
                    </a>
                    <a
                        href="/cv.pdf"
                        download
                        className="inline-flex h-12 items-center justify-center rounded-md border border-gray-800 glass px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800/50 text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    >
                        {t.downloadCv}
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-6 mt-8 text-gray-400 hover:text-white transition-colors"
                >
                    <a href={profileData.github} target="_blank" rel="noopener noreferrer"><Github className="w-6 h-6" /></a>
                    <a href={`mailto:${profileData.email}`}><Mail className="w-6 h-6" /></a>
                    <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="w-6 h-6" /></a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10"
                >
                    <ArrowDown className="w-6 h-6 text-gray-400" />
                </motion.div>
            </div>
        </section>
    );
}
