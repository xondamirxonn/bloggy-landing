"use client";
import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Search,
    TrendingUp,
    Users,
    Sparkles,
    Filter,
    ChevronRight,
    Plus,
    Code,
    Palette,
    Cpu,
    Briefcase,
    Zap
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PostCard from "@/components/templates/cards/PostCard";
import { MOCK_POSTS, MOCK_USERS, TRENDING_TAGS, Post } from "@/lib/mock-data";
import { FollowButton } from "@/components/ui/follow-button";
import Link from "next/link";

export default function ExplorePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
    const loadMoreRef = useRef<HTMLDivElement>(null);

    const categories = [
        { name: "Engineering", count: "1.2k", icon: <Code size={20} />, color: "bg-blue-50 text-blue-600" },
        { name: "Design", count: "842", icon: <Palette size={20} />, color: "bg-pink-50 text-pink-600" },
        { name: "AI & ML", count: "2.5k", icon: <Cpu size={20} />, color: "bg-purple-50 text-purple-600" },
        { name: "Product", count: "630", icon: <Briefcase size={20} />, color: "bg-orange-50 text-orange-600" },
        { name: "Career", count: "420", icon: <Zap size={20} />, color: "bg-yellow-50 text-yellow-600" },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && searchQuery === "") {
                setTimeout(() => {
                    setPosts((prev) => [
                        ...prev,
                        ...MOCK_POSTS.map((p) => ({ ...p, id: p.id + "-" + Date.now() + Math.random() }))
                    ]);
                }, 500);
            }
        }, { threshold: 0.1 });

        if (loadMoreRef.current) observer.observe(loadMoreRef.current);
        return () => observer.disconnect();
    }, [searchQuery]);

    const displayedPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-12 pb-20">
            {/* Search & Hero Section */}
            <section className="relative overflow-hidden bg-zinc-900 rounded-[40px] p-8 md:p-16 text-white text-center space-y-8">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[140%] bg-blue-600 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[140%] bg-purple-600 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Discover the best of <span className="text-zinc-400">Bloggy</span>
                    </h1>
                    <p className="text-zinc-400 text-lg font-medium">
                        Search through thousands of articles from the world's most creative minds.
                    </p>

                    <div className="relative group max-w-xl mx-auto">
                        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-white transition-colors">
                            <Search size={22} />
                        </div>
                        <Input
                            type="text"
                            placeholder="Search articles, topics, or authors..."
                            className="h-16 pl-14 pr-24 bg-white/10 border-white/10 text-white placeholder:text-zinc-500 rounded-2xl focus:ring-2 focus:ring-white/20 transition-all text-lg backdrop-blur-md"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="absolute inset-y-2 right-2 flex items-center">
                            <Button className="h-12 px-6 rounded-xl bg-white text-black hover:bg-zinc-200 transition-colors font-bold shadow-lg">
                                Search
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                        <span className="text-sm text-zinc-500 font-bold mr-2 uppercase tracking-widest text-[10px]">Trending:</span>
                        {TRENDING_TAGS.slice(0, 4).map(tag => (
                            <button key={tag} onClick={() => setSearchQuery(tag)} className="text-xs font-bold px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all text-zinc-300">
                                #{tag}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            {searchQuery === "" && (
                <section className="space-y-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-3xl font-bold text-zinc-900 leading-none">Top Categories</h2>
                            <p className="text-zinc-500 font-medium mt-2">Explore articles by topic</p>
                        </div>
                        <Button variant="ghost" className="text-zinc-400 hover:text-black font-bold uppercase tracking-widest text-[10px] gap-2">
                            View all <ChevronRight size={14} />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {categories.map((cat) => (
                            <div key={cat.name} onClick={() => setSearchQuery(cat.name)} className="group cursor-pointer p-8 bg-white border border-zinc-100 rounded-[32px] hover:border-black transition-all hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1">
                                <div className="space-y-6">
                                    <div className={`h-14 w-14 ${cat.color} rounded-2xl flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300`}>
                                        {cat.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-1">{cat.name}</h3>
                                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{cat.count} articles</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Content: Trending Stories */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-10 w-1 bg-black rounded-full" />
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            {searchQuery ? `Search Results for "${searchQuery}"` : "Trending Stories"}
                        </h2>
                    </div>

                    {displayedPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {displayedPosts.map(post => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 text-center text-zinc-500 font-medium">No results found mapping your search.</div>
                    )}

                    {searchQuery === "" && (
                        <div ref={loadMoreRef} className="flex justify-center pt-8">
                            <span className="text-sm font-bold tracking-widest text-zinc-400 uppercase">Loading more stories...</span>
                        </div>
                    )}
                </div>

                {/* Sidebar: Top Creators */}
                <div className="lg:col-span-4 space-y-8">
                    <section className="bg-white border border-zinc-100 rounded-[40px] p-10 space-y-10 sticky top-24">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold text-black flex items-center gap-3">
                                Top Creators
                            </h2>
                            <p className="text-zinc-500 font-medium text-sm">Most influential writers this month</p>
                        </div>

                        <div className="space-y-8">
                            {MOCK_USERS.slice(0, 5).map(user => (
                                <div key={user.id} className="flex items-center justify-between group">
                                    <Link href={`/profile/${user.id}`} className="flex items-center gap-4 flex-1">
                                        <div className="h-14 w-14 rounded-2xl bg-zinc-100 border border-zinc-100 overflow-hidden ring-4 ring-transparent group-hover:ring-zinc-50 transition-all duration-300">
                                            <img
                                                src={user.avatar}
                                                alt={user.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black text-lg leading-tight group-hover:text-blue-600 transition-colors cursor-pointer">
                                                {user.name}
                                            </h4>
                                            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1">
                                                {user.role}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
                                        <FollowButton userId={user.id} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button className="w-full h-14 bg-zinc-50 text-zinc-900 hover:bg-black hover:text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all border border-zinc-100">
                            View all creators
                        </Button>
                    </section>
                </div>
            </div>
        </div>
    );
}

