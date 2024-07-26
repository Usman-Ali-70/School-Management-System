import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Button from '@mui/material/Button';

export default function CreateAssignment() {
  const [files, setFiles] = useState([]);
  const [assignmentText, setAssignmentText] = useState('');

  const handleSubmit = () => {
    if (assignmentText.trim() === '') {
      alert('Please enter assignment text');
      return;
    }
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });
    formData.append('assignmentText', assignmentText);
    axios.post('/api/create-assignment', formData)
     .then((response) => {
        console.log('Assignment created successfully:', response);
        // You can also redirect to a success page or display a success message
      })
     .catch((error) => {
        console.error('Error creating assignment:', error);
        // You can also display an error message to the user
      });
  };

  return (
    <div>
      <h2>Create Assignment</h2>
      <Link to="/Student/assignments" style={{ textDecoration: 'none' }}>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Back to Assignments" />
        </ListItemButton>
      </Link>
      <textarea
        value={assignmentText}
        onChange={(event) => setAssignmentText(event.target.value)}
        placeholder="Enter assignment text..."
        required
        style={{
          width: '100%',
          height: '200px',
          fontSize: '16px',
          padding: '15px',
          borderRadius: '10px',
          border: '1px solid #ccc',
        }}
      />
      <input
        type="file"
        multiple
        onChange={(event) => setFiles(event.target.files)}
        accept=".pdf,.docx,.xlsx"
        style={{
          margin: '10px 0',
        }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Create Assignment
      </Button>
    </div>
  );
}