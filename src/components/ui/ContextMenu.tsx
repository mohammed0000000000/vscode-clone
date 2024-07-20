import { useDispatch } from "react-redux";
import { setOpenFiles } from "../../app/features/fileTreeSlice";
import { useEffect, useRef } from "react";
interface IProp {
  position: { x: number; y: number };
  setShowMenu: (state: boolean) => void;
}
const ContextMenu = ({ position: { x, y }, setShowMenu }: IProp) => {
  // let { openFiles } = useSelector(({ fileTree }: RootState) => fileTree);
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const CloseAllHandler = () => {
    dispatch(setOpenFiles([]));
  };
  const CloseHandler = () => {};

  useEffect(() => {
    // console.log(menuRef.current);
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node))
        setShowMenu(false);
    };
    window.addEventListener("click", handleClickOutside);
    // after attach event in use effect don't miss clean up
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [setShowMenu]);

  return (
    <div ref={menuRef}>
      <ul
        className={`bg-gray-500 text-white w-fit p-1 rounded-md mt-2`}
        style={{ position: "absolute", left: x, top: y }}
      >
        <li
          onClick={CloseHandler}
          className="hover:bg-red-500 cursor-pointer px-3 py-1 rounded-md"
        >
          Close
        </li>
        <li
          onClick={CloseAllHandler}
          className="hover:bg-red-500 cursor-pointer px-3 py-1 rounded-md"
        >
          Close All Tab
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
