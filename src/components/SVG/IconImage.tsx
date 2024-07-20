interface IProps {
  src: string;
  className?: string;
}

const IconImage = ({ src, className }: IProps) => {
  return (
    <>
      <img src={src} className={`w-5 h-5 ${className}`} />
    </>
  );
};

export default IconImage;
