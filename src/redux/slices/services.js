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
              meetingID: id};
    },
    getMeetingID: () => {},
    getServices: () => {},
    setServices: (state, action) =>{
      const svs = action.payload;
      return { ...state, 
        services:{...svs} };
    },
    updateService: (action) => {},
    deleteService: (action) => {},
    addService: (action) => {},
    updateServiceDetail: (action) => {}
  },
})

// Action creators are generated for each case reducer function
export const { getServices, setServices, getMeetingID, setMeetingID, updateService, deleteService,
               addService, updateServiceDetail } = servicesSlice.actions

export default servicesSlice.reducer