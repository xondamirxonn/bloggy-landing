import { Card } from "@/components/ui/card";
import { Bookmark, BookOpen, Flame } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Curated feed",
      description:
        "Discover high-quality posts from writers you follow and topics you love.",
    },
    {
      icon: Flame,
      title: "Reading streaks",
      description: "Build consistent learning habits with daily reading challenges.",
    },
    {
      icon: Bookmark,
      title: "Save & share",
      description: "Bookmark posts and share them with your team or community.",
    },
  ];

  return (
    <section id="features" className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-10 md:mb-12">
        <p className="text-xs font-medium tracking-widest uppercase text-[#6B6B6B]">
          Features
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#111111]">
          Everything you need to keep reading daily
        </h2>
        <p className="mt-3 max-w-2xl text-[#6B6B6B] leading-relaxed">
          A clean, curated experience—built for devs who want less noise and more
          useful writing.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card
              key={feature.title}
              className={[
                "group relative overflow-hidden",
                "rounded-[16px] border border-[#EAEAEA] bg-white",
                "p-7 md:p-8",
                "transition-all duration-200",
                "hover:bg-[#F5F5F5]/60 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
                "focus-within:ring-2 focus-within:ring-[#111111]/10",
              ].join(" ")}
            >
              {/* subtle highlight */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[#111111]/[0.04]" />
                <div className="absolute -bottom-28 -left-28 h-60 w-60 rounded-full bg-[#111111]/[0.03]" />
              </div>

              {/* icon badge */}
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-[14px] border border-[#EAEAEA] bg-white transition-colors duration-200 group-hover:bg-[#F5F5F5]">
                <Icon className="h-6 w-6 text-[#111111]" />
              </div>

              <div className="relative mt-5 space-y-2">
                <h3 className="text-lg font-semibold text-[#111111]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6B6B6B]">
                  {feature.description}
                </p>
              </div>

              {/* tiny affordance */}
              <div className="relative mt-6 h-px w-full bg-[#EAEAEA] opacity-70" />
              <div className="relative mt-4 flex items-center gap-2 text-sm font-medium text-[#111111] opacity-80 transition-opacity group-hover:opacity-100">
                <span>Learn more</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}