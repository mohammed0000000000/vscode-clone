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
          name: "src",
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
      name: "public",
      type: "folder",
      children: [
        {
          name: ".vite",
          type: "file",
          content: "<h1>VS Code Clone</h1>",
        },
      ],
    },
  ],
};
