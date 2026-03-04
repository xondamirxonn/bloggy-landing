"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Camera,
    ChevronLeft,
    Github,
    Globe,
    Linkedin,
    MapPin,
    Twitter,
    Save
} from "lucide-react";

export default function EditProfilePage() {
    const router = useRouter();

    return (
        <div className="max-w-4xl mx-auto pb-20">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={() => router.back()}
                >
                    <ChevronLeft size={24} />
                </Button>
                <div>
                    <h1 className="text-3xl font-bold">Edit Profile</h1>
                    <p className="text-muted-foreground">Manage your public presence and account settings.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left Column - Avatar & Basic */}
                <div className="md:col-span-4 space-y-6">
                    <Card className="border-none shadow-sm bg-white overflow-hidden rounded-3xl">
                        <CardHeader className="pb-0 pt-8">
                            <CardTitle className="text-lg font-semibold text-center">Profile Photo</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col items-center pt-6 pb-8">
                            <div className="relative group">
                                <Avatar className="h-32 w-32 border-4 border-zinc-50 shadow-md transition-transform duration-300 group-hover:scale-105 rounded-3xl">
                                    <AvatarImage src="https://i.pravatar.cc/150?u=4" />
                                    <AvatarFallback>AX</AvatarFallback>
                                </Avatar>
                                <button className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Camera className="text-white" size={24} />
                                </button>
                            </div>
                            <p className="mt-4 text-xs text-zinc-400 text-center px-4">
                                Click image to upload. Recommended: 400x400px JPG or PNG.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm bg-white rounded-3xl">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">Username</CardTitle>
                            <CardDescription>Your unique identifier on Bloggy.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="username" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Handle</Label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 font-medium">@</span>
                                    <Input
                                        id="username"
                                        defaultValue="xondamir"
                                        className="pl-8 bg-zinc-50 border-zinc-100 rounded-xl focus-visible:ring-black h-11"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Detailed Info */}
                <div className="md:col-span-8 space-y-6">
                    <Card className="border-none shadow-sm bg-white rounded-3xl overflow-hidden">
                        <div className="h-32 bg-zinc-100 relative group cursor-pointer overflow-hidden">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-semibold">
                                    <Camera size={16} /> Update Cover
                                </div>
                            </div>
                        </div>
                        <CardHeader className="pt-6">
                            <CardTitle className="text-2xl font-bold">Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="fullname" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Full Name</Label>
                                    <Input
                                        id="fullname"
                                        defaultValue="Abdilazizov Xondamir"
                                        className="bg-zinc-50 border-zinc-100 rounded-xl focus-visible:ring-black h-11"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="occupation" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Occupation</Label>
                                    <Input
                                        id="occupation"
                                        defaultValue="Senior Frontend Developer"
                                        className="bg-zinc-50 border-zinc-100 rounded-xl focus-visible:ring-black h-11"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="bio" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Bio</Label>
                                <Textarea
                                    id="bio"
                                    defaultValue="Building open-source tools for the modern web. Obsessed with performance, accessibility, and clean codebases. Currently crafting React components at ScaleDesign."
                                    className="bg-zinc-50 border-zinc-100 rounded-2xl focus-visible:ring-black resize-none h-32 p-4"
                                />
                                <p className="text-[10px] text-zinc-400 text-right font-medium italic">164 / 280 characters</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Location</Label>
                                    <div className="relative">
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                        <Input
                                            id="location"
                                            defaultValue="Uzbekistan, Tashkent"
                                            className="pl-10 bg-zinc-50 border-zinc-100 rounded-xl focus-visible:ring-black h-11"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="website" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Website</Label>
                                    <div className="relative">
                                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                        <Input
                                            id="website"
                                            defaultValue="xondamirxon.uz"
                                            className="pl-10 bg-zinc-50 border-zinc-100 rounded-xl focus-visible:ring-black h-11"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-zinc-100">
                                <div className="flex items-center justify-between">
                                    <Label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Skills & Interests</Label>
                                    <span className="text-[10px] text-zinc-400 font-medium">Separate with commas</span>
                                </div>
                                <Input
                                    defaultValue="Frontend, React, Next.js, TypeScript, UI Design, Open Source"
                                    placeholder="e.g. React, Design, Photography"
                                    className="bg-zinc-50 border-zinc-100 rounded-xl focus-visible:ring-black h-11"
                                />
                                <div className="flex flex-wrap gap-2 pt-1">
                                    {["Frontend", "React", "Next.js", "TypeScript", "UI Design", "Open Source"].map(tag => (
                                        <div key={tag} className="bg-zinc-100 text-zinc-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                                            {tag}
                                            <button className="hover:text-black">×</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-sm bg-white rounded-3xl">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">Social Profiles</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="github" className="text-xs font-bold uppercase tracking-wider text-zinc-400">GitHub</Label>
                                    <div className="relative">
                                        <Github className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                        <Input
                                            id="github"
                                            placeholder="username"
                                            className="pl-10 bg-zinc-50 border-zinc-100 rounded-xl focus-visible:ring-black h-11"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="twitter" className="text-xs font-bold uppercase tracking-wider text-zinc-400">Twitter</Label>
                                    <div className="relative">
                                        <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                        <Input
                                            id="twitter"
                                            placeholder="username"
                                            className="pl-10 bg-zinc-50 border-zinc-100 rounded-xl focus-visible:ring-black h-11"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="linkedin" className="text-xs font-bold uppercase tracking-wider text-zinc-400">LinkedIn</Label>
                                    <div className="relative">
                                        <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                                        <Input
                                            id="linkedin"
                                            placeholder="profile-id"
                                            className="pl-10 bg-zinc-50 border-zinc-100 rounded-xl focus-visible:ring-black h-11"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="border-t border-zinc-50 pt-6 flex justify-end gap-3">
                            <Button variant="outline" className="rounded-xl px-6 h-11 font-bold border-zinc-200" onClick={() => router.back()}>
                                Cancel
                            </Button>
                            <Button className="bg-black text-white hover:bg-zinc-800 rounded-xl px-8 h-11 font-bold flex items-center gap-2">
                                <Save size={18} /> Save Changes
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
