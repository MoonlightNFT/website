import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '../store'

// Define a type for the slice state
interface ApplicationState {
  darkMode: boolean,
}

// Define the initial state using that type
const initialState: ApplicationState = {
  darkMode: false,
}

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
      if (state.darkMode) document.body.classList.add('dark')
      else document.body.classList.remove('dark')
    },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { toggleDarkMode } = applicationSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectDarkMode = (state: RootState) => state.application.darkMode

export default applicationSlice.reducer
