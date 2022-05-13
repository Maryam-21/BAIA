import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  services: undefined,
}

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    getServices: () => {},
    setServices: (state, action) =>{
      const svs = action.payload;
      return { ...state, 
        services:{...svs} };
    }
  },
})

// Action creators are generated for each case reducer function
export const { getServices, setServices } = servicesSlice.actions

export default servicesSlice.reducer