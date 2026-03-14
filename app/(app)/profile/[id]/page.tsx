"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    MapPin,
    Link2,
    Calendar,
    Grid,
    User,
    Briefcase,
    GraduationCap,
    Trophy,
    Languages,
    FileText,
    Award
} from "lucide-react";
import PostCard from "@/components/templates/cards/PostCard";
import { MOCK_POSTS, MOCK_USERS } from "@/lib/mock-data";
import { FollowListSheet } from "@/components/ui/follow-list-sheet";
import { FollowButton } from "@/components/ui/follow-button";
import { useParams, notFound } from "next/navigation";

export default function UserProfilePage() {
    const params = useParams();
    const id = params?.id as string;
    const user = MOCK_USERS.find((u) => u.id.toString() === id);

    if (!user) {
        return notFound();
    }

    // Filter posts for this specific user
    const userPosts = MOCK_POSTS.filter((post) => post.author.name === user.name);

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
                            <AvatarImage src={user.avatar} />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 space-y-2">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <h1 className="text-3xl font-semibold ">{user.name}</h1>
                                    <p className="text-muted-foreground text-xs">@{user.name.split(' ').join('').toLowerCase()} • {user.role}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FollowButton userId={user.id} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 items-end lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8 space-y-6 text-zinc-700 leading-relaxed font-medium">
                            <p className="text-lg">
                                Building amazing software with a passion for clean code and great user experiences. Check out my articles on Bloggy, covering everything from UI/UX design to advanced React architectures.
                            </p>

                            <div className="flex flex-wrap gap-4 text-sm text-zinc-500 font-medium tracking-wider">
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-zinc-300" />
                                    Global, Earth
                                </div>
                                <div className="flex items-center gap-2">
                                    <Link2 size={16} className="text-zinc-300" />
                                    <a href="#" className="text-blue-500 underline decoration-zinc-200 underline-offset-4">{user.name.toLowerCase().replace(' ', '')}.com</a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} className="text-zinc-300" />
                                    Joined February 2026
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {["Frontend", "React", "Next.js", "Design", "Open Source"].map(tag => (
                                    <Badge key={tag} className="bg-zinc-50 text-zinc-500 border-zinc-100 px-4 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-4 space-y-6 ">
                            <div className="flex justify-between px-2 pt-2">
                                <div className="text-center">
                                    <div className="text-xl font-bold ">{userPosts.length}</div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-none">Posts</div>
                                </div>
                                <div className="border-x border-zinc-100 px-8">
                                    <FollowListSheet type="followers" userId={user.id}>
                                        <div className="text-center cursor-pointer hover:bg-zinc-50 p-2 rounded-xl transition-colors">
                                            <div className="text-xl font-bold ">1.2K</div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-none">Followers</div>
                                        </div>
                                    </FollowListSheet>
                                </div>
                                <div>
                                    <FollowListSheet type="following" userId={user.id}>
                                        <div className="text-center cursor-pointer hover:bg-zinc-50 p-2 rounded-xl transition-colors">
                                            <div className="text-xl font-bold">142</div>
                                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-none">Following</div>
                                        </div>
                                    </FollowListSheet>
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
                    <TabsTrigger value="about" >
                        <User size={16} />
                        About Author
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="posts" className="pt-8">
                    {userPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {userPosts.map(post => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 text-zinc-500 font-medium bg-white rounded-3xl border border-zinc-100">
                            No articles published yet.
                        </div>
                    )}
                </TabsContent>
                <TabsContent value="about" className="pt-8 space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content (Left) */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Summary */}
                            <section className="bg-white border rounded-3xl p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 bg-zinc-50 rounded-xl">
                                        <FileText size={20} className="text-zinc-600" />
                                    </div>
                                    <h3 className="text-xl font-bold">Summary</h3>
                                </div>
                                <p className="text-zinc-600 leading-relaxed">
                                    Passionate {user.role} dedicated to creating intuitive user experiences and maintainable codebases. Active contributor to the open-source community.
                                </p>
                            </section>

                            {/* Experience */}
                            <section className="bg-white border rounded-3xl p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-2.5 bg-zinc-50 rounded-xl">
                                        <Briefcase size={20} className="text-zinc-600" />
                                    </div>
                                    <h3 className="text-xl font-bold">Experience</h3>
                                </div>
                                <div className="space-y-8">
                                    {[
                                        {
                                            role: user.role,
                                            company: "Awesome Tech Inc.",
                                            period: "2023 - Present",
                                            desc: "Leading the team in developing modern web solutions."
                                        }
                                    ].map((exp, idx) => (
                                        <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-zinc-100 last:before:hidden">
                                            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-500 shadow-[0_0_0_4px_rgba(244,244,245,1)]" />
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                                <h4 className="font-bold text-zinc-900">{exp.role}</h4>
                                                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{exp.period}</span>
                                            </div>
                                            <p className="text-sm font-semibold text-zinc-500 mb-2">{exp.company}</p>
                                            <p className="text-sm text-zinc-600 leading-relaxed">{exp.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar (Right) */}
                        <div className="space-y-8">
                            {/* Achievements */}
                            <section className="bg-white border rounded-3xl p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2.5 bg-zinc-50 rounded-xl">
                                        <Trophy size={20} className="text-zinc-600" />
                                    </div>
                                    <h3 className="text-lg font-bold">Achievements</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Speaker at Tech Conferences",
                                        "Open Source Contributor",
                                        "Published Author"
                                    ].map((achievement, idx) => (
                                        <li key={idx} className="flex gap-3 text-sm text-zinc-600 leading-relaxed">
                                            <Award size={16} className="text-zinc-400 shrink-0 mt-0.5" />
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
