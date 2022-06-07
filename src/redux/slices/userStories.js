import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projectID: undefined,
  userStories: undefined,
  loading: undefined
}

export const userStoriesSlice = createSlice({
  name: 'userStories',
  initialState,
  reducers: {
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
    deleteUserStory: (action) => {}
  },
})

// Action creators are generated for each case reducer function
export const { setProjectID, getUserStories, setUserStories, generateUserStories, updateUserStory,
  setLoading, deleteUserStory } = userStoriesSlice.actions

export default userStoriesSlice.reducer