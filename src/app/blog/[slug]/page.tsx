import { ContextParams } from '@/app/lib/types';

export default function BlogPostDetail({ params }: ContextParams) {
  console.log(params);
  if (params.slug.includes('somethingasdasd')) {
    console.log(params.slug);
  }
  return (
    <main>
      <div>Hello Detail View {params.slug}</div>
    </main>
  );
}
