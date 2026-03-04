import React from "react";
import { AppSidebar } from "@/components/shared/AppSidebar";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-[#FAFAFA]">
            <AppSidebar />
            <main className="flex-1 ml-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
