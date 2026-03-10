"use client";

import { useLanguage } from "@/context/language-context";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectDetailsClientProps {
    project: any;
    images: string[];
    adminImages: string[];
}

export default function ProjectDetailsClient({ project, images, adminImages }: ProjectDetailsClientProps) {
    const { language } = useLanguage();
    const p = project;
    const description = p.description[language] || p.description['en'];

    return (
        <main className="min-h-screen bg-[#050816] relative overflow-x-hidden">
            {/* Back Button */}
            <div className="absolute top-6 left-6 z-50">
                <Link
                    href="/#projects"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span>Back</span>
                </Link>
            </div>

            {/* Hero Section with Main Image */}
            <section className="relative h-[60vh] md:h-[70vh] w-full">
                <div className="absolute inset-0">
                    {images && images.length > 0 ? (
                        <img
                            src={images[0]}
                            alt={p.title}
                            className="w-full h-full object-cover object-center mask-image-gradient"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-violet-900 to-indigo-900" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/50 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{p.title}</h1>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {p.tags.map((tag: string) => (
                                    <span key={tag} className="px-3 py-1 bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full text-sm font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                        {/* Main Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div className="bg-[#151030] p-8 rounded-2xl border border-white/10">
                                <h2 className="text-2xl font-bold text-white mb-4">Project Overview</h2>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    {description}
                                </p>
                            </div>

                            {/* Project Gallery - Landing Section */}
                            {images && images.length > 1 && (
                                <div className={`bg-[#151030] ${p.joinedImages ? 'rounded-2xl border border-white/10' : 'p-8 rounded-2xl border border-white/10 space-y-6'}`}>
                                    {!p.joinedImages && <h2 className="text-2xl font-bold text-white">Project Screenshots</h2>}
                                    <div className={p.joinedImages ? "flex flex-col" : "grid gap-8"}>
                                        {images.slice(1).map((img: string, idx: number) => (
                                            <div key={idx} className={p.joinedImages ? "w-full" : "rounded-xl overflow-hidden border border-white/20 shadow-lg group bg-[#050816]"}>
                                                <img
                                                    src={img}
                                                    alt={`${p.title} landing ${idx + 2}`}
                                                    className={`w-full h-auto ${!p.joinedImages ? 'transform group-hover:scale-[1.02] transition-transform duration-500' : ''}`}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Admin Gallery Section */}
                            {adminImages && adminImages.length > 0 && (
                                <div className="bg-[#0d1b3e] p-8 rounded-2xl border border-blue-500/10 space-y-6">
                                    <h2 className="text-2xl font-bold text-white">Partie Admin</h2>
                                    <div className="grid gap-8">
                                        {adminImages.map((img: string, idx: number) => (
                                            <div key={idx} className="rounded-xl overflow-hidden border border-blue-500/20 shadow-lg group bg-[#050816]">
                                                <img
                                                    src={img}
                                                    alt={`${p.title} admin ${idx + 1}`}
                                                    className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        {/* Sidebar Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Key Features */}
                            {p.features && p.features.length > 0 && (
                                <div className="bg-[#151030] p-6 rounded-2xl border border-white/10">
                                    <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                                    <ul className="space-y-3">
                                        {p.features.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Links */}
                            <div className="bg-[#151030] p-6 rounded-2xl border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-4">Project Links</h3>
                                <div className="space-y-3">
                                    {p.liveUrl && (
                                        <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between w-full p-3 bg-white/5 hover:bg-white/10 rounded-lg text-white transition-colors group">
                                            <span className="flex items-center gap-2">
                                                <ExternalLink className="w-5 h-5 text-violet-400" />
                                                Live Demo
                                            </span>
                                            <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </main>
    );
}
