"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LineChart, Cpu, User, Zap, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Tools", href: "/tools", icon: Zap },
    { name: "AI Coach", href: "/ai-coach", icon: Cpu },
    { name: "Analytics", href: "/analytics", icon: LineChart },
    { name: "Profile", href: "/profile", icon: User },
];

export function Navigation() {
    const pathname = usePathname();

    return (
        <>
            {/* Mobile Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t border-white/10 md:hidden pb-safe">
                <div className="flex justify-around items-center h-16">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
                                    isActive
                                        ? "text-primary"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <Icon className={cn("w-5 h-5", isActive && "animate-pulse")} />
                                <span className="text-[10px] font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:flex flex-col w-64 fixed left-0 top-0 bottom-0 z-50 bg-background/50 backdrop-blur-xl border-r border-white/10 p-6">
                <div className="flex items-center gap-2 mb-10 px-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary" />
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Influencer<span className="text-primary">.ai</span>
                    </h1>
                </div>

                <nav className="space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                                )}
                            >
                                {isActive && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                                )}
                                <Icon className={cn("w-5 h-5", isActive && "text-primary")} />
                                <span className="font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/5">
                        <h3 className="font-semibold text-sm mb-1">Go Premium 💎</h3>
                        <p className="text-xs text-muted-foreground mb-3">Unlock AI analytics & more.</p>
                        <button className="w-full py-2 bg-white text-black text-xs font-bold rounded-lg hover:opacity-90 transition-opacity">
                            Upgrade Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
