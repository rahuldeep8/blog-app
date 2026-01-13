import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Post = {
  id: number;
  title: string;
  body: string;
};

async function getPosts(): Promise<Post[]> {
  console.log("Fetching posts...");
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3",
    {
      cache: "force-cache", // remove if you want caching
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function ServerComponentDemo() {
  const posts = await getPosts();

  return (
    <main className="mx-auto max-w-5xl px-6 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Server Component Demo</h1>

      <p className="text-muted-foreground">
        This data is fetched on the <strong>server</strong> before the page
        reaches the browser. No client-side JavaScript is used for fetching.
      </p>

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
