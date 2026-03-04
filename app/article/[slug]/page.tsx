"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageSquare, Share2, Bookmark, ArrowLeft, MoreHorizontal } from "lucide-react";
import Link from "next/link";

export default function ArticleDetailPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Floating Header */}
            <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-40 border-b flex items-center px-4 md:px-12 justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/feed" className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <div className="h-5 w-px bg-zinc-200 mx-2" />
                    <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="https://i.pravatar.cc/150?u=1" />
                            <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-bold truncate max-w-[150px]">Sarah Miller</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button size="sm" variant="outline" className="rounded-full font-bold px-6 border-black text-black hover:bg-black hover:text-white transition-all">Follow</Button>
                    <Button variant="ghost" size="icon" className="text-zinc-400">
                        <Share2 size={18} />
                    </Button>
                </div>
            </nav>

            {/* Main Content */}
            <article className="pt-32 pb-20 max-w-3xl mx-auto px-6">
                {/* Title & Metadata */}
                <header className="space-y-8 mb-16">
                    <h1 className="text-4xl md:text-6xl font-black text-black leading-tight italic tracking-tight">
                        The Future of Frontend: Why Micro-Interactions Are the New Standard
                    </h1>

                    <div className="flex items-center justify-between py-6 border-y border-zinc-100">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 border-2 border-zinc-100 p-0.5">
                                <AvatarImage src="https://i.pravatar.cc/150?u=1" />
                                <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <div>
                                <Link href="#" className="font-bold text-lg hover:underline decoration-zinc-300">Sarah Miller</Link>
                                <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                                    <span>8 min read</span>
                                    <span>•</span>
                                    <span>March 2, 2026</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="rounded-full text-zinc-400 hover:text-black hover:bg-zinc-50">
                                <Bookmark size={22} />
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full text-zinc-400 hover:text-black hover:bg-zinc-50">
                                <MoreHorizontal size={22} />
                            </Button>
                        </div>
                    </div>
                </header>

                {/* Content Section Placeholder */}
                <div className="prose prose-zinc prose-lg lg:prose-xl max-w-none prose-p:leading-relaxed prose-p:text-zinc-700 prose-headings:font-black prose-headings:italic prose-a:text-black prose-a:font-bold prose-blockquote:border-black prose-blockquote:font-serif prose-blockquote:italic">
                    <p className="text-2xl font-medium text-zinc-500 italic mb-10 leading-snug">
                        In an era where every pixel counts, the difference between a good product and a great one often lies in the small things.
                    </p>

                    <p>
                        Micro-interactions are the subtle, functional animations that occur when a user performs a specific task. They provide feedback, status, and delight. Think of the "heart" button pop on Instagram, the "pull-to-refresh" snap on Twitter, or the smooth transition of a sidebar.
                    </p>

                    <div className="relative aspect-video w-full my-12 overflow-hidden rounded-3xl group">
                        <div className="absolute inset-0 bg-zinc-100 flex items-center justify-center">
                            <div className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Article Cover Illustration</div>
                        </div>
                    </div>

                    <h3>Why focus on details?</h3>
                    <p>
                        Users don't just use apps; they experience them. When an app responds with personality, it builds an emotional connection. This is the hallmark of premium design.
                    </p>

                    <blockquote>
                        "Good design is obvious. Great design is transparent." — Joe Sparano
                    </blockquote>

                    <p>
                        As we move into 2026, the complexity of underlying tech grows, but the user's need for simplicity remain. Micro-interactions bridge that gap by humanizing the machine.
                    </p>
                </div>

                {/* Post-Article Actions */}
                <footer className="mt-20 pt-10 border-t flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-zinc-500 hover:text-black transition-all group">
                            <div className="p-3 bg-zinc-50 rounded-full group-hover:bg-zinc-100 group-hover:scale-110 active:scale-95 transition-all">
                                <Heart size={24} />
                            </div>
                            <span className="font-bold">2.4k</span>
                        </button>
                        <button className="flex items-center gap-2 text-zinc-500 hover:text-black transition-all group">
                            <div className="p-3 bg-zinc-50 rounded-full group-hover:bg-zinc-100 transition-all">
                                <MessageSquare size={24} />
                            </div>
                            <span className="font-bold">142</span>
                        </button>
                    </div>

                    <div className="flex gap-2">
                        <Button variant="outline" className="rounded-full px-6 font-bold shadow-sm">Save for later</Button>
                        <Button className="bg-black text-white rounded-full px-8 font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">Share</Button>
                    </div>
                </footer>
            </article>
        </div>
    );
}
