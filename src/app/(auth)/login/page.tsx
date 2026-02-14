"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Youtube, Twitter } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-background" />
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px]" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative z-10 shadow-2xl"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
                        Influencer.ai
                    </h1>
                    <p className="text-muted-foreground">Login to managing your growth.</p>
                </div>

                <div className="space-y-4">
                    <button className="w-full flex items-center justify-center gap-3 bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors">
                        <Instagram className="w-5 h-5 text-pink-600" />
                        Continue with Instagram
                    </button>
                    <button className="w-full flex items-center justify-center gap-3 bg-white/10 text-white font-semibold py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/5">
                        <Youtube className="w-5 h-5 text-red-600" />
                        Continue with YouTube
                    </button>
                    <button className="w-full flex items-center justify-center gap-3 bg-white/10 text-white font-semibold py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/5">
                        <Twitter className="w-5 h-5 text-blue-400" />
                        Continue with X (Twitter)
                    </button>
                </div>

                <div className="my-6 flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="h-[1px] bg-white/10 flex-1" />
                    OR
                    <div className="h-[1px] bg-white/10 flex-1" />
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                    </div>

                    <Link href="/dashboard" className="block w-full">
                        <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
                            Sign In
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </form>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                    Don't have an account? <span className="text-primary hover:underline cursor-pointer">Sign up</span>
                </div>
            </motion.div>
        </div>
    );
}
