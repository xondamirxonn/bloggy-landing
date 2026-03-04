"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, Users, Sparkles, Filter, ChevronRight, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PostCard from "@/components/templates/cards/PostCard";

export default function ExplorePage() {
    const categories = [
        { name: "Engineering", count: "1.2k" },
        { name: "Design", count: "842" },
        { name: "AI & ML", count: "2.5k" },
        { name: "Product", count: "630" },
        { name: "Career", count: "420" },
    ];

    return (
        <div className="space-y-12">
            {/* Search & Hero */}
            <section className="relative py-12 px-8 bg-black rounded-[40px] overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800 rounded-full blur-[100px] opacity-40 -mr-20 -mt-20" />
                <div className="relative z-10 max-w-2xl space-y-6">
                    <h1 className="text-5xl font-black text-white italic tracking-tight">Discover stories that <span className="text-zinc-500">matter.</span></h1>
                    <div className="relative group">
                        <Input
                            placeholder="Search by topic, author, or keyword..."
                            className="h-16 pl-14 pr-6 rounded-2xl bg-white/10 border-white/10 text-white placeholder:text-zinc-500 text-lg focus:bg-white/20 transition-all"
                        />
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors" size={24} />
                    </div>
                    <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-zinc-500">
                        <span>Trending:</span>
                        {["#NEXTJS15", "#REACTSERVERCOMPONENTS", "#TAILWINDV4"].map(tag => (
                            <span key={tag} className="text-zinc-300 hover:text-white cursor-pointer transition-colors">{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black italic flex items-center gap-3">
                        <Filter size={24} className="text-zinc-300" />
                        Top Categories
                    </h2>
                    <Button variant="ghost" className="text-zinc-400 hover:text-black font-bold uppercase tracking-widest text-[10px] gap-2">
                        View all categories <ChevronRight size={14} />
                    </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {categories.map((cat) => (
                        <div key={cat.name} className="group cursor-pointer p-6 bg-white border border-zinc-100 rounded-3xl hover:border-black transition-all hover:shadow-xl hover:shadow-zinc-100">
                            <div className="flex flex-col gap-4">
                                <div className="h-10 w-10 bg-zinc-50 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-black">{cat.name}</h3>
                                    <p className="text-xs text-zinc-400 font-bold uppercase tracking-widest">{cat.count} articles</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Main Feed Content */}
                <div className="lg:col-span-8 space-y-8">
                    <h2 className="text-2xl font-black italic flex items-center gap-3">
                        <TrendingUp size={24} className="text-zinc-300" />
                        Trending Stories
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <PostCard key={i} />
                        ))}
                    </div>
                    <div className="flex justify-center pt-8">
                        <Button variant="outline" className="rounded-2xl px-12 h-14 font-black uppercase tracking-widest border-black hover:bg-black hover:text-white transition-all">
                            Load more stories
                        </Button>
                    </div>
                </div>

                {/* Sidebar: Recommended Creators */}
                <div className="lg:col-span-4 space-y-8">
                    <section className="bg-white border rounded-[32px] p-8 space-y-8">
                        <h2 className="text-xl font-black italic flex items-center gap-3">
                            <Users size={22} className="text-zinc-300" />
                            Top Creators
                        </h2>
                        <div className="space-y-6">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="flex items-center justify-between group">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-2xl bg-zinc-100 border border-zinc-100 overflow-hidden group-hover:scale-105 transition-transform">
                                            <img src={`https://i.pravatar.cc/150?u=explore-${i}`} alt="avatar" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black leading-none">Alex Rivera</h4>
                                            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-1 group-hover:text-black transition-colors">Design Engineer</p>
                                        </div>
                                    </div>
                                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 rounded-full border border-zinc-100 hover:bg-black hover:text-white">
                                        <Plus size={16} />
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full h-12 bg-zinc-50 text-zinc-500 hover:bg-black hover:text-white rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all">
                            View list of creators
                        </Button>
                    </section>

                    {/* Newsletter */}
                    <section className="bg-zinc-950 rounded-[32px] p-8 space-y-6 text-white text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/10 to-transparent" />
                        <h3 className="text-xl font-black italic relative z-10">Weekly digest.</h3>
                        <p className="text-sm text-zinc-400 italic font-medium relative z-10">Get the best stories delivered directly to your inbox every Sunday.</p>
                        <div className="space-y-3 relative z-10">
                            <Input placeholder="Email address" className="bg-zinc-900 border-zinc-800 rounded-xl h-12 text-center" />
                            <Button className="w-full h-12 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-xl hover:bg-zinc-200">Subscribe</Button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
