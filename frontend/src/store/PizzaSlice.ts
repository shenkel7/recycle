import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ProfileState = {
    model: any;
};

const initialState: ProfileState = {
    model: null
} as const;

const PizzaSlice = createSlice({
  name: 'model',
  initialState: initialState,
  reducers: {
    setModel(state, action: PayloadAction<any>) {
      state.model = action.payload;
    },
  },
});

export default PizzaSlice;
