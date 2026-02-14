"use client";

import { motion } from "framer-motion";
import {
    Users, TrendingUp, Heart, Share2,
    Sparkles, Hash, Calendar, Zap, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
    { label: "Followers", value: "12.5K", change: "+12%", icon: Users, color: "text-blue-400" },
    { label: "Engagement", value: "8.2%", change: "+5%", icon: Heart, color: "text-pink-400" },
    { label: "Reach", value: "45K", change: "+22%", icon: TrendingUp, color: "text-purple-400" },
];

const features = [
    {
        title: "Auto Follow",
        desc: "Grow your audience automatically.",
        icon: Users,
        gradient: "from-blue-500 to-cyan-500",
        href: "/tools/auto-follow"
    },
    {
        title: "Content AI",
        desc: "Generate viral post ideas.",
        icon: Sparkles,
        gradient: "from-purple-500 to-pink-500",
        href: "/tools/content-ai"
    },
    {
        title: "Hashtag Finder",
        desc: "Find trending tags in your niche.",
        icon: Hash,
        gradient: "from-orange-500 to-red-500",
        href: "/tools/hashtags"
    },
    {
        title: "Best Time to Post",
        desc: "Optimize your schedule.",
        icon: Calendar,
        gradient: "from-green-500 to-emerald-500",
        href: "/tools/schedule"
    },
];

export default function Dashboard() {
    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative overflow-hidden rounded-2xl p-6 md:p-10 bg-gradient-to-br from-primary/20 via-secondary/10 to-background border border-white/10"
            >
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Creator!</span> 👋
                    </h1>
                    <p className="text-muted-foreground max-w-lg">
                        Your growth is on track. Check out today's trending topics to boost your engagement.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                        <Zap className="w-4 h-4 fill-current" />
                        Boost Now
                    </button>
                </div>
                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-secondary/30 rounded-full blur-3xl" />
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("p-2 rounded-lg bg-white/5", stat.color)}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                            {stat.value}
                        </h3>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions Grid */}
            <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    Growth Tools
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {features.map((feat, i) => (
                        <motion.div
                            key={feat.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                            className="group relative overflow-hidden p-5 rounded-2xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-all"
                        >
                            <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br", feat.gradient)} />

                            <div className={cn("inline-flex p-3 rounded-xl mb-3 bg-gradient-to-br text-white shadow-lg", feat.gradient)}>
                                <feat.icon className="w-6 h-6" />
                            </div>
                            <h3 className="font-semibold mb-1">{feat.title}</h3>
                            <p className="text-xs text-muted-foreground line-clamp-2">{feat.desc}</p>

                            <div className="mt-4 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                                <ArrowRight className="w-4 h-4 text-white/50" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
