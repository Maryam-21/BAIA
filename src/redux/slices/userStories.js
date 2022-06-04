import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  projectID: undefined,
  userStories: undefined,
}

export const userStoriesSlice = createSlice({
  name: 'userStories',
  initialState,
  reducers: {
    setProjectID: (state, action) => {
      const id = action.payload;
      return {...state,
              projectID: id};
    },
    setUserStories: (state, action) => {
        const usrstrs = action.payload;
        return { ...state, 
            userStories:{...usrstrs} };
    },
    getUserStories: (action) => {},
    updateUserStory: (action) => {}
   
  },
})

// Action creators are generated for each case reducer function
export const { setProjectID, setUserStories, getUserStories, updateUserStory } = userStoriesSlice.actions

export default userStoriesSlice.reducer