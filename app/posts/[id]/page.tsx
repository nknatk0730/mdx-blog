import { getPost } from "../../data/post"
import { format } from 'date-fns'

export default async function Page({
  params: {
    id
  }
}: {
  params: {
    id: string
  }
}) {
  const post = await getPost(id)

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <div className="prose dark:prose-invert">
        <h1>{post.title}</h1>
        <p>{format(new Date(post.createdAt), 'yyyy/MM/dd')}</p>

          <post.content />
      </div>
    </div>
  );
}
