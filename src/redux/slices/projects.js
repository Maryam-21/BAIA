import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projectsTitles: undefined,
  fullProjects: undefined,
  loading: 0
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    getProjectsTitles: (user) => { },
    addProject: (payload) => { },
    addMeeting: (payload) => { },
    getFullProjects: (projectTitle) => { },
    updateProject: (action) => { },
    setProjectsTitles(state, action) {
      const projectsTitlesData = action.payload;
      return {
        ...state,
        projectsTitles: { ...projectsTitlesData }
      };
    },
    setFullProjects(state, action) {
      const fullProjectsData = action.payload;
      return { ...state, fullProjects: { ...fullProjectsData } };
    },
    setUpdatedProject(state, action) {
      const fullProjectData = {
        ...state.fullProjects,
        projectTitle: action.payload.projectTitle,
        projectDescription: action.payload.projectDescription,
        domain: action.payload.domain,
        organizationName: action.payload.organizationName,
        systemActors: action.payload.systemActors
      }
      return { ...state, fullProjects: { ...fullProjectData } };
    },
    setLoading: (state, action) => {
      const stats = action.payload;
      return { ...state, loading: stats };
    }
  },
})

// Action creators are generated for each case reducer function
export const { getProjectsTitles, setProjectsTitles, getFullProjects,
  setFullProjects, updateProject, setUpdatedProject, addProject, updateProjectTitles, 
  addMeeting, setLoading } = projectsSlice.actions

export default projectsSlice.reducer