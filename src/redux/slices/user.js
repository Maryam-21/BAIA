import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: undefined,
    success: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (action) => {},
    setUser: (state, action) =>{
      const user = action.payload;
      return { ...state, 
        user:{...user} };
    },
    setSuccess: (state, action)=>{
        const success = action.payload;
        return { ...state, 
        success:success };
    }
  },
})

// Action creators are generated for each case reducer function
export const { getUser, setUser, setSuccess } = userSlice.actions

export default userSlice.reducer