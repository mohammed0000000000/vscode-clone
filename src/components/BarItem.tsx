import { useState } from "react";
import { IFile } from "../interface";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { useDispatch } from "react-redux";
// import { RootState } from "../app/store";
import { setClickedFile } from "../app/features/fileTreeSlice";

interface IProps {
  file: IFile;
}

const BarItem = ({ file }: IProps) => {
  const { name, content } = file;
  const [isFileOpen, setFileOpen] = useState<boolean>(false);
  // const { clickedFile } = useSelector((state: RootState) => state.fileTree);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(setClickedFile({ fileName: name, fileContent: content }));
    setFileOpen((prev) => !prev);
  };
  return (
    <>
      <li
        key={file.id}
        className="flex items-center space-x-2 text-center p-1 hover:bg-gray-600  duration-300  rounded-md"
        onClick={onClick}
      >
        <span className=" inline-block mr-1">
          <RenderFileIcon fileName={file.name} type="file" />
        </span>
        <span
          className="mx-1 flex justify-center items-center"
          style={{ margin: 0 }}
        >
          {file.name}
        </span>
        <span
          className="mr-1 flex justify-center items-center cursor-pointer duration-300 rounded-lg hover:bg-red-600"
          style={!isFileOpen ? { visibility: "hidden" } : {}}
        >
          <CloseIcon />
        </span>
      </li>
    </>
  );
};

export default BarItem;
