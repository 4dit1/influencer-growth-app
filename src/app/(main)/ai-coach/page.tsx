"use client";

import { useState } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

export default function AICoachPage() {
    const [messages, setMessages] = useState([
        { role: "assistant", content: "Hi! I'm your AI Growth Coach. How can I help you reach your goals today?" }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: "user", content: input }];
        setMessages(newMessages);
        setInput("");

        // Simulate AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                role: "assistant",
                content: "That's a great question! Based on current trends, I recommend focusing on authentic storytelling. Would you like some specific video ideas?"
            }]);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-[calc(100vh-140px)]">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">AI Coach</h1>
                    <p className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> Online
                    </p>
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto bg-white/5 border border-white/5 rounded-2xl p-4 space-y-4 mb-4">
                {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] rounded-2xl p-4 ${msg.role === "user"
                                ? "bg-primary text-white"
                                : "bg-white/10 text-gray-100"
                            }`}>
                            <div className="flex items-start gap-3">
                                {msg.role === "assistant" && <Sparkles className="w-4 h-4 mt-1 text-yellow-400" />}
                                <p className="text-sm leading-relaxed">{msg.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Ask specific questions about your growth..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <button
                    onClick={sendMessage}
                    disabled={!input.trim()}
                    className="absolute right-2 top-2 p-2 bg-primary rounded-lg text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
                >
                    <Send className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
