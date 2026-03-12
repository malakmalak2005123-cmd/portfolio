"use client";

import { translations, profileData } from "@/lib/data";
import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Terminal } from "lucide-react";

export function Skills() {
    const t = translations.skills;

    // Simplified categories without specific color props
    const categories = [
        {
            id: "frontend",
            title: "Frontend",
            icon: <Layout className="w-8 h-8 text-white" />,
            skills: profileData.skills.frontend,
        },
        {
            id: "backend",
            title: "Backend",
            icon: <Server className="w-8 h-8 text-white" />,
            skills: profileData.skills.backend,
        },
        {
            id: "databases",
            title: "Databases",
            icon: <Database className="w-8 h-8 text-white" />,
            skills: profileData.skills.databases,
        },
    ];

    return (
        <section id="skills" className="py-20 bg-[#050816] relative overflow-hidden">
            {/* Simple Background accent */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full" />
                <div className="absolute bottom-40 right-20 w-3 h-3 bg-white rounded-full" />
            </div>

            <div className="container px-4 md:px-6 mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-secondary uppercase tracking-wider mb-2 text-sm font-semibold">
                        Navigating the universe of technology
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Skills & Expertise
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Mastering the tools that power modern applications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            // Removed colored border-l-4 and specific border colors
                            // Added simple neutral border and hover effect
                            className="bg-[#151030] rounded-2xl p-6 shadow-xl border border-white/10 hover:border-violet-500/30 hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                {/* Neutral background for icon */}
                                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 bg-[#1d1836] hover:bg-[#251e42] border border-white/5 px-4 py-2 rounded-lg transition-colors group"
                                    >
                                        {/* Neutral dot or maybe just white/gray */}
                                        <span className="w-2 h-2 rounded-full bg-indigo-500" />
                                        <span className="text-gray-300 group-hover:text-white font-medium text-sm">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
