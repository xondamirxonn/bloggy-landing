import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[#EAEAEA] bg-white">
      <div className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 mb-8">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
           <Image src={'/logo-dark.svg'} width={120} height={120} alt="logo-dark" priority />
           
            <p className="text-sm text-[#6B6B6B]">
              Your daily dose of dev writing.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#111111] text-sm">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#6B6B6B] hover:text-[#111111]">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="text-sm text-[#6B6B6B] hover:text-[#111111]">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#111111] text-sm">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#6B6B6B] hover:text-[#111111]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#6B6B6B] hover:text-[#111111]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#6B6B6B] hover:text-[#111111]">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#111111] text-sm">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#6B6B6B] hover:text-[#111111]">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#6B6B6B] hover:text-[#111111]">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#6B6B6B] hover:text-[#111111]">
                  Help center
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#111111] text-sm">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-[#6B6B6B] hover:text-[#111111]">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#6B6B6B] hover:text-[#111111]">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-[#6B6B6B] hover:text-[#111111]">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <Separator className="bg-[#EAEAEA] my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B6B6B]">
            © 2024 Bloggy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" aria-label="Twitter" className="text-[#6B6B6B] hover:text-[#111111]">
              𝕏
            </a>
            <a href="#" aria-label="GitHub" className="text-[#6B6B6B] hover:text-[#111111]">
              GitHub
            </a>
            <a href="#" aria-label="LinkedIn" className="text-[#6B6B6B] hover:text-[#111111]">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}