"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function ClientComponentDemo() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=3"
        );
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Client Component Demo</h1>

      <p className="text-muted-foreground">
        This data is fetched on the <strong>client side</strong> using
        <code className="mx-1 rounded bg-muted px-1">useEffect</code>.
      </p>

      {loading && <p className="text-sm">Loading posts...</p>}

      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle className="text-lg line-clamp-2">
                {post.title}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {post.body}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
