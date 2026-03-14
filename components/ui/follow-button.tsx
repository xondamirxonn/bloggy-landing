"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function FollowButton({ userId, initialFollowed = false }: { userId: string | number, initialFollowed?: boolean }) {
    const [isFollowed, setIsFollowed] = useState(initialFollowed);

    useEffect(() => {
        const stored = localStorage.getItem(`follow_${userId}`);
        if (stored !== null) {
            setIsFollowed(stored === "true");
        }
    }, [userId]);

    const handleFollow = () => {
        const newState = !isFollowed;
        setIsFollowed(newState);
        localStorage.setItem(`follow_${userId}`, newState.toString());
    };

    return (
        <Button
            size="sm"
            variant={isFollowed ? "default" : "outline"}
            className={`rounded-full font-semibold border-black ${isFollowed ? 'bg-black text-white hover:bg-zinc-800' : 'text-black hover:bg-black hover:text-white'}`}
            onClick={handleFollow}
        >
            {isFollowed ? "Following" : "Follow"}
        </Button>
    );
}
