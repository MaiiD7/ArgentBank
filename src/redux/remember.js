import { createSlice } from '@reduxjs/toolkit'

export const rememberSlice = createSlice({
  name: 'user',
  initialState: {
    remember: false,
  },
  reducers: {
    setRemember: (state, action) => {
      state.remember = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setRemember } = rememberSlice.actions

export default rememberSlice.reducer