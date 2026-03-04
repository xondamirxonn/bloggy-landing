"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
    MapPin,
    Link2,
    Calendar,
    Settings,
    Plus,
    Grid,
    Bookmark,
    Activity,
    Github,
    Twitter,
    Linkedin
} from "lucide-react";
import PostCard from "@/components/templates/cards/PostCard";

export default function ProfilePage() {
    return (
        <div className="max-w-6xl mx-auto space-y-8">
            {/* Cover and Profile Info Section */}
            <div className="bg-white border rounded-3xl overflow-hidden shadow-sm">
                {/* Cover Image */}
                <div className="h-48 md:h-64 bg-zinc-200 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* User Stats/Info */}
                <div className="px-8 pb-8">
                    <div className="relative flex flex-col md:flex-row md:items-end gap-6 -mt-16 mb-8">
                        <Avatar className="h-32 w-32 border-4 border-white shadow-lg rounded-3xl">
                            <AvatarImage src="https://i.pravatar.cc/150?u=4" />
                            <AvatarFallback>AX</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 space-y-2">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h1 className="text-3xl font-semibold ">Abdilazizov Xondamir</h1>
                                    <p className="text-muted-foreground    text-xs">@xondamir • Senior Frontend Developer</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Link href="/profile/edit">
                                        <Button className="bg-black text-white hover:bg-zinc-800 rounded-xl px-6 font-bold">
                                            Edit Profile
                                        </Button>
                                    </Link>
                                    <Button variant="outline" size="icon" className="rounded-xl border-zinc-200">
                                        <Settings size={20} />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 items-end lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-6 text-zinc-700 leading-relaxed font-medium">
                            <p className="text-lg">
                                Building open-source tools for the modern web. Obsessed with performance, accessibility, and clean codebases. Currently crafting React components at ScaleDesign. Designing the future of content at Bloggy.
                            </p>

                            <div className="flex flex-wrap gap-4 text-sm text-zinc-500 font-bold uppercase tracking-wider">
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-zinc-300" />
                                    Uzbekistan, Tashkent
                                </div>
                                <div className="flex items-center gap-2">
                                    <Link2 size={16} className="text-zinc-300" />
                                    <a href="#" className="text-black underline decoration-zinc-200 underline-offset-4">xondamirxon.uz</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-zinc-300" />
                                    Joined March 2026
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {["Frontend", "React", "Next.js", "TypeScript", "UI Design", "Open Source"].map(tag => (
                                    <Badge key={tag} className="bg-zinc-50 text-zinc-500 border-zinc-100 px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4 space-y-6 ">


                            <div className="flex justify-between px-2 pt-2">
                                <div className="text-center">
                                    <div className="text-xl font-bold ">128</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-none">Posts</div>
                                </div>
                                <div className="text-center border-x border-zinc-100 px-8">
                                    <div className="text-xl font-bold ">12.4K</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-none">Followers</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl font-bold">842</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-none">Following</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Tabs defaultValue="posts" className="w-full" >
                <TabsList variant={"line"} className="w-full">
                    <TabsTrigger value="posts" >
                        <Grid size={16} />
                        Articles
                    </TabsTrigger>
                    <TabsTrigger value="bookmarks" >
                        <Bookmark size={16} />
                        Saved
                    </TabsTrigger>
                    <TabsTrigger value="activity" >
                        <Activity size={16} />
                        Activity
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="posts" className="pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <PostCard key={i} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
