"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Bell,
    Heart,
    MessageSquare,
    UserPlus,
    Bookmark,
    Settings,
    MoreHorizontal,
    Check,
    Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const notifications = [
    {
        type: "like",
        user: { name: "Sarah Miller", avatar: "1" },
        target: "The Future of Frontend...",
        time: "2m ago",
        unread: true,
    },
    {
        type: "follow",
        user: { name: "Mark Wilson", avatar: "2" },
        time: "45m ago",
        unread: true,
    },
    {
        type: "comment",
        user: { name: "Jennifer Lee", avatar: "3" },
        comment: "This is a game changer for our team!",
        target: "Clean Code in 2026",
        time: "2h ago",
        unread: false,
    },
    {
        type: "mention",
        user: { name: "David Chen", avatar: "4" },
        target: "Architecture Weekly",
        time: "5h ago",
        unread: false,
    },
    {
        type: "read_milestone",
        milestone: "10,000 views",
        target: "React Patterns",
        time: "Yesterday",
        unread: false,
    }
];

export default function NotificationsPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <Bell size={28} className="text-zinc-300" />
                        Activity
                    </h1>
                    <p className="text-zinc-500 text-sm font-medium">You’ve had 12 new interactions today.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-black font-bold uppercase tracking-widest text-[10px] gap-2">
                        <Check size={14} /> Mark all as read
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-xl border-zinc-200 h-9 w-9">
                        <Settings size={18} />
                    </Button>
                </div>
            </div>

            {/* Tabs / Filter */}
            <div className="flex items-center gap-2 p-1 bg-zinc-100/50 border rounded-2xl w-fit">
                {["All Activity", "Mentions", "Followers", "Posts"].map((tab, i) => (
                    <button
                        key={tab}
                        className={cn(
                            "px-6 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all",
                            i === 0 ? "bg-white text-black shadow-sm" : "text-zinc-400 hover:text-black"
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="bg-white border rounded-[32px] overflow-hidden shadow-sm">
                {notifications.map((notif, i) => (
                    <div
                        key={i}
                        className={cn(
                            "p-6 flex gap-6 hover:bg-zinc-50 transition-colors border-b last:border-none relative group",
                            notif.unread && "before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-black"
                        )}
                    >
                        {/* Icon Column */}
                        <div className="relative">
                            <Avatar className="h-12 w-12 rounded-2xl border">
                                <AvatarImage src={`https://i.pravatar.cc/150?u=notif-${i}`} />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            <div className={cn(
                                "absolute -bottom-1 -right-1 w-6 h-6 rounded-lg flex items-center justify-center border-2 border-white text-white shadow-sm",
                                notif.type === 'like' && "bg-rose-500",
                                notif.type === 'follow' && "bg-blue-500",
                                notif.type === 'comment' && "bg-emerald-500",
                                notif.type === 'mention' && "bg-amber-500",
                                notif.type === 'read_milestone' && "bg-black"
                            )}>
                                {notif.type === 'like' && <Heart size={12} fill="currentColor" />}
                                {notif.type === 'follow' && <UserPlus size={12} />}
                                {notif.type === 'comment' && <MessageSquare size={12} fill="currentColor" />}
                                {notif.type === 'mention' && <Zap size={12} fill="currentColor" />}
                                {notif.type === 'read_milestone' && <TrendingUp size={12} />}
                            </div>
                        </div>

                        {/* Content Column */}
                        <div className="flex-1 space-y-2">
                            <div className="flex justify-between items-start">
                                <p className="text-sm leading-relaxed text-zinc-600">
                                    {notif.user && <span className="text-black font-bold">{notif.user.name}</span>}
                                    {notif.type === 'like' && " liked your article "}
                                    {notif.type === 'follow' && " started following you."}
                                    {notif.type === 'comment' && " commented on "}
                                    {notif.type === 'mention' && " mentioned you in "}
                                    {notif.type === 'read_milestone' && `Your article reached a milestone of ${notif.milestone} on `}
                                    {notif.target && <span className="text-black font-bold underline decoration-zinc-100 underline-offset-4">{notif.target}</span>}
                                </p>
                                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest whitespace-nowrap">{notif.time}</span>
                            </div>

                            {notif.comment && (
                                <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 text-sm text-zinc-500 font-medium">
                                    "{notif.comment}"
                                </div>
                            )}

                            {notif.type === 'follow' && (
                                <div className="flex gap-2">
                                    <Button size="sm" className="bg-black text-white hover:bg-zinc-800 rounded-xl h-9 px-6 font-bold text-xs">Follow back</Button>
                                    <Button size="sm" variant="outline" className="rounded-xl h-9 px-6 font-bold text-xs text-zinc-500 border-zinc-200">View profile</Button>
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 h-8 w-8 rounded-full">
                            <MoreHorizontal size={16} />
                        </Button>
                    </div>
                ))}
            </div>

            {/* Suggested Reading (to keep things social) */}
            <div className="pt-8 border-t space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">While you're here</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-[24px] flex items-center gap-4 group cursor-pointer hover:bg-black hover:text-white transition-all">
                        <div className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-zinc-400 group-hover:bg-zinc-800 group-hover:text-white transition-all">
                            <Bookmark size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold leading-none">Complete your library</h4>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mt-1">12 unread bookmarks</p>
                        </div>
                    </div>
                    <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-[24px] flex items-center gap-4 group cursor-pointer hover:bg-black hover:text-white transition-all">
                        <div className="h-10 w-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-zinc-400 group-hover:bg-zinc-800 group-hover:text-white transition-all">
                            <Share2 size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-bold leading-none">Share your streak</h4>
                            <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 mt-1">14 day writing streak</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Share2 = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
);

const TrendingUp = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
);
