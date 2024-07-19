import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface IProps {
  content: string | undefined;
}

const FileSyntaxHighlighter = ({ content = "" }: IProps) => {
  return (
    <>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{
          backgroundColor: "transparent",
          fontSize: "1.2rem",
          maxHeight: "100vh",
          width: "100%",
          overflowX: "auto",
        }}
        showLineNumbers={true}
      >
        {String(content)}
      </SyntaxHighlighter>
    </>
  );
};

export default FileSyntaxHighlighter;
