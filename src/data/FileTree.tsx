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
              content: "Lorem ipsum d",
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
          content: `export interface File System{
            path: string;
            content: string;
          }`,
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
