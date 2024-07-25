import React, { useState } from 'react';
import axios from 'axios';

const GradeAssignment = ({ submissionId }) => {
  const [grade, setGrade] = useState('');

  const handleGradeSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/api/submissions/${submissionId}`, { grade });
      console.log('Assignment graded:', response.data);
    } catch (error) {
      console.error('Error grading assignment:', error);
    }
  };

  return (
    <form onSubmit={handleGradeSubmit}>
      <input type="number" value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="Grade" required />
      <button type="submit">Submit Grade</button>
    </form>
  );
};

export default GradeAssignment;
