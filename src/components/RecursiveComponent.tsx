import { IFile } from "../interface";
import FileIcon from "./SVG/FileIcon";
import FolderIcon from "./SVG/FolderIcon";
import ArrowIcon from "./SVG/ArrowIcon";
import { useState } from "react";
import OpenFolderIcon from "./SVG/OpenFolderIcon";

interface IProps {
  fileTree: IFile;
  // isOpen: boolean;
  // setIsOpen: (open: boolean) => void;
}

const RecursiveComponent = ({
  fileTree: { name, type, children },
}: // isOpen,
// setIsOpen,
IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Handlers
  const toggleFolder = () => setIsOpen((prev) => !prev);

  return (
    <>
      <div className="mb-1 ml-2 cursor-pointer">
        <div className="flex items-center space-x-2 mb-1">
          {type === "folder" ? (
            <div onClick={toggleFolder} className="flex space-x-2 items-center">
              <span style={isOpen ? { rotate: "90deg" } : {}}>
                <ArrowIcon />
              </span>
              <span>{isOpen ? <OpenFolderIcon /> : <FolderIcon />}</span>
            </div>
          ) : (
            <span className="inline-block">
              <FileIcon />
            </span>
          )}
          <span>{name}</span>
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
