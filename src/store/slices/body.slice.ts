import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const bodySlice = createSlice({
  name: 'body',
  initialState: { noScroll: false },
  reducers: {
    setScroll: (state, action: PayloadAction<boolean>) => {
      state.noScroll = action.payload;
    },
  },
});

export const { setScroll } = bodySlice.actions;
export default bodySlice.reducer;
