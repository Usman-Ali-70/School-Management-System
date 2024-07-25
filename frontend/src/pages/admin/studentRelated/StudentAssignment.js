import React, { useState, useEffect } from 'eact';
import { useDispatch, useSelector } from 'eact-redux';
import { useParams } from 'eact-router-dom';
import { getAssignment, updateAssignment } from '../../../redux/assignmentRelated/assignmentHandle';
import { uploadSubmission } from '../../../redux/submissionRelated/submissionHandle';
import Popup from '../../../components/Popup';
import { BlueButton } from '../../../components/buttonStyles';
import {
  Box, InputLabel,
  MenuItem, Select,
  Typography, Stack,
  TextField, CircularProgress, FormControl
} from '@mui/material';

const AssignmentHandler = () => {
  const dispatch = useDispatch();
  const { assignment, loading } = useSelector((state) => state.assignment);
  const { submission, error } = useSelector((state) => state.submission);
  const params = useParams();

  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentDescription, setAssignmentDescription] = useState('');
  const [assignmentFile, setAssignmentFile] = useState(null);
  const [submissionFile, setSubmissionFile] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    dispatch(getAssignment(params.id));
  }, [dispatch, params.id]);

  const handleAssignmentChange = (event) => {
    setAssignmentTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setAssignmentDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setAssignmentFile(event.target.files[0]);
  };

  const handleSubmissionChange = (event) => {
    setSubmissionFile(event.target.files[0]);
  };

  const handleAssignmentSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', assignmentTitle);
    formData.append('description', assignmentDescription);
    formData.append('file', assignmentFile);
    dispatch(updateAssignment(params.id, formData));
  };

  const handleSubmissionSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', submissionFile);
    dispatch(uploadSubmission(params.id, formData));
  };

  useEffect(() => {
    if (submission) {
      setShowPopup(true);
      setMessage('Submission uploaded successfully!');
    } else if (error) {
      setShowPopup(true);
      setMessage('Error uploading submission!');
    }
  }, [submission, error]);

  return (
    <Box sx={{ flex: '1 1 auto', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
      {loading? (
        <CircularProgress />
      ) : (
        <Box sx={{ maxWidth: 550, px: 3, py: '100px', width: '100%' }}>
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h4">Assignment: {assignment.title}</Typography>
            <Typography variant="h5">Description: {assignment.description}</Typography>
          </Stack>
          <form onSubmit={handleAssignmentSubmit}>
            <Stack spacing={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Assignment Title</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={assignmentTitle}
                  label="Assignment Title"
                  onChange={handleAssignmentChange}
                >
                  <MenuItem value={assignment.title}>{assignment.title}</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Description</InputLabel>
                <TextField
                  id="demo-simple-select"
                  value={assignmentDescription}
                  label="Description"
                  onChange={handleDescriptionChange}
                />
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">File</InputLabel>
                <input type="file" onChange={handleFileChange} />
              </FormControl>
            </Stack>
            <BlueButton
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              variant="contained"
              type="submit"
            >
              Update Assignment
            </BlueButton>
          </form>
          <form onSubmit={handleSubmissionSubmit}>
            <Stack spacing={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Submission File</InputLabel>
                <input type="file" onChange={handleSubmissionChange} />
              </FormControl>
            </Stack>
            <BlueButton
              fullWidth
              size="large"
              sx={{ mt: 3 }}
              variant="contained"
              type="submit"
            >
              Upload Submission
            </BlueButton>
          </form>
        </Box>
      )}
            <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} />
    </Box>
  );
};

export default AssignmentHandler;