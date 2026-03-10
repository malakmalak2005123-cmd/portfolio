"use client";

import { useLanguage } from "@/context/language-context";
import { translations, profileData } from "@/lib/data";
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, MapPin, Send, Phone } from "lucide-react";

export function Contact() {
    const { language } = useLanguage();
    const t = translations[language].contact;

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-[#050816]">
            {/* Background Glows (matching Hero style) */}
            <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <p className="text-cyan-400 uppercase tracking-[0.3em] mb-2 text-xs font-bold">
                        {language === 'fr' ? "Contact" : "Contact"}
                    </p>
                    <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        {t.title}
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-16 items-center">
                    {/* Left Column: Contact Methods (Minimalist) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-12"
                    >
                        <div className="space-y-10">
                            <div className="group relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500" />
                                <div className="relative flex items-center gap-6">
                                    <div className="p-4 bg-white/5 rounded-2xl text-blue-400 border border-white/10 group-hover:border-blue-500/50 transition-all">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Email</span>
                                        <a href={`mailto:${profileData.email}`} className="text-white hover:text-blue-400 transition-colors font-medium">
                                            {profileData.email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500" />
                                <div className="relative flex items-center gap-6">
                                    <div className="p-4 bg-white/5 rounded-2xl text-green-400 border border-white/10 group-hover:border-green-500/50 transition-all">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Phone</span>
                                        <a href={`tel:${profileData.phone}`} className="text-white hover:text-green-400 transition-colors font-medium">
                                            {profileData.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="group relative">
                                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500" />
                                <div className="relative flex items-center gap-6">
                                    <div className="p-4 bg-white/5 rounded-2xl text-purple-400 border border-white/10 group-hover:border-purple-500/50 transition-all">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Location</span>
                                        <span className="text-white font-medium">Rabat, Morocco</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex gap-6">
                            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form (Sleek & Light) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-400/50 outline-none transition-all placeholder:text-gray-600 focus:bg-white/[0.08]"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-400/50 outline-none transition-all placeholder:text-gray-600 focus:bg-white/[0.08]"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-400/50 outline-none transition-all placeholder:text-gray-600 focus:bg-white/[0.08]"
                            />
                            <textarea
                                rows={5}
                                placeholder="Message"
                                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:border-cyan-400/50 outline-none transition-all resize-none placeholder:text-gray-600 focus:bg-white/[0.08]"
                            />
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-3 py-5 rounded-xl bg-white text-[#050816] font-black uppercase tracking-widest hover:bg-cyan-400 transition-all transform hover:scale-[1.01]"
                            >
                                Send Message
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
