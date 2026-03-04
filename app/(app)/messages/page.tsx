"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MoreHorizontal, Send, Image as ImageIcon, Smile } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function ChatPage() {
    return (
        <div className="h-[calc(100vh-100px)] flex bg-white border rounded-3xl overflow-hidden shadow-xl shadow-zinc-100/50">
            {/* Search/Conversations Sidebar */}
            <div className="w-80 flex-shrink-0 border-r flex flex-col bg-zinc-50/30">
                <div className="p-6 border-b bg-white">
                    <h2 className="text-xl font-bold text-black mb-4">Messages</h2>
                    <div className="relative">
                        <Input placeholder="Search conversations..." className="pl-10 bg-zinc-100 border-none rounded-2xl h-11" />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className={cn(
                                "p-4 flex items-center gap-3 cursor-pointer transition-colors border-b last:border-none",
                                i === 1 ? "bg-white border-l-4 border-l-black" : "hover:bg-zinc-100/50"
                            )}
                        >
                            <div className="relative">
                                <Avatar className="h-12 w-12 border">
                                    <AvatarImage src={`https://i.pravatar.cc/150?u=${i}`} />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                {i % 2 === 0 && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-0.5">
                                    <h4 className="text-sm font-semibold text-zinc-900 truncate">Sarah Miller</h4>
                                    <span className="text-[10px] text-zinc-400 font-medium whitespace-nowrap">2m ago</span>
                                </div>
                                <p className="text-xs text-zinc-500 truncate">Hey! I loved your recent article on React Pat...</p>
                            </div>
                            {i === 1 && (
                                <div className="h-2 w-2 bg-black rounded-full" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col bg-white">
                {/* Header */}
                <div className="p-4 border-b flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://i.pravatar.cc/150?u=1" />
                            <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="text-sm font-bold text-zinc-900">Sarah Miller</h3>
                            <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Online</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-zinc-400 rounded-xl">
                        <MoreHorizontal size={20} />
                    </Button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-8 space-y-6 flex flex-col">
                    <div className="self-center py-2 px-4 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        Today, March 3
                    </div>

                    {/* Received */}
                    <div className="flex gap-3 max-w-[80%]">
                        <Avatar className="h-8 w-8 mt-auto mb-5">
                            <AvatarImage src="https://i.pravatar.cc/150?u=1" />
                            <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <div className="bg-zinc-100 p-4 rounded-2xl rounded-bl-none text-sm text-zinc-800 leading-relaxed shadow-sm">
                                Hey Abdillah! I just finished reading your latest post. The section on concurrent rendering was mind-blowing! 🤯
                            </div>
                            <span className="text-[10px] text-zinc-400 font-medium px-1 leading-none">10:42 PM</span>
                        </div>
                    </div>

                    {/* Sent */}
                    <div className="flex flex-col gap-1 items-end self-end max-w-[80%]">
                        <div className="bg-black text-white p-4 rounded-3xl rounded-br-none text-sm leading-relaxed shadow-lg shadow-zinc-200">
                            Glad you liked it, Sarah! It took me ages to wrap my head around it too. Are you using these patterns in your current project?
                        </div>
                        <div className="flex items-center gap-1.5 px-2">
                            <span className="text-[10px] text-zinc-400 font-medium">10:45 PM</span>
                            <div className="text-[10px] text-zinc-400 font-bold uppercase">Seen</div>
                        </div>
                    </div>
                </div>

                {/* Input */}
                <div className="p-6 bg-zinc-50 border-t">
                    <div className="bg-white border p-2 pl-4 rounded-2xl flex items-center gap-2 focus-within:border-black transition-colors focus-within:ring-2 focus-within:ring-black/5">
                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-black">
                            <ImageIcon size={20} />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-black">
                            <Smile size={20} />
                        </Button>
                        <Input
                            placeholder="Write your message..."
                            className="border-none focus-visible:ring-0 text-sm font-medium"
                        />
                        <Button className="bg-black text-white rounded-xl px-5 h-10 hover:bg-zinc-800 gap-2 font-semibold">
                            <Send size={16} />
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
