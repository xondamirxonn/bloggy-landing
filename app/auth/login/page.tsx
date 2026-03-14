"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowRight, Github, Chrome } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col justify-center px-8 lg:px-20 bg-white">
                <div className="max-w-md w-full mx-auto space-y-10">
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <div className="h-10 w-10 bg-black rounded-xl flex items-center justify-center text-white font-bold">B</div>
                        </Link>
                        <h1 className="text-4xl font-bold text-black tracking-tight">Welcome back.</h1>
                        <p className="text-zinc-500 font-medium">Continue your journey in the world of content.</p>
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

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-zinc-100" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase tracking-widest">
                            <span className="bg-white px-4 text-zinc-400 font-bold">or use email</span>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 ml-1">Email or Username</label>
                            <Input
                                type="email"
                                placeholder="alex@bloggy.com"
                                className="h-14 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-black/5"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Password</label>
                                <Link href="#" className="text-xs font-bold text-black underline underline-offset-4">Forgot?</Link>
                            </div>
                            <Input
                                type="password"
                                placeholder="••••••••"
                                className="h-14 rounded-2xl bg-zinc-50 border-none focus:ring-2 focus:ring-black/5"
                            />
                        </div>

                        <Button className="w-full h-14 bg-black text-white rounded-2xl font-bold text-lg group hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200">
                            Sign In
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Button>
                    </form>

                    <p className="text-center text-sm font-medium text-zinc-500">
                        Don't have an account?{" "}
                        <Link href="/auth/signup" className="text-black font-bold underline underline-offset-4 decoration-2">Create now</Link>
                    </p>
                </div>
            </div>

            {/* Right Content (Design) */}
            <div className="hidden lg:flex bg-black items-center justify-center relative overflow-hidden p-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-zinc-800 rounded-full blur-[160px] opacity-50" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-zinc-900 rounded-full blur-[100px] opacity-30" />

                <div className="relative z-10 text-white space-y-6">
                    <h2 className="text-6xl font-bold leading-tight">
                        Design is not just what it looks like and feels like. <br />
                        <span className="text-zinc-600">Design is how it works.</span>
                    </h2>
                    <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-zinc-600" />
                        <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">Steve Jobs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
