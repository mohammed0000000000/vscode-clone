interface IProps {
  fileName: string;
}

const RenderFileIcon = ({ fileName }: IProps) => {
  const fileExtension = fileName.split(".").pop();

  return (
    <>
      <img src={`/icons/${fileExtension}`} className="w-5 h-5" />
    </>
  );
};

export default RenderFileIcon;
