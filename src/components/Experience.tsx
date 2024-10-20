const ExperienceCard = ({
  company,
  date,
  description,
}: {
  company: string;
  date: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col p-4 my-2 border border-zinc-200 rounded-2xl gap-2">
      <div className="flex justify-between">
        <div>{company}</div>
        <div className="text-sm text-zinc-400">{date}</div>
      </div>
      <div className="text-sm text-zinc-500">{description}</div>
    </div>
  );
};

export default ExperienceCard;
