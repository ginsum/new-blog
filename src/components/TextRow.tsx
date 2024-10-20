const TextRow = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="mb-2 text-zinc-500">
      <span className="mr-2">{title}</span>
      <span className="text-xs">{description}</span>
    </div>
  );
};

export default TextRow;
