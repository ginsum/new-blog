import { useNavigate } from 'react-router-dom';

const ListCard = ({ title, content }: { title: string; content: string }) => {
  let navigate = useNavigate();
  return (
    <div className="my-10 cursor-pointer" onClick={() => navigate('1234')}>
      <div className="text-2xl font-bold mb-4 text-zinc-800">{title}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      {/* <div className="text-zinc-600">{content}</div> */}
    </div>
  );
};

export default ListCard;
