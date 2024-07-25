// assignmentHandle.js
import axios from 'axios';

export const getAssignment = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/assignments/${id}`);
    dispatch({ type: 'GET_ASSIGNMENT_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'GET_ASSIGNMENT_FAILURE', payload: error.message });
  }
};

export const updateAssignment = (id, formData) => async (dispatch) => {
  try {
    const response = await axios.put(`/api/assignments/${id}`, formData);
    dispatch({ type: 'UPDATE_ASSIGNMENT_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_ASSIGNMENT_FAILURE', payload: error.message });
  }
};

export const uploadSubmission = (id, formData) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/submissions/${id}`, formData);
    dispatch({ type: 'UPLOAD_SUBMISSION_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPLOAD_SUBMISSION_FAILURE', payload: error.message });
  }
};