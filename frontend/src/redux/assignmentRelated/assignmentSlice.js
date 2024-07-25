// assignmentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAssignment = createAsyncThunk('assignment/getAssignment', async (id) => {
  const response = await axios.get(`/api/assignments/${id}`);
  return response.data;
});

export const updateAssignment = createAsyncThunk('assignment/updateAssignment', async (id, formData) => {
  const response = await axios.put(`/api/assignments/${id}`, formData);
  return response.data;
});

export const uploadSubmission = createAsyncThunk('assignment/uploadSubmission', async (id, formData) => {
  const response = await axios.post(`/api/submissions/${id}`, formData);
  return response.data;
});

const assignmentSlice = createSlice({
  name: 'assignment',
  initialState: {
    assignment: null,
    loading: false,
    error: null,
    submission: null,
  },
  reducers: {
    resetAssignment: (state) => {
      state.assignment = null;
      state.loading = false;
      state.error = null;
      state.submission = null;
    },
  },
  extraReducers: {
    [getAssignment.pending]: (state) => {
      state.loading = true;
    },
    [getAssignment.fulfilled]: (state, action) => {
      state.assignment = action.payload;
      state.loading = false;
    },
    [getAssignment.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [updateAssignment.pending]: (state) => {
      state.loading = true;
    },
    [updateAssignment.fulfilled]: (state, action) => {
      state.assignment = action.payload;
      state.loading = false;
    },
    [updateAssignment.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
    [uploadSubmission.pending]: (state) => {
      state.loading = true;
    },
    [uploadSubmission.fulfilled]: (state, action) => {
      state.submission = action.payload;
      state.loading = false;
    },
    [uploadSubmission.rejected]: (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    },
  },
});

export const { resetAssignment } = assignmentSlice.actions;
export default assignmentSlice.reducer;