import Writer from "src/container/Writer";

export default async function WritePage() {
  return (
    <div className="flex flex-col w-full px-20 py-12">
      <div className="text-3xl font-bold mb-8">글쓰기</div>
      <Writer />
    </div>
  );
}
