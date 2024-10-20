const ContactRow = ({ title, content }: { title: string; content: string }) => {
  return (
    <div className="text-zinc-600 text-sm">
      <span className="mr-6 font-semibold text-blue-600">{title}</span>
      <span>{content}</span>
    </div>
  );
};

export default ContactRow;
