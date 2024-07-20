import { useState } from "react";
import { IFile } from "../interface";
import BarItem from "./BarItem";
import ContextMenu from "./ui/ContextMenu";

interface IProps {
  openFiles: IFile[];
}

const Bar = ({ openFiles }: IProps) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  // Render the navigation bar Tab
  const renderOpenFiles = openFiles.map((file) => (
    <BarItem key={file.id} file={file} />
  ));

  return (
    <>
      <div className=" p-1 rounded-sm bg-black min-h-[42px]">
        <ul
          className="flex flex-row space-x-2 items-center"
          onContextMenu={(e) => {
            e.preventDefault();
            setMenuPosition({ x: e.clientX, y: e.clientY });
            setShowMenu(true);
          }}
        >
          {renderOpenFiles}
        </ul>
        {showMenu && (
          <ContextMenu position={menuPosition} setShowMenu={setShowMenu} />
        )}
      </div>
    </>
  );
};

export default Bar;
