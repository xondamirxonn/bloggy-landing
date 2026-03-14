"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { MOCK_POSTS, MOCK_USERS } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, Share2, Send } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { FollowButton } from "@/components/ui/follow-button";

export default function PostPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const post = MOCK_POSTS.find(p => p.slug === slug) || MOCK_POSTS[0];
    const authorUser = MOCK_USERS.find(u => u.name === post.author.name);
    const authorId = authorUser ? authorUser.id : 1;

    // Local state for likes
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.likes);

    // Local state for comments
    const [comments, setComments] = useState<{ id: number, user: string, text: string, time: string }[]>([]);
    const [newComment, setNewComment] = useState("");

    // Load from localStorage
    useEffect(() => {
        if (!slug) return;
        const storedLiked = localStorage.getItem(`like_${slug}`);
        if (storedLiked === "true") {
            setLiked(true);
            setLikeCount(post.likes + 1);
        }

        const storedComments = localStorage.getItem(`comments_${slug}`);
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        } else {
            // initial mock comments
            setComments([
                { id: 1, user: "Sarah Miller", text: "Incredible insight! Helped me a lot.", time: "2h ago" },
                { id: 2, user: "John Doe", text: "React 18 features are a game changer.", time: "5h ago" }
            ]);
        }
    }, [slug, post.likes]);

    const handleLike = () => {
        const newLiked = !liked;
        setLiked(newLiked);
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
        localStorage.setItem(`like_${slug}`, newLiked.toString());
    };

    const handleComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const newCommentObj = {
            id: Date.now(),
            user: "You",
            text: newComment,
            time: "Just now"
        };
        const updated = [...comments, newCommentObj];
        setComments(updated);
        setNewComment("");
        localStorage.setItem(`comments_${slug}`, JSON.stringify(updated));
    };

    return (
        <article className="max-w-4xl mx-auto space-y-12 pb-20">
            {/* Header */}
            <header className="space-y-6 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 font-bold tracking-widest uppercase">
                    <span>{post.tag}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black leading-tight max-w-3xl mx-auto">
                    {post.title}
                </h1>
                <p className="text-xl text-zinc-500 font-medium max-w-2xl mx-auto leading-relaxed">
                    {post.description}
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-6 pt-6">
                    <Link href={`/profile/${authorId}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <Avatar className="h-12 w-12 border">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                            <h4 className="font-bold text-black leading-none hover:underline hover:text-blue-600 transition-colors">{post.author.name}</h4>
                            <p className="text-xs text-zinc-500 font-medium mt-1">{post.author.role}</p>
                        </div>
                    </Link>
                    <FollowButton userId={post.author.name} />
                </div>
            </header>

            {/* Cover Image */}
            <div className="relative aspect-[21/9] w-full bg-zinc-100 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image src={post.image} alt={post.title} fill className="object-cover" priority />
            </div>

            {/* Content & Sidebar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                {/* Actions Sidebar */}
                <div className="lg:col-span-2 hidden lg:flex flex-col items-end gap-6 sticky top-24 pt-4 h-fit">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col items-center gap-2 group">
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleLike}
                                className={`h-12 w-12 rounded-full border-zinc-200 transition-all duration-300 ${liked ? 'bg-red-50 border-red-100 text-red-500' : 'text-zinc-500 hover:text-red-500 hover:border-red-500 hover:bg-white'}`}
                            >
                                <Heart size={22} className={liked ? "fill-current" : ""} />
                            </Button>
                            <span className="text-xs font-bold text-zinc-500">{likeCount}</span>
                        </div>

                        <div className="flex flex-col items-center gap-2 group">
                            <Button variant="outline" size="icon" className="h-12 w-12 rounded-full border-zinc-200 text-zinc-500 hover:text-black hover:border-black hover:bg-white transition-all duration-300" onClick={() => {
                                document.getElementById("comments")?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <MessageSquare size={22} />
                            </Button>
                            <span className="text-xs font-bold text-zinc-500">{comments.length + post.comments}</span>
                        </div>

                        <div className="w-8 h-px bg-zinc-200 mx-auto my-2" />

                        <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full text-zinc-400 hover:text-black hover:bg-zinc-100 transition-all duration-300">
                            <Share2 size={22} />
                        </Button>
                    </div>
                </div>

                {/* Article Content */}
                <div className="lg:col-span-8 prose prose-lg prose-zinc max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.description}</p>` }} className="text-zinc-700 leading-loose text-lg" />
                </div>
            </div>

            <hr className="my-12 border-zinc-100" />

            {/* Comments Section */}
            <div className="max-w-3xl mx-auto space-y-8" id="comments">
                <h3 className="text-2xl font-bold">Responses ({comments.length + post.comments})</h3>

                {/* Add Comment */}
                <form onSubmit={handleComment} className="flex gap-4 p-6 bg-zinc-50 border border-zinc-100 rounded-3xl">
                    <Avatar className="h-10 w-10 border border-zinc-200">
                        <AvatarImage src="https://i.pravatar.cc/150?u=you" />
                        <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-4">
                        <Input
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="What are your thoughts?"
                            className="bg-white border-zinc-200 rounded-2xl h-12 focus-visible:ring-black/10"
                        />
                        <div className="flex justify-end">
                            <Button type="submit" disabled={!newComment.trim()} className="rounded-xl px-6 bg-black text-white hover:bg-zinc-800 font-bold tracking-wide">
                                Respond <Send size={16} className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </form>

                {/* Comments List */}
                <div className="space-y-6">
                    {comments.map((comment) => (
                        <div key={comment.id} className="flex gap-4 py-6 border-b last:border-none border-zinc-100">
                            <Avatar className="h-10 w-10 border border-zinc-100">
                                <AvatarImage src={`https://i.pravatar.cc/150?u=${comment.user}`} />
                                <AvatarFallback>{comment.user[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <h5 className="font-bold text-sm text-zinc-900">{comment.user}</h5>
                                    <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{comment.time}</span>
                                </div>
                                <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                                    {comment.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
