"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { profileData } from "@/lib/data";
import { Loader2 } from "lucide-react";

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        const timeout = setTimeout(onComplete, 2000); // Wait 2s before completing
        return () => clearTimeout(timeout);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#050816] flex items-center justify-center"
        >
            <div className="flex flex-col items-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="mb-8"
                >
                    <Loader2 className="w-12 h-12 text-violet-500" />
                </motion.div>
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
