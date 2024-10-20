const Chip = ({
  colorClass,
  content,
}: {
  colorClass: string;
  content: string;
}) => {
  return (
    <span
      className={`mb-2 mr-1 px-2 py-1 rounded-xl text-xs text-white font-light ${colorClass}`}
    >
      {content}
    </span>
  );
};

export default Chip;
