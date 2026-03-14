"use client";
import React, { useState, useEffect, useRef } from "react";
import PostCard from "@/components/templates/cards/PostCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEditorModal } from "@/providers/EditorProvider";
import { MOCK_POSTS, MOCK_USERS, TRENDING_TAGS } from "@/lib/mock-data";
import { FollowButton } from "@/components/ui/follow-button";
import { Post } from "@/lib/mock-data";
import Link from "next/link";

export default function FeedPage() {
    const { openEditor } = useEditorModal();
    const [searchQuery, setSearchQuery] = useState("");
    const [posts, setPosts] = useState<Post[]>(MOCK_POSTS);
    const loadMoreRef = useRef<HTMLDivElement>(null);

    // Infinite Scroll Implementation
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && searchQuery === "") {
                // Wait briefly to mock network request
                setTimeout(() => {
                    setPosts((prev) => [
                        ...prev,
                        ...MOCK_POSTS.map((p) => ({ ...p, id: p.id + "-" + Date.now() + Math.random() }))
                    ]);
                }, 500);
            }
        }, { threshold: 0.1 });

        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current);
        }

        return () => observer.disconnect();
    }, [searchQuery]);

    // Filter posts
    const displayedPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content: Feed */}
            <div className="lg:col-span-8 space-y-8">
                {/* Header/Greeting */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold tracking-tight text-black">Good evening, Abdillah</h1>
                    <p className="text-zinc-500 text-lg">Here’s what's happening in your network today.</p>
                </div>

                {/* Action Bar */}
                <div className="bg-white border p-4 rounded-2xl flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-zinc-200" />
                    <Button
                        variant="ghost"
                        onClick={() => openEditor()}
                        className="flex-1 justify-start text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50 rounded-xl"
                    >
                        Start a post or share an article...
                    </Button>
                </div>

                {/* Feed Posts */}
                <div className="flex flex-col gap-6">
                    {displayedPosts.length > 0 ? (
                        displayedPosts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))
                    ) : (
                        <div className="p-8 text-center text-zinc-500 font-medium">No posts found matching "{searchQuery}"</div>
                    )}

                    {/* Infinite Scroll Sentinel */}
                    {searchQuery === "" && (
                        <div ref={loadMoreRef} className="py-4 flex justify-center">
                            <span className="text-sm font-bold tracking-widest text-zinc-400 uppercase">Loading more...</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Content: Sidebar */}
            <div className="hidden lg:block lg:col-span-4 space-y-6">
                {/* Search */}
                <div className="bg-white border p-6 rounded-2xl space-y-4 sticky top-4 z-10">
                    <h3 className="font-semibold text-zinc-900 flex items-center gap-2">
                        <Search size={18} />
                        Find people or content
                    </h3>
                    <div className="relative">
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search Bloggy..."
                            className="pl-10 rounded-xl"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
                    </div>
                </div>

                {/* Trending Topics */}
                <div className="bg-white border p-6 rounded-2xl space-y-4">
                    <h3 className="font-semibold text-zinc-900 flex items-center gap-2">
                        <TrendingUp size={18} />
                        Trending Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {TRENDING_TAGS.map(tag => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                onClick={() => setSearchQuery(tag)}
                                className="px-3 py-1 bg-zinc-100 text-zinc-600 hover:bg-black hover:text-white transition-colors cursor-pointer rounded-full font-medium border-none text-xs uppercase tracking-wider"
                            >
                                #{tag}
                            </Badge>
                        ))}
                    </div>
                    <Button variant="link" className="px-0 text-black font-semibold h-auto" onClick={() => setSearchQuery("")}>Clear Filters</Button>
                </div>

                {/* Suggested Follows */}
                <div className="bg-white border p-6 rounded-2xl space-y-4">
                    <h3 className="font-semibold text-zinc-900 flex items-center gap-2">
                        <Users size={18} />
                        Who to follow
                    </h3>
                    <div className="space-y-4">
                        {MOCK_USERS.slice(0, 3).map(user => (
                            <div key={user.id} className="flex items-center justify-between">
                                <Link href={`/profile/${user.id}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
                                    <div className="h-10 w-10 rounded-full bg-zinc-200 overflow-hidden shrink-0">
                                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-sm font-semibold text-zinc-900 truncate hover:underline hover:text-blue-600 transition-colors">{user.name}</h4>
                                        <p className="text-xs text-zinc-500 truncate">{user.role}</p>
                                    </div>
                                </Link>
                                <div className="shrink-0 ml-2">
                                    <FollowButton userId={user.id} />
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
