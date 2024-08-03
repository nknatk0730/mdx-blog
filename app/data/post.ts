import { postSchema } from '@/data/post-schema';
import { Post } from '@/types/post';
import 'server-only';

export const getPost = async (id: string): Promise<Post> => {
  const post = await import(`/app/posts/${id}.mdx`);

  const { title, createdAt } = post.metadata;

  return {
    title,
    createdAt,
    content: post.default,
    id,
  };
}

export const getAllPosts = async (): Promise<Post[]> => {
  return Promise.all(postSchema.map(async (id) => getPost(id)));
}