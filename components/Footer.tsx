"use client";

import { profileData } from "@/lib/data";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    © {currentYear} {profileData.name}. All rights reserved.
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                    Built with Next.js & Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
