"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Github, Chrome, Star } from "lucide-react";

export default function SignupPage() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content (Design) */}
            <div className="hidden lg:flex bg-[#0A0A0A] items-center justify-center relative overflow-hidden p-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-zinc-800 rounded-full blur-[160px] opacity-20" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-zinc-900 rounded-full blur-[100px] opacity-20" />

                <div className="relative z-10 text-white space-y-12 max-w-lg">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-zinc-800/50 border border-zinc-700 rounded-full px-4 py-1">
                            <Star size={14} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Join 10k+ Creators</span>
                        </div>
                        <h2 className="text-6xl font-bold leading-tight">
                            Every story starts with a single <span className="text-zinc-600">click.</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                            Start publishing, connecting, and growing on the world's most minimalistic content platform.
                        </p>
                    </div>

                    <div className="flex items-center gap-8 border-t border-zinc-800 pt-8">
                        <div>
                            <div className="text-3xl font-bold">5M+</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Monthly Reads</div>
                        </div>
                        <div className="h-8 w-px bg-zinc-800" />
                        <div>
                            <div className="text-3xl font-bold">100+</div>
                            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Countries</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Content Form */}
            <div className="flex flex-col justify-center px-8 lg:px-20 bg-white">
                <div className="max-w-md w-full mx-auto space-y-10">
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <div className="h-10 w-10 bg-black rounded-xl flex items-center justify-center text-white font-bold">B</div>
                        </Link>
                        <h1 className="text-4xl font-bold text-black tracking-tight">Create your home.</h1>
                        <p className="text-zinc-500 font-medium">Beautifully simple, powerfully functional.</p>
                    </div>

                    <form className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Full Name</label>
                                <Input placeholder="John Doe" className="h-14 rounded-2xl bg-zinc-50 border-none px-5" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Username</label>
                                <Input placeholder="johndoe" className="h-14 rounded-2xl bg-zinc-50 border-none px-5" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Email</label>
                            <Input type="email" placeholder="alex@example.com" className="h-14 rounded-2xl bg-zinc-50 border-none px-5" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-400 ml-1">Password</label>
                            <Input type="password" placeholder="••••••••" className="h-14 rounded-2xl bg-zinc-50 border-none px-5" />
                        </div>

                        <Button className="w-full h-14 bg-black text-white rounded-2xl font-bold text-lg group hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200 mt-4">
                            Get Started
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Button>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-zinc-100" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase tracking-widest">
                            <span className="bg-white px-4 text-zinc-400 font-bold">or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-14 rounded-2xl gap-3 font-semibold border-zinc-200">
                            <Chrome size={20} />
                            Google
                        </Button>
                        <Button variant="outline" className="h-14 rounded-2xl gap-3 font-semibold border-zinc-200">
                            <Github size={20} />
                            GitHub
                        </Button>
                    </div>

                    <p className="text-center text-sm font-medium text-zinc-500">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="text-black font-bold underline underline-offset-4 decoration-2">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
