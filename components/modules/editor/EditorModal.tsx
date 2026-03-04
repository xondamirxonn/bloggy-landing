"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Editor } from "./Editor";
import { useEditorModal } from "@/providers/EditorProvider";
import { Button } from "@/components/ui/button";
import { X, Upload, ImageIcon, CheckCircle2, Eye, MoreVertical, Globe, Clock, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

export const EditorModal = () => {
    const { editorState, closeEditor, updateEditorState } = useEditorModal();
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleCoverImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                updateEditorState({ coverImage: e.target?.result as string });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Dialog open={editorState.isOpen} onOpenChange={(open) => !open && closeEditor()}>
            <DialogContent showCloseButton={false} className="w-[1400px] max-w-[95vw] sm:max-w-none h-[90vh] p-0 flex flex-col overflow-hidden border-zinc-100 shadow-2xl gap-0">
                <DialogHeader className="sr-only">
                    <DialogTitle>Editor</DialogTitle>
                    <DialogDescription>Create your article</DialogDescription>
                </DialogHeader>

                <header className="h-16 border-b bg-white/80 backdrop-blur-md flex items-center justify-between px-8 shrink-0 z-10 sticky top-0">
                    <div className="flex items-center gap-6">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-zinc-500 hover:text-black font-bold gap-2  transition-all hover:bg-zinc-100"
                            onClick={closeEditor}
                        >
                            <X size={18} />
                            Exit
                        </Button>
                        <div className="h-4 w-px bg-zinc-100" />
                        <div className="flex items-center gap-2 group cursor-default text-zinc-400">
                            <div className={cn(
                                "flex items-center gap-2 transition-all duration-500",
                                editorState.isPreviewMode ? "text-zinc-400" : "text-green-600/60"
                            )}>
                                <CheckCircle2 size={14} className={cn(!editorState.isPreviewMode && "animate-pulse")} />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                                    {editorState.isPreviewMode ? "Read Only" : "Live Sync"}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            variant={editorState.isPreviewMode ? "secondary" : "ghost"}
                            className={cn(
                                "font-bold gap-2  transition-all duration-300",
                                editorState.isPreviewMode ? "bg-black text-white hover:bg-zinc-800" : "text-zinc-500 hover:text-black"
                            )}
                            onClick={() => updateEditorState({ isPreviewMode: !editorState.isPreviewMode })}
                        >
                            {editorState.isPreviewMode ? <X size={18} /> : <Eye size={18} />}
                            {editorState.isPreviewMode ? "Close Preview" : "Preview"}
                        </Button>
                        <Button className="bg-black text-white hover:bg-zinc-800  px-8 font-black text-xs uppercase tracking-widest shadow-lg shadow-zinc-200 transition-all active:scale-95">
                            Publish
                        </Button>
                    </div>
                </header>

                {/* Modal Content Scrollable Area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar bg-white scroll-smooth transition-all duration-500">
                    <main className="max-w-4xl mx-auto py-12 px-6">
                        {editorState.isPreviewMode ? (
                            <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                {editorState.coverImage && (
                                    <div className="w-full h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-100">
                                        <img
                                            src={editorState.coverImage}
                                            alt="Preview Cover"
                                            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                                        />
                                    </div>
                                )}

                                <div className="space-y-6">
                                    <h1 className="text-6xl font-black tracking-tight leading-[1.1] text-zinc-900 italic">
                                        {editorState.title || "Untitled Masterpiece"}
                                    </h1>
                                    <div className="flex items-center gap-4 text-zinc-400">
                                        <div className="flex items-center gap-2 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-100">
                                            <Globe size={14} />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Public</span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-100">
                                            <Clock size={14} />
                                            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">4 min read</span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="tiptap preview-mode text-zinc-800 pb-20"
                                    dangerouslySetInnerHTML={{
                                        __html: editorState.content || "<p class='text-zinc-300 italic'>The ink hasn't touched the page yet...</p>"
                                    }}
                                />
                            </div>
                        ) : (
                            <>
                                {/* Cover Image Section */}
                                <div className="mb-12">
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleCoverImageUpload}
                                    />

                                    {!editorState.coverImage ? (
                                        <button
                                            onClick={() => fileInputRef.current?.click()}
                                            className="group w-full h-[250px] rounded-[12px]  border-2 border-dashed border-zinc-100 hover:border-black hover:bg-zinc-50 transition-all duration-500 flex flex-col items-center justify-center gap-4 text-zinc-400 hover:text-black overflow-hidden"
                                        >
                                            <div className="w-14 h-14 rounded-full bg-zinc-50 group-hover:bg-white transition-colors flex items-center justify-center shadow-sm">
                                                <Upload size={20} />
                                            </div>
                                            <span className="text-sm font-bold uppercase tracking-widest">Add cover image</span>
                                        </button>
                                    ) : (
                                        <div className="relative group w-full h-[400px] overflow-hidden border border-zinc-100 shadow-xl">
                                            <img
                                                src={editorState.coverImage || ""}
                                                alt="Cover"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                                <Button
                                                    onClick={() => fileInputRef.current?.click()}
                                                    variant="secondary"
                                                    className="rounded-full font-bold"
                                                >
                                                    Change
                                                </Button>
                                                <Button
                                                    onClick={() => updateEditorState({ coverImage: null })}
                                                    variant="destructive"
                                                    size="icon"
                                                    className="rounded-full"
                                                >
                                                    <X size={18} />
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Title Section */}
                                <div className="mb-6">
                                    <textarea
                                        placeholder="The story starts here..."
                                        value={editorState.title}
                                        onChange={(e) => updateEditorState({ title: e.target.value })}
                                        className="w-full text-2xl font-bold border-none focus:ring-0 placeholder:text-zinc-100 resize-none h-auto p-0 overflow-hidden leading-[1]  bg-transparent focus:outline-none transition-all duration-500 tracking-tight"
                                        rows={1}
                                        onInput={(e) => {
                                            e.currentTarget.style.height = 'auto';
                                            e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                                        }}
                                    />
                                </div>


                                <Editor
                                    content={editorState.content}
                                    onChange={(val) => updateEditorState({ content: val })}
                                />
                            </>
                        )}
                    </main>
                </div>
            </DialogContent>
        </Dialog >
    );
};
