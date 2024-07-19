export interface IFile {
  id: string | null;
  name: string;
  type: 'file' | 'folder';
  children?: IFile[];
  content?: string;
}

export interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
  activeTabId: string | null;
}
export interface IInitialStateTreeSlice {
  openFiles: IFile[],
  clickedFile: IClickedFile,
}