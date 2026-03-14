"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Search,
  MessageSquare,
  Bell,
  User,
  PenLine
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useEditorModal } from "@/providers/EditorProvider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { Button } from "../ui/button";

const navigation = [
  { name: "Feed", href: "/feed", icon: Home },
  { name: "Explore", href: "/explore", icon: Search },
  { name: "Messages", href: "/messages", icon: MessageSquare },
  // { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Profile", href: "/profile", icon: User },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { openEditor } = useEditorModal();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-20 flex-col border-r bg-white flex items-center py-8 gap-8">
      {/* Logo */}
      <Link href="/feed" className="group">
       <Image src={`/icon.svg`} alt="logo" width={28} height={28} priority />
      </Link>

      {/* Main Nav */}
      <nav className="flex-1 flex flex-col gap-4">
        <TooltipProvider delayDuration={0}>
          {navigation.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Tooltip key={item.name}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "p-3 rounded-2xl transition-all duration-200 group relative",
                      isActive
                        ? "bg-zinc-100 text-black"
                        : "text-zinc-500 hover:bg-zinc-50 hover:text-black"
                    )}
                  >
                    <item.icon size={26} strokeWidth={isActive ? 2.5 : 2} />
                    {isActive && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-black rounded-r-full" />
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{item.name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </TooltipProvider>

        <Separator className="my-2" />

        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
              variant={"ghost"}
                onClick={() => openEditor()}
              >
                <PenLine size={26} strokeWidth={2.5} />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Write Story</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>

    </aside>
  );
}

const Separator = ({ className }: { className?: string }) => (
  <div className={cn("w-8 h-px bg-zinc-100 mx-auto", className)} />
);
