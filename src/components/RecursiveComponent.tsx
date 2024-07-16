import { IFile } from "../interface";
import FileIcon from "./SVG/FileIcon";
import FolderIcon from "./SVG/FolderIcon";
import ArrowIcon from "./SVG/ArrowIcon";

interface IProps {
  fileTree: IFile;
}

const RecursiveComponent = ({
  fileTree: { name, type, children, content },
}: IProps) => {
  return (
    <>
      <div className="mb-1 ml-2">
        <div className="flex items-center space-x-2 mb-1">
          <span>
            <ArrowIcon />
          </span>
          <span>{type === "file" ? <FileIcon /> : <FolderIcon />}</span>
          <span>{name}</span>
        </div>
        {children &&
          children.length > 0 &&
          children.map((child) => (
            <RecursiveComponent key={child.name} fileTree={child} />
          ))}
        {/* {content && <div>{content}</div>} */}
      </div>
    </>
  );
};

export default RecursiveComponent;
