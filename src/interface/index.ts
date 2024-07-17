export interface IFile {
  name: string;
  type: 'file' | 'folder';
  children?: IFile[];
  content?: string;
}

export interface IClickedFile {
  fileName: string;
  fileContent: string;
}
export interface IInitialStateTreeSlice {
  openFiles: IFile[],
  clickedFile: IClickedFile
}