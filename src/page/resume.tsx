import { useEffect, useState } from 'react';

import { getInfo } from '../firebase/info';

import { experience as experienceList } from '../data/resume';
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
    <div className="flex flex-col justify-center container mx-auto w-full md:w-[680px] px-6 pt-10 pb-28 tracking-tight ">
      <div className="text-3xl font-semibold mb-8 text-blue-900">
        기술 이력서
      </div>
      <div className="">
        <div className="text-xl font-medium mb-1 text-gray-700">
          {introduction?.title}
        </div>
        <div className="whitespace-pre-wrap text-gray-900 font-light ">
          {introduction?.description}
        </div>
      </div>
      <div className="my-6 text-sm">
        <div className="text-gray-600">
          <span className="mr-4 font-semibold">{contact?.phone[0]}</span>
          <span>{contact?.phone[1]}</span>
        </div>
        <div className="text-gray-600">
          <span className="mr-4 font-semibold">{contact?.email[0]}</span>
          <span>{contact?.email[1]}</span>
        </div>
      </div>
      <Card>
        <div className="">
          <div className="text-xl font-light mb-4 text-blue-600">경험</div>
          <div className="flex flex-col dt:flex-row ">
            <div className="flex justify-between mb-8">
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-gray-700">
                  {experience?.company}
                </span>
                <span className="text-gray-800 font-light">
                  {experience?.description}
                </span>
              </div>

              <span className="text-gray-600 font-light">
                {experience?.date}
              </span>
            </div>
            <div className="">
              {experienceList.detail.map(({ title, content }) => (
                <div className="mb-12">
                  <div className="text-lg font-medium mb-1 text-blue-800">
                    {title}
                  </div>
                  <hr />
                  <div className="text-base mt-3 ml-3">
                    {content.map((el: string, index: number) => (
                      <div
                        className={`${index === 1 ? 'mb-3' : 'mb-0.5'} ${
                          index < 2
                            ? 'font-normal text-gray-600'
                            : 'font-light text-gray-800'
                        }`}
                      >
                        {el}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <hr />
              <div className="mt-4 text-gray-700 font-normal">
                {experienceList.subDetail.map((el: string) => (
                  <div className="mb-1">{el}</div>
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
            <div className="flex mb-2">
              {skill?.stack.map((el: string) => (
                <span className="mr-1 px-2 py-0.5 bg-gray-400 rounded-lg text-white font-light">
                  {el}
                </span>
              ))}
            </div>
            <div className="flex">
              {skill?.tool.map((el: string) => (
                <span className="mr-1 px-2 py-0.5 bg-slate-400 rounded-lg text-white font-light">
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
            <div className="flex flex-col text-gray-700">
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
          <div className="flex flex-col text-gray-700">{etc && etc[1][0]}</div>
        </div>
      </Card>
    </div>
  ) : (
    <Loading />
  );
};

export default Resume;
