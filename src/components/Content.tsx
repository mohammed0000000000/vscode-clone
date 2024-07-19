interface IProps {
  content: string | undefined;
}

const Content = ({ content }: IProps) => {
  return (
    <>
      <div className="border-2 border-gray-500 p-1 rounded-sm bg-black min-h-screen">
        {content}
      </div>
    </>
  );
};

export default Content;
