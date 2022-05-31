import ListCard from "../../components/ListCard";
import { list } from "../../mockData";

const BlogList = () => (
  <div className="flex flex-col container mx-auto w-2/5 py-20 justify-center">
    <div className="text-3xl font-bold mb-8">BlogList</div>
    <div className="flex mb-8">
      <div className="w-16 h-16 rounded-full bg-slate-400 mr-6">사진</div>
      <div>
        <div>ginsum</div>
        <div>소개 소개 소개 소개 소개 소개</div>
        <div>github</div>
      </div>
    </div>
    {list.map(({ title, content }) => (
      <ListCard title={title} content={content} />
    ))}
  </div>
);

export default BlogList;
