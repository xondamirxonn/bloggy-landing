import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, MessageSquare } from "lucide-react";
import Image from "next/image";
import React from "react";

const PostCard = () => {
  return (
    <Card className="border border-zinc-200 bg-white shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition ">
      <div className="relative aspect-16/10 w-full bg-zinc-100 -mt-6">
        <Image
          src="/logo-dark.svg"
          alt="logo-dark"
          fill
          className="object-contain p-10"
          priority
        />
      </div>

      <CardContent className="">
        <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium">
          <span className="uppercase">March 2, 2026</span>
          <span>•</span>
          <span className="uppercase tracking-wide">8 min read</span>
        </div>

        <h2 className="text-lg font-semibold mt-3 text-black leading-snug hover:underline cursor-pointer">
          Advanced Component Patterns in React 18
        </h2>

        <p className="line-clamp-2 text-zinc-600 text-sm mt-3 leading-relaxed">
          Mastering composition, render props, and higher-order components in
          the era of concurrent rendering.
        </p>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between items-center ">
        <div className="flex gap-3">
          <div className="flex items-start gap-2 font-semibold text-muted-foreground text-sm">
            <Heart size={"18px"} />
            <span>2.4k</span>
          </div>
          <div className="flex items-start gap-2 font-semibold text-muted-foreground text-sm">
            <MessageSquare size={"18px"} />
            <span>142</span>
          </div>
        </div>
        <div className="font-medium text-sm text-muted-foreground">
          #FRONTEND
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
