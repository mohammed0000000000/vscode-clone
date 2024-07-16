import "./App.css";
import FileComponent from "./components/FileComponent";
import { fileTree } from "./data/FileTree";

function App() {
  return (
    <>
      <div className="">
        <FileComponent name="Project 1" type="folder" children={[fileTree]} />
        {/* <FolderComponent folderName="index.tsx" /> */}
      </div>
    </>
  );
}

export default App;
