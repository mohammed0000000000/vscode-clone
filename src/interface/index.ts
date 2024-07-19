export interface IFile {
  id: string;
  name: string;
  type: 'file' | 'folder';
  children?: IFile[];
  content?: string;
}

export interface IClickedFile {
  fileName: string;
  fileContent: string | undefined;
}
export interface IInitialStateTreeSlice {
  openFiles: IFile[],
  clickedFile: IClickedFile,
  activeTabId: string | null;
}