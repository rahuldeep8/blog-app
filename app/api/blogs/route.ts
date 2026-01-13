import { NextResponse } from "next/server";

const blogs = [
  {
    slug: "first-post",
    title: "First Post",
    description: "An introduction to our blog and what you can expect.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    slug: "nextjs-routing",
    title: "Next.js Routing",
    description: "Learn how routing works in Next.js applications.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    slug: "react-state",
    title: "Understanding React State",
    description: "A deep dive into state management in React.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    slug: "tailwind-css",
    title: "Styling with Tailwind CSS",
    description: "Build modern UIs quickly using utility-first CSS.",
    image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f",
  },
  {
    slug: "web-accessibility",
    title: "Web Accessibility Basics",
    description: "Make your web apps usable for everyone.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    slug: "performance-optimization",
    title: "Web Performance Optimization",
    description: "Tips to make your websites faster and more efficient.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

export async function GET() {
  // ⏳ simulate slow API
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(blogs);
}
