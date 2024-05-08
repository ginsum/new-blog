import Link from "next/link";
import { Suspense } from "react";

import Loading from "src/components/Loading";
import PostView from "src/container/Viewer";
import { getBlogPost } from "src/firebase/content";

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const post = await getBlogPost(id);

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col container mx-auto w-full md:w-[680px] px-6 py-8 h-full">
        <div className="flex self-end mb-4 text-sm">
          <Link href="/blog">목록으로</Link>
          {/* {userId && <Link href={`/write/${id}`}>수정</Link>} */}
        </div>
        <div className="flex justify-center w-24 py-1 mb-2 text-xs bg-blue-400 text-white rounded-xl">
          {post?.category}
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-3 px-1">
          <div className="text-xl font-bold text-blue-800">{post?.title}</div>
          <div className="text-sm text-zinc-400">{post?.date}</div>
        </div>
        <hr />
        <div className="text-lg p-3">
          {post?.content && <PostView content={post.content} />}
        </div>
      </div>
    </Suspense>
  );
}
