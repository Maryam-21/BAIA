import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: undefined,
    success: undefined,
    login: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (action) => {},
    updateUser: (action)=>{},
    setUser: (state, action) =>{
      const user = action.payload;
      return { ...state, 
        user:{...user} };
    },
    setSuccess: (state, action)=>{
        const success = action.payload;
        return { ...state, 
        success:success };
    },
    getSuccess: (state)=>{
        return state.success
    },
    setLogin: (state, action)=>{
        const login = action.payload;
        return { ...state, 
        login:login };
    },
    getLogin: (state)=>{
      return state.login
    }
  },
})

// Action creators are generated for each case reducer function
export const { getUser, setUser, setSuccess, updateUser, getSuccess, setLogin, getLogin } = userSlice.actions

export default userSlice.reducer