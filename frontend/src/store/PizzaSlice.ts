import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ProfileState = {
    model: any;
    index: number;
    image: string;
};

const initialState: ProfileState = {
    model: null,
    index: 0,
    image: '',
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
  },
});

export default PizzaSlice;
