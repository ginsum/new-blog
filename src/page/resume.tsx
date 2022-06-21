import { introduction, contact, experience } from "../data/resume";

const Resume = () => {
  return (
    <div className="flex flex-col container mx-auto px-48 py-10 justify-center">
      <div className="text-3xl font-bold mb-12 text-blue-600">기술 이력서</div>
      <div className="mb-4">
        <div className="text-xl font-bold mb-2">{introduction.title}</div>
        <div>{introduction.description}</div>
      </div>

      <div className="mb-8 text-sm">
        {contact.map(({ label, text }) => (
          <div>
            <span className="mr-4">{label}</span>
            <span>{text}</span>
          </div>
        ))}
      </div>

      <hr />
      <div className="my-8">
        <div className="text-xl font-bold mb-2 text-gray-600">경험</div>
        <div className="flex">
          <div className="flex flex-col w-1/3 mb-8">
            <span className="text-xl font-bold mr-2 mb-2">
              {experience.company}
            </span>
            <span className="">{experience.description}</span>
            <span>{experience.date}</span>
          </div>
          <div className="w-2/3">
            {experience.detail.map(({ title, content }) => (
              <div className="mb-8 ml-4">
                <div className="text-lg font-semibold mb-2 text-blue-600">
                  {title}
                </div>
                <div className="text-base ml-4">
                  {content.map((el: string) => (
                    <div className="mb-1">{el}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />

      {/* <div className="my-8">
        <div className="text-xl font-bold mb-2">교육</div>
        <span>학력</span>
        <span>대학교</span>
      </div>
      <hr />

      <div className="my-8">
        <div className="text-xl font-bold mb-2">기술</div>
        <span>react</span>
        <span>웹</span>
      </div> */}
    </div>
  );
};

export default Resume;
