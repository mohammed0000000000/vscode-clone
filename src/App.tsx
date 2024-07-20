import "./App.css";
import { fileTree } from "./data/FileTree";
import RecursiveComponent from "./components/RecursiveComponent";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Bar from "./components/Bar";
import FileSyntaxHighlighter from "./components/FileSyntaxHighlighter";
import ResizablePanel from "./components/ResizablePanel";
import WelcomeTab from "./components/WelcomeTab";

function App() {
  const { openFiles, clickedFile } = useSelector(
    (state: RootState) => state.fileTree
  );
  console.log(openFiles.length);
  return (
    <>
      <ResizablePanel
        leftPanel={<RecursiveComponent fileTree={fileTree} />}
        rightPanel={
          openFiles.length ? (
            <>
              <Bar openFiles={openFiles}></Bar>
              <FileSyntaxHighlighter content={clickedFile.fileContent} />
            </>
          ) : (
            <WelcomeTab />
          )
        }
      ></ResizablePanel>
    </>
  );
}

export default App;
