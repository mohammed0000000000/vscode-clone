import "./App.css";
import { fileTree } from "./data/FileTree";
import RecursiveComponent from "./components/RecursiveComponent";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Bar from "./components/Bar";
import FileSyntaxHighlighter from "./components/FileSyntaxHighlighter";
import ResizablePanel from "./components/ResizablePanel";

function App() {
  const { openFiles, clickedFile } = useSelector(
    (state: RootState) => state.fileTree
  );
  return (
    <>
      <ResizablePanel
        leftPanel={<RecursiveComponent fileTree={fileTree} />}
        rightPanel={
          <>
            <Bar openFiles={openFiles}></Bar>
            <FileSyntaxHighlighter content={clickedFile.fileContent} />
          </>
        }
      ></ResizablePanel>
      {/* <div className="my-2 flex space-x-2 h-screen">
        <aside className=" border-r-2 border-white pr-2 min-w-60"></aside>
        <section className="flex-1 space-y-1"></section>
      </div> */}
    </>
  );
}

export default App;
