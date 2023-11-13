import { createSlice } from '@reduxjs/toolkit'

const localUser = JSON.parse(localStorage.getItem('user'))

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: localUser,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer