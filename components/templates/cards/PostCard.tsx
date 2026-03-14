"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Post } from "@/lib/mock-data";

interface PostCardProps {
  post?: Post;
}

const formatNumber = (num: number) => {
  if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
  return num.toString();
};

const PostCard = ({ post }: PostCardProps) => {
  // Fallback defaults so it can still safely render if no post prop is provided
  const slug = post?.slug || "sample-post";
  const title = post?.title || "Advanced Component Patterns in React 18";
  const description = post?.description || "Mastering composition, render props, and higher-order components in the era of concurrent rendering.";
  const date = post?.date || "March 2, 2026";
  const readTime = post?.readTime || "8 min read";
  const tag = post?.tag || "FRONTEND";
  const image = post?.image || "/logo-dark.svg";

  const initialLikes = post?.likes ?? 2400;
  const initialComments = post?.comments ?? 142;

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);

  useEffect(() => {
    if (!slug) return;
    const storedLiked = localStorage.getItem(`like_${slug}`);
    if (storedLiked === "true") {
      setLiked(true);
      setLikeCount(initialLikes + 1);
    } else {
      setLiked(false);
      setLikeCount(initialLikes);
    }
  }, [slug, initialLikes]);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newLiked = !liked;
    setLiked(newLiked);
    setLikeCount(newLiked ? initialLikes + 1 : initialLikes);
    localStorage.setItem(`like_${slug}`, newLiked.toString());
  };

  return (
    <Card className="border border-zinc-200 bg-white shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition">
      <Link href={`/post/${slug}`}>
        <div className="relative aspect-16/10 w-full bg-zinc-100 flex items-center justify-center cursor-pointer">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </Link>

      <CardContent className="pt-6">
        <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
          <span className="uppercase">{date}</span>
          <span>•</span>
          <span className="uppercase tracking-wide">{readTime}</span>
        </div>

        <Link href={`/post/${slug}`}>
          <h2 className="text-lg font-semibold mt-3 text-black leading-snug hover:underline cursor-pointer line-clamp-2">
            {title}
          </h2>
        </Link>

        <p className="line-clamp-2 text-zinc-600 text-sm mt-3 leading-relaxed">
          {description}
        </p>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between items-center py-4">
        <div className="flex gap-3">
          <button
            onClick={handleLike}
            className={`flex items-center gap-2 font-medium text-sm transition-colors ${liked ? "text-red-500 hover:text-red-600" : "text-muted-foreground hover:text-black"}`}
          >
            <Heart size={18} className={liked ? "fill-current" : ""} />
            <span>{formatNumber(likeCount)}</span>
          </button>
          <Link href={`/post/${slug}#comments`} className="flex items-center gap-2 font-medium text-muted-foreground hover:text-black text-sm transition-colors">
            <MessageSquare size={18} />
            <span>{typeof initialComments === 'number' ? formatNumber(initialComments) : initialComments}</span>
          </Link>
        </div>
        <div className="font-semibold text-xs tracking-wider text-muted-foreground uppercase">
          #{tag}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
