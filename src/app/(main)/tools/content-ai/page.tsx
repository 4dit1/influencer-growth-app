"use client";

import { useState } from "react";
import { Sparkles, Copy, RefreshCcw } from "lucide-react";

const prompts = [
    "Lifestyle: Morning Routine",
    "Tech: Setup Tour",
    "Fitness: 10min Workout",
    "Travel: Hidden Gems"
];

const generatedIdeas = {
    "Lifestyle: Morning Routine": [
        "ASMR Morning Coffee Routine ☕ #morningvlog",
        "5 Habits that changed my mornings ☀️",
        "Get ready with me: Productive Monday 📅"
    ],
    "Tech: Setup Tour": [
        "My Desk Setup 2024 - Minimalist Edition 🖥️",
        "Top 5 Gadgets under $50 you need 🔥",
        "Cable Management Hacks that verify work 🔌"
    ],
    // ... others
};

export default function ContentAIPage() {
    const [selectedPrompt, setSelectedPrompt] = useState(prompts[0]);
    const [isGenerating, setIsGenerating] = useState(false);
    const [results, setResults] = useState<string[]>([]);

    const generate = () => {
        setIsGenerating(true);
        setResults([]);
        setTimeout(() => {
            // @ts-ignore
            setResults(generatedIdeas[selectedPrompt] || ["Idea 1", "Idea 2", "Idea 3"]);
            setIsGenerating(false);
        }, 1500);
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                    <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-2xl font-bold">Content AI Generator</h1>
            </div>

            <div className="grid gap-4">
                {/* Input Section */}
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                    <label className="block text-sm font-medium mb-2 text-muted-foreground">Select Topic / Niche</label>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {prompts.map(p => (
                            <button
                                key={p}
                                onClick={() => setSelectedPrompt(p)}
                                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors border ${selectedPrompt === p ? "bg-primary text-white border-primary" : "bg-transparent border-white/10 hover:bg-white/5"}`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={generate}
                        disabled={isGenerating}
                        className="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-50"
                    >
                        {isGenerating ? <RefreshCcw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                        {isGenerating ? "Generating..." : "Generate Ideas"}
                    </button>
                </div>

                {/* Results Section */}
                {results.length > 0 && (
                    <div className="space-y-3">
                        <h3 className="font-semibold text-muted-foreground ml-1">Generated Ideas</h3>
                        {results.map((idea, i) => (
                            <div key={i} className="p-4 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between group">
                                <p className="text-sm font-medium">{idea}</p>
                                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-muted-foreground hover:text-white">
                                    <Copy className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
