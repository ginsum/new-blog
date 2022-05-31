const ListCard = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="my-10">
      <div className="text-2xl font-bold mb-4">{title}</div>
      <div className="">{content}</div>
    </div>
  );
};

export default ListCard;
