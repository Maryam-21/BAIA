import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  services: [],
}

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    getServices: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.services = [
          'svs1',
          'svs2'
        ]
    },
  },
})

// Action creators are generated for each case reducer function
export const { getServices } = servicesSlice.actions

export default servicesSlice.reducer