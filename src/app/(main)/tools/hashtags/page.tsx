"use client";

import { useState } from "react";
import { Hash, Search, Copy, Check } from "lucide-react";

const trendingTags = [
    { tag: "#lifestyle", reach: "12M", competition: "High" },
    { tag: "#morningroutine", reach: "5.4M", competition: "Med" },
    { tag: "#productivity", reach: "8.1M", competition: "High" },
    { tag: "#aesthetic", reach: "3.2M", competition: "Low" },
    { tag: "#fitnessmotivation", reach: "15M", competition: "High" },
    { tag: "#healthyliving", reach: "4.5M", competition: "Med" },
];

export default function HashtagsPage() {
    const [copied, setCopied] = useState("");

    const copyTag = (tag: string) => {
        navigator.clipboard.writeText(tag);
        setCopied(tag);
        setTimeout(() => setCopied(""), 2000);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-orange-500/20 text-orange-400 rounded-lg">
                    <Hash className="w-6 h-6" />
                </div>
                <h1 className="text-2xl font-bold">Hashtag Finder</h1>
            </div>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search for a keyword..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all"
                />
            </div>

            {/* Results Table */}
            <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5">
                <table className="w-full text-left">
                    <thead className="bg-white/5 text-muted-foreground text-sm uppercase">
                        <tr>
                            <th className="p-4 font-medium">Hashtag</th>
                            <th className="p-4 font-medium">Reach</th>
                            <th className="p-4 font-medium">Competition</th>
                            <th className="p-4 font-medium text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {trendingTags.map((item) => (
                            <tr key={item.tag} className="hover:bg-white/5 transition-colors">
                                <td className="p-4 font-medium text-orange-400">{item.tag}</td>
                                <td className="p-4">{item.reach}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 rounded text-xs font-bold ${item.competition === "High" ? "bg-red-500/20 text-red-400" :
                                            item.competition === "Med" ? "bg-yellow-500/20 text-yellow-400" :
                                                "bg-green-500/20 text-green-400"
                                        }`}>
                                        {item.competition}
                                    </span>
                                </td>
                                <td className="p-4 text-right">
                                    <button
                                        onClick={() => copyTag(item.tag)}
                                        className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                    >
                                        {copied === item.tag ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
