"use client";

import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
    AreaChart, Area
} from "recharts";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const followersData = [
    { name: 'Mon', followers: 4000 },
    { name: 'Tue', followers: 4200 },
    { name: 'Wed', followers: 4100 },
    { name: 'Thu', followers: 4800 },
    { name: 'Fri', followers: 5200 },
    { name: 'Sat', followers: 5800 },
    { name: 'Sun', followers: 6500 },
];

const engagementData = [
    { name: 'Mon', rate: 2.1 },
    { name: 'Tue', rate: 2.4 },
    { name: 'Wed', rate: 2.2 },
    { name: 'Thu', rate: 3.8 }, // viral post
    { name: 'Fri', rate: 3.5 },
    { name: 'Sat', rate: 4.1 },
    { name: 'Sun', rate: 4.5 },
];

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Performance Analytics</h1>

            {/* Main Chart */}
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-lg font-semibold">Follower Growth</h3>
                        <p className="text-sm text-muted-foreground">Last 7 Days</p>
                    </div>
                    <div className="flex items-center gap-1 text-green-400 bg-green-400/10 px-2 py-1 rounded-full text-xs font-bold">
                        <ArrowUpRight className="w-3 h-3" /> +12.5%
                    </div>
                </div>

                <div className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={followersData}>
                            <defs>
                                <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#525252" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#171717', border: '1px solid #333', borderRadius: '8px' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Area type="monotone" dataKey="followers" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorFollowers)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Secondary Charts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-sm">Engagement Rate</h3>
                        <TrendingUp className="w-4 h-4 text-pink-500" />
                    </div>
                    <div className="h-[150px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={engagementData}>
                                <Line type="monotone" dataKey="rate" stroke="#EC4899" strokeWidth={2} dot={{ r: 3, fill: "#EC4899" }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#171717', border: 'none' }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="p-5 bg-gradient-to-br from-primary/20 to-secondary/10 border border-white/10 rounded-2xl flex flex-col justify-center items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-3 animate-pulse">
                        <span className="text-2xl">🏆</span>
                    </div>
                    <h3 className="font-bold text-xl">Top 1%</h3>
                    <p className="text-sm text-muted-foreground">You're outperforming your niche!</p>
                </div>
            </div>
        </div>
    );
}
