import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
const testimonials = [
  {
    id: 1,
    avatar: '👨‍💻',
    name: 'Alex Chen',
    role: 'Frontend Engineer',
    quote:
      'Bloggy helped me stay updated with the latest web dev trends. The curated feed saves me hours of searching.',
  },
  {
    id: 2,
    avatar: '👩‍💼',
    name: 'Sarah Johnson',
    role: 'DevOps Lead',
    quote:
      'The reading streaks keep me motivated to learn something new every day. Love the community aspect.',
  },
  {
    id: 3,
    avatar: '🧑‍💻',
    name: 'Marcus Webb',
    role: 'Full Stack Developer',
    quote:
      'Best platform for discovering high-quality technical content without the noise of social media.',
  },
];
export function Testimonials() {
  return (
    <section className="px-6 py-20 md:py-32 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-[#111111] text-center mb-12">
        Loved by developers
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="p-6 border border-[#EAEAEA] rounded-[14px] space-y-4"
          >
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#111111] text-[#111111]"
                />
              ))}
            </div>
            {/* Quote */}
            <p className="text-[#111111] leading-relaxed">"{testimonial.quote}"</p>
            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#EAEAEA]">
              <span className="text-2xl">{testimonial.avatar}</span>
              <div>
                <p className="font-semibold text-[#111111] text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-[#6B6B6B]">{testimonial.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}