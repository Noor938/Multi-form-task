import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
  },
  employmentInfo: {
    company: '',
    position: '',
    yearsOfExperience: '',
  },
  additionalInfo: {
    skills: '',
    about: '',
  }
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updatePersonalInfo: (state, action) => {
      state.personalInfo = action.payload;
    },
    updateEmploymentInfo: (state, action) => {
      state.employmentInfo = action.payload;
    },
    updateAdditionalInfo: (state, action) => {
      state.additionalInfo = action.payload;
    },
    resetForm: () => {
      return initialState;
    }
  },
});

export const { 
  updatePersonalInfo, 
  updateEmploymentInfo, 
  updateAdditionalInfo,
  resetForm
} = formSlice.actions;

export default formSlice.reducer;