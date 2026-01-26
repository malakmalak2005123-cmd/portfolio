"use client";

import { useState, useEffect } from "react";
import { translations } from "@/lib/data";
import { useLanguage } from "@/context/language-context";
import { LangSwitcher } from "./LangSwitcher";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
    const { language } = useLanguage();
    const t = translations[language].nav;
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: t.home, href: "#hero" },
        { name: t.about, href: "#about" },
        { name: t.skills, href: "#skills" },
        { name: t.projects, href: "#projects" },
        { name: t.contact, href: "#contact" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 py-5 bg-white dark:bg-[#050816] ${isScrolled ? "shadow-md" : ""}`}
        >
            <div className="container mx-auto flex justify-between items-center px-4 max-w-7xl">
                <a
                    href="#"
                    className="flex items-center gap-2 "
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-xl">
                        M
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-secondary hover:text-primary dark:hover:text-white text-[18px] font-medium transition-colors cursor-pointer"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4 ml-4">
                    <LangSwitcher />
                    {/* ThemeToggle removed */}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <LangSwitcher />
                    <button
                        className="p-2 text-gray-900 dark:text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl glass p-6 flex flex-col items-start gap-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-secondary font-poppins font-medium cursor-pointer text-[16px] hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-2">
                            {/* ThemeToggle removed */}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
