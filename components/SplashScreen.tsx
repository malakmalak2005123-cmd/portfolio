"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profileData } from "@/lib/data";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
    const [text, setText] = useState("");
    const fullText = `Let’s Build Something Together...`;

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
                setTimeout(onComplete, 1000); // Wait 1s after text finishes before completing
            }
        }, 100);

        return () => clearInterval(interval);
    }, [fullText, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#050816] flex items-center justify-center"
        >
            <div className="flex flex-col items-center">
                <motion.h1
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4"
                >
                    <span className="text-violet-500">{text}</span>
                    <span className="animate-pulse">|</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400 text-lg md:text-xl"
                >
                    {profileData.name}
                </motion.p>
            </div>
        </motion.div>
    );
}
