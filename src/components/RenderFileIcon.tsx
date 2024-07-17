import IconImage from "./SVG/IconImage";
import { fileExtensionPath, folderExtensionPath } from "../constant";
interface IProps {
  fileName: string;
  type: string;
  isOpen?: boolean;
}

const RenderFileIcon = ({ fileName, type, isOpen }: IProps) => {
  const extension = fileName.split(".").pop() || "";

  const fileExtension: string =
    type === "folder"
      ? extension in folderExtensionPath
        ? folderExtensionPath[extension]
        : "default"
      : extension in fileExtensionPath
      ? fileExtensionPath[extension]
      : "default";

  return type === "folder" ? (
    isOpen ? (
      <IconImage src={`/icons/folder-${fileExtension}-open.svg`} />
    ) : (
      <IconImage src={`/icons/folder-${fileExtension}.svg`} />
    )
  ) : (
    <IconImage src={`/icons/${fileExtension}.svg`} />
  );
};

export default RenderFileIcon;
