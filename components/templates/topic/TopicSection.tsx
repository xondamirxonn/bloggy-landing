"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const topics = [
  "JavaScript",
  "React",
  "Next.js",
  "CSS",
  "DevOps",
  "AI",
  "TypeScript",
  "Node.js",
  "Web Performance",
  "Testing",
];
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
export function TopicsSection() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  // Filter posts by topic (simple mock logic)
  const trendingPosts = mockPosts.filter((post) =>
    post.tag.toLowerCase().includes(selectedTopic.toLowerCase()),
  );

  return (
    <section id="topics" className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-bold text-[#111111] mb-6">
            Explore by topic
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-4">
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => setSelectedTopic(topic)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm cursor-pointer snap-start ${
                  selectedTopic === topic
                    ? "bg-[#111111] text-white"
                    : "bg-[#F5F5F5] text-[#111111] border-[#EAEAEA]"
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Trending Posts */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#111111]">
            Trending in {selectedTopic}
          </h3>
          <div className="space-y-3">
            {mockPosts.slice(0, 5).map((post, idx) => (
              <div
                key={post.id}
                className="p-4 border border-[#EAEAEA] rounded-[14px] flex items-center justify-between hover:bg-[#F5F5F5] transition cursor-pointer"
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-[#6B6B6B] font-medium w-6">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-[#111111] font-medium">{post.title}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge
                        variant="secondary"
                        className="bg-[#F5F5F5] text-[#111111] text-xs"
                      >
                        {post.tag}
                      </Badge>
                      <span className="text-xs text-[#6B6B6B]">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-2xl">{post.avatar}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
