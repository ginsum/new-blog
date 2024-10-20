import { Suspense } from "react";
import Loading from "src/container/Loading";
import Writer from "src/container/Writer";
import { getBlogPost } from "src/firebase/content";

export default async function EditPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const post = await getBlogPost(id);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col w-full px-20 py-12">
        <div className="text-3xl font-bold mb-8">글쓰기</div>
        <Writer
          id={id}
          title={post?.title}
          category={post?.category}
          content={post?.content}
        />
      </div>
    </Suspense>
  );
}
