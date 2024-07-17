import { IFile } from "../interface";
import ArrowIcon from "./SVG/ArrowIcon";
import { useState } from "react";
import RenderFileIcon from "./RenderFileIcon";
import { useSelector, useDispatch } from "react-redux";
import { setOpenFiles } from "../app/features/fileTreeSlice";
import { RootState } from "../app/store";

interface IProps {
  fileTree: IFile;
  // isOpen: boolean;
  // setIsOpen: (open: boolean) => void;
}

const RecursiveComponent = ({
  fileTree,
}: // isOpen,
// setIsOpen,
IProps) => {
  const { name, type, children } = fileTree;
  const dispatch = useDispatch();
  const { openFiles } = useSelector((state: RootState) => state.fileTree);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handlers
  const toggleFolder = () => setIsOpen((prev) => !prev);
  // const dispatchFileHandler = () => {};

  return (
    <>
      <div className="mb-1 ml-2 cursor-pointer">
        <div className="flex items-center  space-x-1 mb-1">
          {type === "folder" ? (
            <div
              onClick={toggleFolder}
              className="flex space-x-1 items-center justify-center"
            >
              <span style={isOpen ? { rotate: "90deg" } : {}} className="block">
                <ArrowIcon />
              </span>
              <span className="block">
                <RenderFileIcon fileName={name} type="folder" isOpen={isOpen} />
              </span>
              <span className="block">{name}</span>
            </div>
          ) : (
            <div
              className="flex items-center  space-x-1 mb-1"
              onClick={() => dispatch(setOpenFiles([...openFiles, fileTree]))}
            >
              <span className="block">
                <RenderFileIcon fileName={name} type="file" />
              </span>
              <span className="block">{name}</span>
            </div>
          )}
        </div>

        {children && isOpen && (
          <div>
            {children.map((child, idx) => (
              <RecursiveComponent fileTree={child} key={idx} />
            ))}
          </div>
        )}
        {/* {content && <div>{content}</div>} */}
      </div>
    </>
  );
};

export default RecursiveComponent;
