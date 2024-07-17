import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

import { IInitialStateTreeSlice } from "../../interface";
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
    }
  }
})

export const { setOpenFiles } = fileTreeSlice.actions;

export default fileTreeSlice.reducer