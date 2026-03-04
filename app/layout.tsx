import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import LanguageProvider from "@/providers/LanguageProvider";
import QueryProvider from "@/providers/QueryProvider";
import { EditorProvider } from "@/providers/EditorProvider";
import { EditorModal } from "@/components/modules/editor/EditorModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Bloggy - Your Daily Dose of Dev Writing",
  description:
    "Curated developer blog posts, reading streaks, and a community of 10k+ readers",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <QueryProvider>
          <LanguageProvider>
            <EditorProvider>
              {children}
              <EditorModal />
              <Analytics />
            </EditorProvider>
          </LanguageProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
