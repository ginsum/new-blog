import { Suspense } from "react";
import ListCard from "src/components/ListCard";
import Loading from "src/container/Loading";
import { getBlogList } from "src/firebase/content";

export default async function BlogPage() {
  const blogList = await getBlogList();

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col mx-auto w-full md:w-[640px] px-6 py-10 justify-center tracking-tight">
        <div className="text-2xl font-bold mb-8 text-blue-900">Blog</div>
        <div className="flex mb-8">
          <div className="w-14 h-14 rounded-full bg-zinc-400 mr-6 overflow-hidden">
            <img
              src="https://avatars.githubusercontent.com/u/50772349?v=4"
              alt="profile"
            />
          </div>
          <div className="text-zinc-600">
            <div className=" text-zinc-600 font-medium">ginsum</div>
            <div className="w-44 md:w-96 text-zinc-400 text-sm whitespace-pre-line">
              짧은 기록
            </div>
          </div>
        </div>
        <hr className="w-80 md:w-[640px] mb-4" />

        {blogList?.map(({ title, category, content, id, date }, index) => (
          <ListCard
            key={`${id}_${index}`}
            title={title}
            category={category}
            date={date}
            content={content.replace(/(<([^>]+)>)/gi, " ")}
            id={id}
          />
        ))}
      </div>
    </Suspense>
  );
}
