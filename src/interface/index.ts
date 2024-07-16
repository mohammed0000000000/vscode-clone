export interface IFile {
  name: string;
  type: 'file' | 'folder';
  children?: IFile[];
  content?: string;
}