import { IFile } from "../interface";
import RenderFileIcon from "./RenderFileIcon";
import CloseIcon from "./SVG/CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import { setClickedFile } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  file: IFile;
}

const BarItem = ({ file }: IProps) => {
  const { name, content, id } = file;
  const { clickedFile } = useSelector((state: RootState) => state.fileTree);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(
      setClickedFile({ fileName: name, fileContent: content, activeTabId: id })
    );
  };
  return (
    <>
      <li
        key={file.id}
        className="min-w-28 flex items-center justify-between cursor-pointer space-x-2 text-center p-1 hover:bg-gray-600  duration-300  rounded-sm "
        onClick={onClick}
        style={{
          borderBottom:
            file.id === clickedFile.activeTabId
              ? "2px solid white"
              : "2px transparent",
        }}
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
          className="mr-1 flex justify-center items-center cursor-pointer duration-100 rounded-sm hover:bg-black"
          style={
            file.id === clickedFile.activeTabId
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          <CloseIcon />
        </span>
      </li>
    </>
  );
};

export default BarItem;
