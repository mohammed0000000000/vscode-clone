import { IFile } from "../interface";
import BarItem from "./BarItem";

interface IProps {
  openFiles: IFile[];
}

const Bar = ({ openFiles }: IProps) => {
  // Render the navigation bar Tab
  const renderOpenFiles = openFiles.map((file) => (
    <BarItem key={file.id} file={file} />
  ));

  return (
    <>
      <div className="border-2 border-gray-500 p-1 rounded-sm bg-black min-h-[42px]">
        <ul className="flex flex-row space-x-2 items-center">
          {renderOpenFiles}
        </ul>
      </div>
    </>
  );
};

export default Bar;
