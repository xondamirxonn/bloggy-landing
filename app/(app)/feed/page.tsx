"use client";
import PostCard from "@/components/templates/cards/PostCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEditorModal } from "@/providers/EditorProvider";

export default function FeedPage() {
    const { openEditor } = useEditorModal();

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
                    {[1, 2, 3, 4].map((i) => (
                        <PostCard key={i} />
                    ))}
                </div>
            </div>

            {/* Right Content: Sidebar */}
            <div className="hidden lg:block lg:col-span-4 space-y-6">
                {/* Search */}
                <div className="bg-white border p-6 rounded-2xl space-y-4">
                    <h3 className="font-semibold text-zinc-900 flex items-center gap-2">
                        <Search size={18} />
                        Find people or content
                    </h3>
                    <div className="relative">
                        <Input placeholder="Search Bloggy..." className="pl-10 rounded-xl" />
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
                        {["Next.js", "AI", "TailwindCSS", "Postgres", "Python", "React Native", "UI Design"].map(tag => (
                            <Badge key={tag} variant="secondary" className="px-3 py-1 bg-zinc-100 text-zinc-600 hover:bg-black hover:text-white transition-colors cursor-pointer rounded-full font-medium border-none text-xs uppercase tracking-wider">
                                #{tag}
                            </Badge>
                        ))}
                    </div>
                    <Button variant="link" className="px-0 text-black font-semibold h-auto">View all topics</Button>
                </div>

                {/* Suggested Follows */}
                <div className="bg-white border p-6 rounded-2xl space-y-4">
                    <h3 className="font-semibold text-zinc-900 flex items-center gap-2">
                        <Users size={18} />
                        Who to follow
                    </h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-zinc-200" />
                                    <div>
                                        <h4 className="text-sm font-semibold text-zinc-900">John Doe</h4>
                                        <p className="text-xs text-zinc-500">Fullstack Engineer</p>
                                    </div>
                                </div>
                                <Button size="sm" variant="outline" className="rounded-full font-semibold border-black text-black hover:bg-black hover:text-white">Follow</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
