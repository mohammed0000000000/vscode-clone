import "./App.css";
import { fileTree } from "./data/FileTree";
import RecursiveComponent from "./components/RecursiveComponent";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Bar from "./components/Bar";
import Content from "./components/Content";

function App() {
  const { openFiles, clickedFile } = useSelector(
    (state: RootState) => state.fileTree
  );
  return (
    <>
      <div className="my-2 flex space-x-2 h-screen">
        <aside className=" border-r-2 border-white pr-2 min-w-60">
          <RecursiveComponent fileTree={fileTree} />
        </aside>
        <section className="flex-1">
          <Bar openFiles={openFiles}></Bar>
          <Content content={clickedFile.fileContent} />
        </section>
      </div>
    </>
  );
}

export default App;
