import { useEffect, useState } from "react";

import { getInfo } from "../firebase/info";

import { experience as experienceList } from "../data/resume";
import Loading from "../components/Loading";

const Resume = () => {
  const [resumeData, setResumeData] = useState<Record<string, any> | undefined>(
    undefined
  );
  const { introduction, contact, experience } = resumeData || {};

  const getPost = async () => {
    const getList = await getInfo();
    setResumeData(getList);
  };

  useEffect(() => {
    getPost();
  }, []);

  return resumeData ? (
    <div className="flex flex-col container mx-auto w-full md:w-[580px] px-6 pt-10 pb-28 justify-center">
      <div className="text-3xl font-bold mb-12 text-blue-500">기술 이력서</div>
      <div className="mb-4">
        <div className="text-xl font-bold mb-2">{introduction?.title}</div>
        <div className="whitespace-pre-wrap">{introduction?.description}</div>
      </div>

      <div className="mb-8 text-sm">
        <div className="text-gray-600">
          <span className="mr-4">{contact?.phone[0]}</span>
          <span>{contact?.phone[1]}</span>
        </div>
        <div className="text-gray-600">
          <span className="mr-4">{contact?.email[0]}</span>
          <span>{contact?.email[1]}</span>
        </div>
      </div>

      <hr />
      <div className="my-8">
        <div className="text-xl font-bold mb-4 text-gray-600">경험</div>
        <div className="flex flex-col dt:flex-row ">
          <div className="flex flex-col w-72 mb-8">
            <span className="text-xl font-bold mr-2 mb-2">
              {experience?.company}
            </span>
            <span className="text-gray-600">{experience?.description}</span>
            <span className="text-gray-600">{experience?.date}</span>
          </div>
          <div className="">
            {experienceList.detail.map(({ title, content }) => (
              <div className="mb-8 md:ml-4">
                <div className="text-lg font-semibold mb-2 text-blue-500">
                  {title}
                </div>
                <div className="text-base md:ml-4">
                  {content.map((el: string) => (
                    <div className="mb-1 text-gray-700">{el}</div>
                  ))}
                </div>
              </div>
            ))}
            <hr />
            <div className="mt-4">
              {experienceList.subDetail.map((el: string) => (
                <div className="md:ml-4 mb-1">{el}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="flex flex-col md:flex-row my-8">
        <div className="w-72 text-xl font-bold mb-2">교육</div>
        <div className="flex flex-col">
          <span>연세 대학교 건축공학과</span>
          <span>코드스테이츠</span>
        </div>
      </div>
      <hr />

      <div className="flex flex-col md:flex-row my-8">
        <div className="w-72 text-xl font-bold mb-2">기타</div>
        <div className="flex flex-col">
          <span>웹디자이너</span>
          <span>코드스테이츠</span>
        </div>
      </div>
      <hr />
    </div>
  ) : (
    <Loading />
  );
};

export default Resume;
