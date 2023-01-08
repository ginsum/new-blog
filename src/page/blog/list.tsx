import { useEffect, useState } from 'react';

import { getBlogList } from '../../firebase/content';
import ListCard from '../../components/ListCard';
import Loading from '../../components/Loading';

const BlogList = () => {
  const [list, setList] = useState<Record<string, any>[] | undefined>(
    undefined
  );

  const getPost = async () => {
    const getList = await getBlogList();
    setList(getList);
  };

  useEffect(() => {
    getPost();
  }, []);

  return list ? (
    <div className="flex flex-col container mx-auto w-full md:w-[640px] px-6  py-10 justify-center tracking-tight">
      <div className="text-3xl font-bold mb-8 text-blue-900">BlogList</div>
      <div className="flex mb-8">
        <div className="w-16 h-16 rounded-full bg-slate-400 mr-6 overflow-hidden">
          <img src="https://avatars.githubusercontent.com/u/50772349?v=4" />
        </div>
        <div className="mt-2 text-slate-600">
          <div>ginsum</div>
          {/* <div>github</div> */}
        </div>
      </div>
      <hr className="mb-4" />

      {list?.map(({ title, content, id, date }, index) => (
        <ListCard
          key={`${id}_${index}`}
          title={title}
          date={date}
          content={content.replace(/(<([^>]+)>)/gi, ' ')}
          id={id}
        />
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default BlogList;
