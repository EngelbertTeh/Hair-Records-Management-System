import { revalidateTag } from 'next/cache';

export default async function revalidatePosts() {
  revalidateTag('posts');
}
