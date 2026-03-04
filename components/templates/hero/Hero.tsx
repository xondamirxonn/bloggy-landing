import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const mockPosts = [
  {
    id: 1,
    title: "Building Fast APIs with Node.js",
    tag: "Backend",
    readTime: "8 min",
    avatar: "👨‍💻",
  },
  {
    id: 2,
    title: "React 19 Compiler Deep Dive",
    tag: "React",
    readTime: "12 min",
    avatar: "👩‍💻",
  },
  {
    id: 3,
    title: "CSS Container Queries Explained",
    tag: "CSS",
    readTime: "6 min",
    avatar: "🧑‍💻",
  },
  {
    id: 4,
    title: "Kubernetes for Beginners",
    tag: "DevOps",
    readTime: "15 min",
    avatar: "👨‍💼",
  },
  {
    id: 5,
    title: "LLMs and Vector Databases",
    tag: "AI",
    readTime: "10 min",
    avatar: "👩‍🔬",
  },
  {
    id: 6,
    title: "Next.js 16 Performance Tips",
    tag: "Next.js",
    readTime: "9 min",
    avatar: "🧑‍🚀",
  },
];

export function HeroSection() {
  return (
    <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-[#111111] leading-tight">
            Your daily dose of dev writing.
          </h1>
          <p className="text-lg text-[#6B6B6B] max-w-md">
            Curated posts from top writers. Build reading streaks. Save your
            favorites. Never miss important updates in your community.
          </p>

          {/* Social Proof */}
          <div className="flex items-center gap-6 text-sm text-[#6B6B6B] pt-4">
            <span>10k+ readers</span>
            <span>•</span>
            <span>500+ writers</span>
            <span>•</span>
            <span>Weekly digest</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button className="bg-[#111111] text-white hover:bg-[#333333] h-12 px-8">
              Get started free
            </Button>
            <Button
              variant="outline"
              className="border border-[#EAEAEA] text-[#111111] hover:bg-[#F5F5F5] h-12 px-8"
            >
              Explore trending posts
            </Button>
          </div>
        </div>

        {/* Right Visual - Card Grid */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-4 relative">
            {mockPosts.slice(0, 6).map((post) => (
              <Card
                key={post.id}
                className="p-4 border border-[#EAEAEA] rounded-[14px] hover:bg-[#F5F5F5] transition cursor-pointer"
              >
                <div className="space-y-3">
                  <p className="text-sm font-medium text-[#111111] line-clamp-2">
                    {post.title}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-[#F5F5F5] text-[#111111] text-xs"
                    >
                      {post.tag}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#EAEAEA]">
                    <span className="text-xs text-[#6B6B6B]">
                      {post.readTime}
                    </span>
                    <span className="text-lg">{post.avatar}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {/* Subtle gradient highlight */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white opacity-10 pointer-events-none rounded-lg" />
        </div>
      </div>
    </section>
  );
}
