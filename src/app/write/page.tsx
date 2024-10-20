import dynamic from "next/dynamic";
import Loading from "src/container/Loading";

const DynamicWriter = dynamic(() => import("src/container/Writer"), {
  ssr: false,
  loading: () => <Loading />,
});

export default async function WritePage() {
  return (
    <div className="flex flex-col w-full px-20 py-12">
      <div className="text-3xl font-bold mb-8">글쓰기</div>
      <DynamicWriter />
    </div>
  );
}
