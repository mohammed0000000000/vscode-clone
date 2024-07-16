import { IFile } from "../interface";

export const fileTree: IFile = {
  name: "VS Code Clone",
  type: "folder",
  children: [
    {
      name: "node_modules",
      type: "folder",
      children: [
        {
          name: ".vite",
          type: "folder",
          children: [
            {
              name: "react.js",
              type: "file",
              content: "React.js",
            },
          ],
        },
      ],
    },
    {
      name: "index.html",
      type: "file",
      content: "Hello world",
    },
  ],
};
