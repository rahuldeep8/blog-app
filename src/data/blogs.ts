export type Blog = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const blogs: Blog[] = [
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
    slug: "parallel-vs-sequential-data-fetching",
    title: "Parallel vs Sequential Data Fetching",
    description:
      "Learn the difference between parallel and sequential data fetching, when to use each approach, and how they impact performance in modern web apps like Next.js and React.",
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
