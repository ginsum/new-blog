import { Suspense } from "react";
import InfoCard from "src/components/InfoCard";
import Chip from "src/components/Chip";
import Loading from "src/container/Loading";
import { getInfoContents } from "src/firebase/info";
import ContactRow from "src/components/ContactRow";
import TextRow from "src/components/TextRow";
import ExperienceCard from "src/components/Experience";

export default async function AboutPage() {
  const data = await getInfoContents();

  const { introduction, contact, experience, skill, education, etc } =
    data || {};

  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col justify-center container mx-auto w-full md:w-[680px] px-5 md:px-6 pt-10 pb-28 tracking-tight">
        <div className="text-2xl font-bold mb-4 text-blue-800">About</div>
        <div className="text-zinc-800 font-light">
          <div className="whitespace-pre-wrap">{introduction?.text1}</div>
          <div className="flex flex-col pl-4 py-4 text-sm gap-1.5">
            {introduction?.list.map((el) => (
              <div key={el} className="whitespace-pre-wrap">
                {`- ${el}`}
              </div>
            ))}
          </div>
          <div className="whitespace-pre-wrap">{introduction?.text2}</div>
        </div>
        <div className="mt-6 border-t border-blue-200" />
        <div className="my-6">
          {contact.map(({ title, content, id }) => (
            <ContactRow title={title} content={content} key={id} />
          ))}
        </div>
        <InfoCard title={"경험"}>
          <div className="flex flex-col dt:flex-row">
            <div>
              {experience.reverse().map(({ company, date, description }) => (
                <ExperienceCard
                  key={company}
                  company={company}
                  date={date}
                  description={description}
                />
              ))}
            </div>
          </div>
        </InfoCard>
        <InfoCard title={"기술"}>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col">
              <div className="flex flex-wrap mb-2">
                {skill?.stack.map((el: string) => (
                  <Chip key={el} content={el} colorClass={"bg-zinc-400"} />
                ))}
              </div>
              <div className="flex flex-wrap">
                {skill?.tools.map((el: string) => (
                  <Chip key={el} content={el} colorClass={"bg-slate-400"} />
                ))}
              </div>
            </div>
          </div>
        </InfoCard>
        <InfoCard title={"교육"}>
          <div className="flex flex-col md:flex-row">
            {education && (
              <div className="flex flex-col">
                {education.map(({ id, title, description }) => (
                  <TextRow title={title} description={description} key={id} />
                ))}
              </div>
            )}
          </div>
        </InfoCard>
        <InfoCard title={"기타"}>
          <div className="flex flex-col md:flex-row">
            {etc && (
              <div className="flex flex-col">
                {etc.map(({ id, title, description }) => (
                  <TextRow title={title} description={description} key={id} />
                ))}
              </div>
            )}
          </div>
        </InfoCard>
      </div>
    </Suspense>
  );
}
