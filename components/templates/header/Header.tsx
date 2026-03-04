"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled ? "border-b border-[#EAEAEA] bg-white" : "bg-white"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div>
          <Image
            src={"/logo-dark.svg"}
            width={120}
            height={120}
            alt="logo-dark"
            priority
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm text-[#111111] hover:text-[#6B6B6B] transition"
          >
            Features
          </Link>
          <Link
            href="#topics"
            className="text-sm text-[#111111] hover:text-[#6B6B6B] transition"
          >
            Topics
          </Link>

          <Link
            href="#"
            className="text-sm text-[#111111] hover:text-[#6B6B6B] transition"
          >
            Blog
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => router.push(`/auth`)}
            variant="ghost"
            className="text-[#111111] hover:bg-[#F5F5F5]"
          >
            Sign in
          </Button>
          <Button className="bg-[#111111] text-white hover:bg-[#333333]">
            Get started
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#111111]" />
          ) : (
            <Menu className="w-6 h-6 text-[#111111]" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EAEAEA] bg-white px-6 py-4 space-y-4">
          <Link
            href="#features"
            className="block text-sm text-[#111111] hover:text-[#6B6B6B]"
          >
            Features
          </Link>
          <Link
            href="#topics"
            className="block text-sm text-[#111111] hover:text-[#6B6B6B]"
          >
            Topics
          </Link>
          <Link
            href="#pricing"
            className="block text-sm text-[#111111] hover:text-[#6B6B6B]"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="block text-sm text-[#111111] hover:text-[#6B6B6B]"
          >
            Blog
          </Link>
          <Separator className="bg-[#EAEAEA]" />
          <Button
            variant="ghost"
            className="w-full text-[#111111] hover:bg-[#F5F5F5] justify-start"
          >
            Sign in
          </Button>
          <Button className="w-full bg-[#111111] text-white hover:bg-[#333333]">
            Get started
          </Button>
        </div>
      )}
    </header>
  );
}
