"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MoreHorizontal, Send, Image as ImageIcon, Smile } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { MOCK_USERS } from "@/lib/mock-data";

interface Message {
    id: number;
    text: string;
    sender: 'me' | 'other';
    time: string;
}

export default function ChatPage() {
    const [activeUser, setActiveUser] = useState(MOCK_USERS[0]);
    const [messages, setMessages] = useState<Record<number, Message[]>>({});
    const [newMessage, setNewMessage] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const stored = localStorage.getItem('chat_messages');
        if (stored) {
            setMessages(JSON.parse(stored));
        } else {
            // Initial mock data
            setMessages({
                [MOCK_USERS[0].id]: [
                    { id: 1, text: "Hey! I loved your recent article on React.", sender: 'other', time: "10:42 PM" },
                    { id: 2, text: "Glad you liked it! It took me ages to wrap my head around it too.", sender: 'me', time: "10:45 PM" }
                ]
            });
        }
    }, []);

    const saveMessages = (newMessages: Record<number, Message[]>) => {
        setMessages(newMessages);
        localStorage.setItem('chat_messages', JSON.stringify(newMessages));
    };

    const handleSend = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!newMessage.trim()) return;

        const currentChat = messages[activeUser.id] || [];
        const msg: Message = {
            id: Date.now(),
            text: newMessage,
            sender: 'me',
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        const updated = {
            ...messages,
            [activeUser.id]: [...currentChat, msg]
        };
        saveMessages(updated);
        setNewMessage("");
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, activeUser.id]);

    const activeMessages = messages[activeUser.id] || [];

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
                    {MOCK_USERS.map((user, index) => {
                        const isSelected = activeUser.id === user.id;
                        const userMsgs = messages[user.id] || [];
                        const lastMsg = userMsgs.length > 0 ? userMsgs[userMsgs.length - 1] : null;

                        return (
                            <div
                                key={user.id}
                                onClick={() => setActiveUser(user)}
                                className={cn(
                                    "p-4 flex items-center gap-3 cursor-pointer transition-colors border-b last:border-none",
                                    isSelected ? "bg-white border-l-4 border-l-black" : "hover:bg-zinc-100/50"
                                )}
                            >
                                <div className="relative">
                                    <Avatar className="h-12 w-12 border">
                                        <AvatarImage src={user.avatar} />
                                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                                    </Avatar>
                                    {index % 2 === 0 && (
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-center mb-0.5">
                                        <h4 className="text-sm font-semibold text-zinc-900 truncate">{user.name}</h4>
                                        <span className="text-[10px] text-zinc-400 font-medium whitespace-nowrap">{lastMsg ? lastMsg.time : 'New'}</span>
                                    </div>
                                    <p className="text-xs text-zinc-500 truncate">
                                        {lastMsg ? (lastMsg.sender === 'me' ? `You: ${lastMsg.text}` : lastMsg.text) : "Start a conversation..."}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col bg-white overflow-hidden">
                {/* Header */}
                <div className="p-4 border-b flex items-center justify-between px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-10 shrink-0">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={activeUser.avatar} />
                            <AvatarFallback>{activeUser.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="text-sm font-bold text-zinc-900">{activeUser.name}</h3>
                            <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider">Online</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-zinc-400 rounded-xl">
                        <MoreHorizontal size={20} />
                    </Button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-8 space-y-6 flex flex-col min-h-0">
                    <div className="self-center py-2 px-4 rounded-full bg-zinc-100 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                        Today
                    </div>

                    {activeMessages.map((msg) => (
                        <div key={msg.id} className={cn("flex gap-3 max-w-[80%]", msg.sender === 'me' ? "self-end items-end flex-col" : "self-start")}>
                            {msg.sender === 'other' && (
                                <Avatar className="h-8 w-8 mt-auto mb-5">
                                    <AvatarImage src={activeUser.avatar} />
                                    <AvatarFallback>{activeUser.name[0]}</AvatarFallback>
                                </Avatar>
                            )}
                            <div className={cn("space-y-1", msg.sender === 'me' ? "flex flex-col items-end" : "")}>
                                <div className={cn(
                                    "p-4 text-sm leading-relaxed shadow-sm",
                                    msg.sender === 'me'
                                        ? "bg-black text-white rounded-3xl rounded-br-none shadow-zinc-200"
                                        : "bg-zinc-100 text-zinc-800 rounded-2xl rounded-bl-none"
                                )}>
                                    {msg.text}
                                </div>
                                <div className="flex items-center gap-1.5 px-2">
                                    <span className="text-[10px] text-zinc-400 font-medium">{msg.time}</span>
                                    {msg.sender === 'me' && <div className="text-[10px] text-zinc-400 font-bold uppercase">Seen</div>}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-6 bg-zinc-50 border-t shrink-0">
                    <form onSubmit={handleSend} className="bg-white border p-2 pl-4 rounded-2xl flex items-center gap-2 focus-within:border-black transition-colors focus-within:ring-2 focus-within:ring-black/5">
                        <Button type="button" variant="ghost" size="icon" className="text-zinc-400 hover:text-black">
                            <ImageIcon size={20} />
                        </Button>
                        <Button type="button" variant="ghost" size="icon" className="text-zinc-400 hover:text-black">
                            <Smile size={20} />
                        </Button>
                        <Input
                            placeholder="Write your message..."
                            className="border-none focus-visible:ring-0 text-sm font-medium"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                        />
                        <Button type="submit" disabled={!newMessage.trim()} className="bg-black text-white rounded-xl px-5 h-10 hover:bg-zinc-800 gap-2 font-semibold">
                            <Send size={16} />
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
