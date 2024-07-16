import "./App.css";
import { fileTree } from "./data/FileTree";
import RecursiveComponent from "./components/RecursiveComponent";

function App() {
  return (
    <>
      <div className="my-5">
        {/* <FileComponent name="Project 1" type="folder" children={[fileTree]} /> */}
        {/* <FolderComponent folderName="index.tsx" /> */}
        <RecursiveComponent fileTree={fileTree} />
      </div>
    </>
  );
}

export default App;
