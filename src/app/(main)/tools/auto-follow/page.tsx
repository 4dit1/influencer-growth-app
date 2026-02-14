"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Filter, Play, Pause, CheckCircle } from "lucide-react";

export default function AutoFollowPage() {
    const [isActive, setIsActive] = useState(false);
    const [count, setCount] = useState(0);

    const toggleAutoFollow = () => {
        setIsActive(!isActive);
        if (!isActive) {
            // Simulate follow actions
            const interval = setInterval(() => {
                setCount(c => c + 1);
            }, 2000);
            // @ts-ignore
            window.followInterval = interval;
        } else {
            // @ts-ignore
            clearInterval(window.followInterval);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Auto Follow Tool</h1>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Safe Mode On
                </div>
            </div>

            {/* Control Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden">
                <div className="relative z-10 flex flex-col items-center justify-center text-center py-8">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-colors ${isActive ? "bg-green-500/20 text-green-400" : "bg-white/10 text-muted-foreground"}`}>
                        <UserPlus className={`w-10 h-10 ${isActive ? "animate-bounce" : ""}`} />
                    </div>

                    <h2 className="text-4xl font-bold mb-2">{count}</h2>
                    <p className="text-muted-foreground mb-8">Requests Sent Today</p>

                    <button
                        onClick={toggleAutoFollow}
                        className={`px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-transform hover:scale-105 ${isActive ? "bg-red-500 hover:bg-red-600 text-white" : "bg-primary hover:bg-primary/90 text-white"}`}
                    >
                        {isActive ? (
                            <><Pause className="w-5 h-5" /> Stop Automation</>
                        ) : (
                            <><Play className="w-5 h-5" /> Start Auto Follow</>
                        )}
                    </button>
                </div>

                {/* Background Pulse */}
                {isActive && (
                    <div className="absolute inset-0 bg-primary/5 animate-pulse" />
                )}
            </div>

            {/* Settings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                        <Filter className="w-4 h-4" /> Targeting Targets
                    </h3>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Niche</span>
                            <span className="font-medium bg-white/10 px-2 py-1 rounded">Lifestyle, Tech</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Location</span>
                            <span className="font-medium bg-white/10 px-2 py-1 rounded">USA, UK</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground">Speed</span>
                            <span className="font-medium text-yellow-400">Medium (Safe)</span>
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-white/5">
                    <h3 className="font-semibold mb-2">Pro Tip 💡</h3>
                    <p className="text-sm text-muted-foreground">
                        Keep "Safe Mode" enabled to stay within Instagram's daily limits and avoid action blocks.
                    </p>
                </div>
            </div>
        </div>
    );
}
