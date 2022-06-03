import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  meetingID: undefined,
  services: undefined,
}

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setMeetingID: (state, action) => {
      const id = action.payload;
      return {...state,
              meetingID: {...id}};
    },
    getMeetingID: () => {},
    getServices: () => {},
    setServices: (state, action) =>{
      const svs = action.payload;
      return { ...state, 
        services:{...svs} };
    }
  },
})

// Action creators are generated for each case reducer function
export const { getServices, setServices, getMeetingID, setMeetingID } = servicesSlice.actions

export default servicesSlice.reducer