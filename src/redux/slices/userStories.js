import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projectID: undefined,
  userStories: undefined,
  loading: undefined,
  tempPreconditions: undefined,
  tempAcceptanceCriteria: undefined
}

export const userStoriesSlice = createSlice({
  name: 'userStories',
  initialState,
  reducers: {
    setTempPreconditions: (state, action) => {
      const tempPreconditions = action.payload;
      return {
        ...state,
        tempPreconditions: tempPreconditions
      };
    },
    setTempAcceptanceCriteria: (state, action) => {
      const tempacc = action.payload;
      return {
        ...state,
        tempAcceptanceCriteria: tempacc
      };
    },
    setProjectID: (state, action) => {
      const id = action.payload;
      return {
        ...state,
        projectID: id
      };
    },
    getUserStories: (action) => { },
    setUserStories: (state, action) => {
      const usrstrs = action.payload;
      return {
        ...state,
        userStories: { ...usrstrs }
      };
    },
    generateUserStories: (action) => { },
    updateUserStory: (action) => { },
    setLoading: (state, action) => {
      const stat = action.payload;
      return {
        ...state,
        loading: stat
      };
    },
    deleteUserStory: (action) => {},
    addUserStory: (action) => {}
  },
})

// Action creators are generated for each case reducer function
export const { setProjectID, getUserStories, setUserStories, generateUserStories, updateUserStory,
  setLoading, deleteUserStory, addUserStory, setTempPreconditions, setTempAcceptanceCriteria } = userStoriesSlice.actions

export default userStoriesSlice.reducer