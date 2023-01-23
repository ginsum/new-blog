import { useEffect, useState } from 'react';

import { getInfo } from '../firebase/info';

import Loading from '../components/Loading';
import Card from '../components/Card';

const Resume = () => {
  const [resumeData, setResumeData] = useState<Record<string, any> | undefined>(
    undefined
  );

  const { introduction, contact, experience, skill, education, etc } =
    resumeData || {};

  const getPost = async () => {
    const getList = await getInfo();
    setResumeData(getList);
  };

  useEffect(() => {
    getPost();
  }, []);

  return resumeData ? (
    <div className="flex flex-col justify-center container mx-auto w-full md:w-[640px] px-5 md:px-6 pt-10 pb-28 tracking-tight ">
      <div className="text-2xl font-bold mb-4 text-blue-900">About</div>
      <div className="">
        <div className="text-xl font-medium mb-1 text-zinc-800">
          {introduction?.title}
        </div>
        <div className="whitespace-pre-wrap text-zinc-700 font-light ">
          {introduction?.description}
        </div>
      </div>
      <div className="my-6 text-sm">
        <div className="text-zinc-600">
          <span className="mr-4 font-semibold text-blue-400">Github</span>
          <a href={contact?.github} target="_blank" rel="noreferrer">
            <span>{contact?.github}</span>
          </a>
        </div>
        <div className="text-zinc-600">
          <span className="mr-6 font-semibold text-blue-400">Email</span>
          <span>{contact?.email}</span>
        </div>
      </div>
      <Card>
        <div className="">
          <div className="text-xl font-light mb-4 text-blue-600">경험</div>
          <div className="flex flex-col dt:flex-row ">
            <div className="flex justify-between mb-4 md:mb-8">
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-zinc-700">
                  {experience?.company}
                </span>
                <span className="text-zinc-800 font-light">
                  {experience?.description}
                </span>
              </div>

              <span className="text-zinc-600 font-light">
                {experience?.date}
              </span>
            </div>
            <div className="">
              {experience?.detail.map((detail: any) => (
                <div key={detail.title} className="mb-8 md:mb-12">
                  <div className="text-lg font-medium mb-1 text-blue-800">
                    {detail.title}
                  </div>
                  <hr />
                  <div className="text-base mt-3 ml-3">
                    {detail.content.map((el: string, index: number) => (
                      <div
                        key={el}
                        className={`${index === 1 ? 'mb-3' : 'mb-0.5'} ${
                          index < 2
                            ? 'font-normal text-zinc-600'
                            : 'font-light text-zinc-800'
                        }`}
                      >
                        {el}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <hr />
              <div className="mt-4 text-zinc-700 font-normal">
                {experience?.subDetail.map((el: string) => (
                  <div key={el} className="mb-1">
                    {el}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col md:flex-row">
          <div className="w-20 text-xl font-light mb-2 text-blue-700">기술</div>
          <div className="flex flex-col">
            <div className="flex flex-wrap mb-2">
              {skill?.stack.map((el: string) => (
                <span
                  key={el}
                  className="mr-1 px-3 py-0 bg-zinc-400 rounded-xl text-white font-light"
                >
                  {el}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap">
              {skill?.tool.map((el: string) => (
                <span
                  key={el}
                  className="mb-2 mr-1 px-3 py-0 bg-slate-400 rounded-xl text-white font-light"
                >
                  {el}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <div className="flex flex-col md:flex-row">
          <div className="w-20 text-xl font-light mb-2 text-blue-700">교육</div>
          {education && (
            <div className="flex flex-col text-zinc-700">
              <div>
                <span className="mr-2">{education[1][0]}</span>
                <span>{education[1][1]}</span>
              </div>
              <div>
                <span className="mr-2">{education[2][0]}</span>
                <span>{education[2][1]}</span>
              </div>
            </div>
          )}
        </div>
      </Card>
      <Card>
        <div className="flex flex-col md:flex-row">
          <div className="w-20 text-xl font-light mb-2 text-blue-700">기타</div>
          <div className="flex flex-col text-zinc-700">{etc && etc[1][0]}</div>
        </div>
      </Card>
    </div>
  ) : (
    <Loading />
  );
};

export default Resume;
