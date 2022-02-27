import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ImageListType, ImageType } from 'react-images-uploading';

export type ProfileState = {
    model: any;
    index: number;
    image: string;
    imageFile: ImageType;
    imageUrl: string;
};

const initialState: ProfileState = {
    model: null,
    index: 0,
    image: '',
    imageFile: {
      dataURL: '',
      file: undefined,
      key: ''
      // [key: string]: any;
  },
  imageUrl: ''
} as const;

const PizzaSlice = createSlice({
  name: 'model',
  initialState: initialState,
  reducers: {
    setModel(state, action: PayloadAction<any>) {
      state.model = action.payload;
    },
    setIndex(state, action: PayloadAction<number>) {
      state.index = action.payload;
    },
    setImage(state, action: PayloadAction<string>) {
      state.image = action.payload;
    },
    setImageUrl(state, action: PayloadAction<string>) {
      state.imageUrl = action.payload;
    },
    setImageFile(state, action: PayloadAction<ImageType>) {
      state.imageFile = action.payload;
    },
  },
});

export default PizzaSlice;
