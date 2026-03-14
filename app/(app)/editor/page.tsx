"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    ArrowLeft,
    Settings,
    Eye,
    Globe,
    Clock,
    Image as ImageIcon,
    CheckCircle2,
    MoreVertical,
    X,
    Upload
} from "lucide-react";
import Link from "next/link";

import { Editor } from "@/components/modules/editor/Editor";

export default function EditorPage() {
    const [content, setContent] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [coverImage, setCoverImage] = useState<string | null>(null);
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleCoverImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setCoverImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Top Navigation */}
            <header className="fixed top-0 left-0 right-0 h-16 border-b bg-white z-50 flex items-center justify-between px-6">
                <div className="flex items-center gap-6">
                    <Link href="/feed" className="flex items-center gap-2 text-zinc-500 hover:text-black transition-colors font-medium">
                        <ArrowLeft size={18} />
                        Back to Feed
                    </Link>
                    <div className="h-4 w-px bg-zinc-200" />
                    <div className="flex items-center gap-2 text-zinc-400 text-sm">
                        <CheckCircle2 size={16} className="text-green-500" />
                        <span>Saved to drafts</span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="text-zinc-500 hover:text-black font-semibold gap-2">
                        <Eye size={18} />
                        Preview
                    </Button>
                    <Button className="bg-black text-white hover:bg-zinc-800 rounded-full px-8 font-bold text-sm">
                        Publish
                    </Button>
                    <Button variant="ghost" size="icon" className="text-zinc-400">
                        <MoreVertical size={20} />
                    </Button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                {/* Cover Image Section */}
                <div className="mb-12">
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleCoverImageUpload}
                    />

                    {!coverImage ? (
                        <button
                            onClick={() => fileInputRef.current?.click()}
                            className="group w-full h-[300px] rounded-3xl border-2 border-dashed border-zinc-100 hover:border-black hover:bg-zinc-50 transition-all duration-500 flex flex-col items-center justify-center gap-4 text-zinc-400 hover:text-black overflow-hidden relative"
                        >
                            <div className="w-16 h-16 rounded-full bg-zinc-50 group-hover:bg-white transition-colors flex items-center justify-center shadow-sm">
                                <Upload size={24} />
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-sm font-bold uppercase tracking-widest">Add a high resolution cover image</span>
                                <span className="text-xs text-zinc-400">Perfect size: 1200x630px</span>
                            </div>
                        </button>
                    ) : (
                        <div className="relative group w-full h-[450px] rounded-3xl overflow-hidden border border-zinc-100 shadow-2xl">
                            <img
                                src={coverImage}
                                alt="Cover"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                <Button
                                    onClick={() => fileInputRef.current?.click()}
                                    variant="secondary"
                                    className="rounded-full font-bold shadow-2xl"
                                >
                                    Change Image
                                </Button>
                                <Button
                                    onClick={() => setCoverImage(null)}
                                    variant="destructive"
                                    size="icon"
                                    className="rounded-full shadow-2xl"
                                >
                                    <X size={18} />
                                </Button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Topic Input */}
                <div className="space-y-4 mb-12 group">
                    <textarea
                        placeholder="Article Title..."
                        className="w-full text-5xl font-bold border-none focus:ring-0 placeholder:text-zinc-200 resize-none h-auto p-0 overflow-hidden leading-tight bg-transparent focus:outline-none"
                        rows={1}
                        onInput={(e) => {
                            e.currentTarget.style.height = 'auto';
                            e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                        }}
                    />
                </div>

                {/* Tags / Meta */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="flex items-center gap-2 text-zinc-400 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-100 hover:border-black hover:text-black transition-all cursor-pointer">
                        <Globe size={14} />
                        <span className="text-xs font-bold">Public</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-100">
                        <Clock size={14} />
                        <span className="text-xs font-bold uppercase tracking-widest">4 min read</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-black h-auto p-0 font-bold uppercase text-[10px] tracking-widest underline decoration-zinc-200 decoration-2 underline-offset-4">
                        Add Topics
                    </Button>
                </div>

                {/* Dynamic Tiptap Editor */}
                <Editor content={content} onChange={setContent} />
            </main>
        </div>
    );
}
