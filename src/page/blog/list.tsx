import { useEffect } from "react";

import { getBlogPost } from "../../firebase/content";
import ListCard from "../../components/ListCard";
import { list } from "../../data/mockData";

const BlogList = () => {
  useEffect(() => {
    getBlogPost();
  }, []);

  return (
    <div className="flex flex-col container mx-auto w-2/5 py-10 justify-center">
      <div className="text-3xl font-bold mb-8 text-blue-600">BlogList</div>
      <div className="flex mb-8">
        <div className="w-16 h-16 rounded-full bg-slate-400 mr-6 overflow-hidden">
          <img src="https://avatars.githubusercontent.com/u/50772349?v=4" />
        </div>
        <div className="mt-2 text-zinc-600">
          <div>ginsum</div>
          <div>github link</div>
        </div>
      </div>
      {list.map(({ title, content }) => (
        <ListCard title={title} content={content} />
      ))}
    </div>
  );
};

export default BlogList;
