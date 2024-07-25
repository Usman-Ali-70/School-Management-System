import React, { useState } from 'react';
import axios from 'axios';

const AssignmentForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [createdBy] = useState(''); // This should be the logged-in teacher's ID

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/assignments', { title, description, dueDate, createdBy });
      console.log('Assignment created:', response.data);
    } catch (error) {
      console.error('Error creating assignment:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} required />
      <button type="submit">Create Assignment</button>
    </form>
  );
};

export default AssignmentForm;
