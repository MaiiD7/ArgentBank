import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './token'
import userReducer from './user'
import rememberReducer from './remember'

export default configureStore({
  reducer: {
    token : tokenReducer,
    user: userReducer,
    remember: rememberReducer
  },
})