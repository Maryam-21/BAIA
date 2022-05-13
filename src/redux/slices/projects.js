import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projectsTitles: undefined,
  fullProjects:undefined
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    getProjectsTitles: () => {},
    getFullProjects: () => {},
    setProjectsTitles(state, action) {
        const projectsTitlesData = action.payload;
        return { ...state, 
          projectsTitles:{...projectsTitlesData} };
    },
    setFullProjects(state,action){
        const fullProjectsData = action.payload;
        return { ...state, fullProjects:{...fullProjectsData} };
    }
  },
})

// Action creators are generated for each case reducer function
export const { getProjectsTitles, setProjectsTitles, getFullProjects, setFullProjects } = projectsSlice.actions

export default projectsSlice.reducer