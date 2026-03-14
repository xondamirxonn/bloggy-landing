"use client";

import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FollowButton } from "@/components/ui/follow-button";
import { MOCK_USERS } from "@/lib/mock-data";
import Link from "next/link";

type Props = {
    children: React.ReactNode;
    type: "followers" | "following";
    userId?: number | string;
};

export function FollowListSheet({ children, type, userId }: Props) {
    const [open, setOpen] = useState(false);

    // Mock different lists depending on the type, just shuffling the mock users
    const [users] = useState(() => {
        if (type === "followers") {
            return [...MOCK_USERS].sort(() => Math.random() - 0.5).slice(0, 15);
        }
        return [...MOCK_USERS].sort(() => Math.random() - 0.5).slice(0, 8);
    });

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                {children}
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md p-0 flex flex-col h-full bg-white border-none rounded-l-3xl overflow-hidden shadow-2xl">
                <SheetHeader className="p-6 border-b border-zinc-100 sticky top-0 bg-white/80 backdrop-blur-md z-10">
                    <SheetTitle className="text-xl font-bold flex items-center gap-2">
                        {type === "followers" ? "Followers" : "Following"}
                        <span className="text-sm px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-500 font-bold">
                            {users.length}
                        </span>
                    </SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto w-full p-2">
                    {users.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-zinc-400 p-8 text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center mb-2">
                                <span className="text-2xl">📭</span>
                            </div>
                            <p className="font-semibold text-zinc-600">No {type} yet.</p>
                            <p className="text-sm">When people follow this account, they'll show up here.</p>
                        </div>
                    ) : (
                        <div className="space-y-1 w-full">
                            {users.map(user => (
                                <div key={user.id} className="flex items-center justify-between p-4 rounded-2xl hover:bg-zinc-50 w-full transition-colors group cursor-pointer">
                                    <Link href={`/profile/${user.id}`} className="flex items-center gap-4 flex-1 min-w-0 pr-4">
                                        <Avatar className="h-12 w-12 border border-zinc-100 group-hover:border-zinc-200 transition-colors shrink-0">
                                            <AvatarImage src={user.avatar} />
                                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col min-w-0">
                                            <h4 className="text-sm font-bold text-zinc-900 truncate group-hover:text-blue-600 transition-colors">
                                                {user.name}
                                            </h4>
                                            <p className="text-[11px] text-zinc-500 font-medium truncate mt-0.5">
                                                {user.role}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="shrink-0" onClick={(e) => e.stopPropagation()}>
                                        <FollowButton userId={user.id} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
}
