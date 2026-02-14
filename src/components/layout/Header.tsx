"use client";

import { Bell, Search } from "lucide-react";

export function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-background/50 backdrop-blur-md sticky top-0 z-40">
            <div className="md:hidden">
                {/* Mobile Logo or Menu Trigger */}
                <div className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Influencer.ai
                </div>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search tools, trends..."
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
            </div>

            <div className="flex items-center gap-4">
                <button className="relative p-2 hover:bg-white/5 rounded-full transition-colors">
                    <Bell className="w-5 h-5 text-muted-foreground" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-secondary rounded-full animate-pulse" />
                </button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[1px]">
                    <div className="w-full h-full rounded-full bg-black/50 overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                    </div>
                </div>
            </div>
        </header>
    );
}
