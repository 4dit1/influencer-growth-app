"use client";

import Link from "next/link";
import { Users, Sparkles, Hash, Calendar, ArrowRight } from "lucide-react";

const tools = [
    {
        title: "Auto Follow",
        desc: "Grow your audience automatically.",
        icon: Users,
        color: "text-blue-400",
        href: "/tools/auto-follow"
    },
    {
        title: "Content AI",
        desc: "Generate viral post ideas.",
        icon: Sparkles,
        color: "text-pink-400",
        href: "/tools/content-ai"
    },
    {
        title: "Hashtag Finder",
        desc: "Find trending tags in your niche.",
        icon: Hash,
        color: "text-orange-400",
        href: "/tools/hashtags"
    },
    //   { 
    //     title: "Scheduler", 
    //     desc: "Optimize your posting times.", 
    //     icon: Calendar, 
    //     color: "text-green-400",
    //     href: "/tools/schedule"
    //   },
];

export default function ToolsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold mb-2">Growth Tools</h1>
                <p className="text-muted-foreground">Select a tool to start boosting your profile.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tools.map((tool) => (
                    <Link key={tool.title} href={tool.href}>
                        <div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-xl bg-white/5 ${tool.color}`}>
                                    <tool.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{tool.title}</h3>
                                    <p className="text-sm text-muted-foreground">{tool.desc}</p>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-muted-foreground" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
