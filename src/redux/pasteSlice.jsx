import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  pastes: localStorage.getItem("pastes") ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully!");
    },
    updateToPastes: (state, action) => {
      const paste = action.payload
      const index = state.pastes.findIndex((item) => item._id === paste._id)

      if (index >= 0) {
        // If the course is found in the Pastes, update it
        state.pastes[index] = paste
        // Update to localstorage
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
        // show toast
        toast.success("Paste updated")
      }

    },
    resetAllPastes: (state) => {
      state.pastes = []
      // Update to localstorage
      localStorage.removeItem("pastes")

    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload

      console.log(pasteId)
      const index = state.pastes.findIndex((item) => item._id === pasteId)

      if (index >= 0) {
        // If the course is found in the Pastes, remove it
        state.pastes.splice(index, 1)
        // Update to localstorage
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
        // show toast
        toast.success("Paste deleted")
      }

    },
  },
})

// Action creators are generated for each case reducer function

export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer