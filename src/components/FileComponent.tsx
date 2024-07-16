import FileIcon from "./SVG/FileIcon";
import FolderIcon from "./SVG/FolderIcon";
import { IFile } from "../interface";
import ArrowIcon from "./SVG/ArrowIcon";

const FileComponent = ({ name, type, children }: IFile) => {
  return (
    <div className="ml-2 p-1">
      <div className="flex items-center space-x-2">
        <span>
          <ArrowIcon />
        </span>
        <span>{type === "file" ? <FileIcon /> : <FolderIcon />}</span>
        <span>{name}</span>
      </div>
      <div>
        {children &&
          children.map((child) => (
            <FileComponent key={child.name} {...child} />
          ))}
      </div>
    </div>
  );
};

export default FileComponent;
