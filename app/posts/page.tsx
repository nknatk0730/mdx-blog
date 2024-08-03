import Link from "next/link";
import { getAllPosts } from "../data/post"
import { format } from "date-fns";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <div>
      <h1 className="text-2xl mb-6 font-bold">post list</h1>
      <div className="divide-y border rounded-lg shadow-xl overflow-hidden">
        {posts.map((post) => (
          <div key={post.id} className="p-4 relative hover:bg-accent">
              <h2>
                {post.title}{' '}
                <Link href={`/posts/${post.id}`} className="absolute inset-0" />
              </h2>
              <p className="text-muted-foreground">
                {format(new Date(post.createdAt), "yyyy/MM/dd")}
              </p>
          </div>
        ))}
      </div>
    </div>
  );
}
