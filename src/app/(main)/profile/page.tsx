"use client";

import { User, Settings, CreditCard, LogOut } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <h1 className="text-2xl font-bold">My Profile</h1>

            {/* User Info */}
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[2px]">
                    <div className="w-full h-full rounded-full bg-black/50 overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Felix Creator</h2>
                    <p className="text-muted-foreground">@felix_creator</p>
                    <div className="mt-2 flex gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-bold">Pro Plan</span>
                    </div>
                </div>
            </div>

            {/* Settings List */}
            <div className="space-y-2">
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-blue-400" />
                        <span>Account Details</span>
                    </div>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="flex items-center gap-3">
                        <Settings className="w-5 h-5 text-gray-400" />
                        <span>Preferences</span>
                    </div>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                    <div className="flex items-center gap-3">
                        <CreditCard className="w-5 h-5 text-green-400" />
                        <span>Subscription</span>
                    </div>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-red-500/10 transition-colors border border-white/5 text-red-400 mt-8">
                    <div className="flex items-center gap-3">
                        <LogOut className="w-5 h-5" />
                        <span>Log Out</span>
                    </div>
                </button>
            </div>
        </div>
    );
}
