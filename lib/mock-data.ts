export interface Post {
    id: string;
    slug: string;
    title: string;
    description: string;
    content?: string;
    date: string;
    readTime: string;
    likes: number;
    comments: number;
    tag: string;
    image: string;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
}

export const MOCK_POSTS: Post[] = [
    {
        id: "1",
        slug: "advanced-component-patterns-in-react-18",
        title: "Advanced Component Patterns in React 18",
        description: "Mastering composition, render props, and higher-order components in the era of concurrent rendering.",
        content: "<p>React 18 introduced concurrent rendering, opening up highly sophisticated component architectures. By mastering render props and deep composition, your application will load faster and stay incredibly responsive.</p>",
        date: "March 2, 2026",
        readTime: "8 min read",
        likes: 2400,
        comments: 142,
        tag: "FRONTEND",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        author: {
            name: "Alex Rivera",
            avatar: "https://i.pravatar.cc/150?u=explore-1",
            role: "Design Engineer"
        }
    },
    {
        id: "2",
        slug: "the-future-of-css-whats-new-in-2026",
        title: "The Future of CSS: What's New in 2026",
        description: "Exploring container queries, view transitions, and new color spaces that are revolutionizing web design.",
        content: "<p>CSS has come incredibly far. View Transitions API allows highly complex page routing animations with a few lines of code, replacing heavy JS libraries. Container Queries let components adapt seamlessly, ensuring an elegant cross-device experience without complex media query management.</p>",
        date: "March 1, 2026",
        readTime: "6 min read",
        likes: 1800,
        comments: 89,
        tag: "DESIGN",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&q=80",
        author: {
            name: "Sarah Miller",
            avatar: "https://i.pravatar.cc/150?u=explore-2",
            role: "UI/UX Designer"
        }
    },
    {
        id: "3",
        slug: "building-scalable-apis-with-nextjs",
        title: "Building Scalable APIs with Next.js",
        description: "A comprehensive guide to structuring and optimizing your Next.js API routes for enterprise applications.",
        content: "<p>When using Next.js for APIs, ensuring your endpoint logic is well separated from routing files avoids unmaintainable architectures. Leveraging edge functions properly will guarantee blazing quick TTFB.</p>",
        date: "February 28, 2026",
        readTime: "12 min read",
        likes: 3200,
        comments: 215,
        tag: "BACKEND",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        author: {
            name: "David Chen",
            avatar: "https://i.pravatar.cc/150?u=explore-3",
            role: "Fullstack Engineer"
        }
    },
    {
        id: "4",
        slug: "understanding-server-actions-in-react",
        title: "Understanding Server Actions in React",
        description: "Deep dive into how Server Actions simplify data mutation and state management in modern React applications.",
        content: "<p>Server Actions drastically reduce boilerplate by letting you invoke server code securely right out of a component form submission. This negates the need for multiple manual API endpoints strictly for mutations.</p>",
        date: "February 25, 2026",
        readTime: "7 min read",
        likes: 1500,
        comments: 64,
        tag: "REACT",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80",
        author: {
            name: "Jennifer Lee",
            avatar: "https://i.pravatar.cc/150?u=explore-4",
            role: "Core Team Member"
        }
    },
    {
        id: "5",
        slug: "demystifying-typescript-generics",
        title: "Demystifying TypeScript Generics",
        description: "Practical examples and mental models for mastering complex generic types in TypeScript.",
        content: "<p>Generics let you create highly reusable code abstractions while preserving strict type safety. Once you bridge the mental gap of thinking about types as arguments, you can architect powerful API responses and component props seamlessly.</p>",
        date: "February 20, 2026",
        readTime: "10 min read",
        likes: 4100,
        comments: 310,
        tag: "TYPESCRIPT",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80",
        author: {
            name: "Mark Wilson",
            avatar: "https://i.pravatar.cc/150?u=explore-5",
            role: "Tech Lead"
        }
    },
    {
        id: "6",
        slug: "the-art-of-web-animation",
        title: "The Art of Web Animation",
        description: "Creating performant and accessible micro-interactions that delight users without sacrificing load times.",
        content: "<p>Great animation is almost invisible—it merely provides physics to the interface that informs users of states and transitions. Combining hardware-accelerated CSS and minimal JS guarantees that users won't drop frames during those critical moments.</p>",
        date: "February 15, 2026",
        readTime: "9 min read",
        likes: 2900,
        comments: 176,
        tag: "UI/UX",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        author: {
            name: "Elena Rodriguez",
            avatar: "https://i.pravatar.cc/150?u=explore-6",
            role: "Animation Specialist"
        }
    }
];

export const MOCK_USERS = [
    { id: 1, name: "Alex Rivera", role: "Design Engineer", avatar: "https://i.pravatar.cc/150?u=explore-1" },
    { id: 2, name: "Sarah Miller", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?u=explore-2" },
    { id: 3, name: "David Chen", role: "Fullstack Engineer", avatar: "https://i.pravatar.cc/150?u=explore-3" },
    { id: 4, name: "Jennifer Lee", role: "Core Team Member", avatar: "https://i.pravatar.cc/150?u=explore-4" },
    { id: 5, name: "Mark Wilson", role: "Tech Lead", avatar: "https://i.pravatar.cc/150?u=explore-5" },
];

export const TRENDING_TAGS = ["Next.js", "AI", "TailwindCSS", "Postgres", "Python", "React Native", "UI Design"];
