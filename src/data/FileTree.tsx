import { IFile } from "../interface";
import { v4 as uuid } from "uuid";
export const fileTree: IFile = {
  id: uuid(),
  name: "VS Code Clone",
  type: "folder",
  children: [
    {
      id: uuid(),
      name: "node_modules",
      type: "folder",
      children: [
        {
          id: uuid(),
          name: "src",
          type: "folder",
          children: [
            {
              id: uuid(),
              name: "react.js",
              type: "file",
              content: "React.js",
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      type: "folder",
      children: [
        {
          id: uuid(),
          name: ".vite",
          type: "file",
          content: "<h1>VS Code Clone</h1>",
        },
        {
          id: uuid(),
          name: ".vite",
          type: "file",
          content: "<h1>VS Code Clone</h1>",
        },
      ],
    },
  ],
};
