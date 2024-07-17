import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { IClickedFile, IInitialStateTreeSlice } from "../../interface";
import { IFile } from '../../interface/index';


const initialState: IInitialStateTreeSlice = {
  openFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  }
}

export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openFiles = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile.fileName = action.payload.fileName;
      state.clickedFile.fileContent = action.payload.fileContent;
    }
  }
})

export const { setOpenFiles, setClickedFile } = fileTreeSlice.actions;

export default fileTreeSlice.reducer