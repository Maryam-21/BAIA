import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  meetingID: undefined,
  services: undefined,
  validatedServices: undefined
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
    updateServiceDetail: (action) => {},
    getValidatedServices: (action) =>{}, 
    setValidatedServices: (state, action) => {
      const Vsvs = action.payload;
      return { ...state, 
        validatedServices:{...Vsvs} };
    }
  },
})

// Action creators are generated for each case reducer function
export const { getServices, setServices, getMeetingID, setMeetingID, updateService, deleteService,
               addService, updateServiceDetail, getValidatedServices, setValidatedServices } = servicesSlice.actions

export default servicesSlice.reducer