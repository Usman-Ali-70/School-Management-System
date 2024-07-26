import React from 'react';
import { Dropzone, FileMosaic } from '@files-ui/react';
import { Link, useLocation } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
const UploadAssignment = () => {
  const [files, setFiles] = React.useState([]);
  const location = useLocation();
  const updateFiles = (incommingFiles) => {
    // You can add your own upload implementation here
    setFiles(incommingFiles);
  };
  const removeFile = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  return (
    <div>
      <h2>Upload Assignment</h2>
      <Link to="/Student/assignments" style={{ textDecoration: 'none' }}>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Back to Assignments" />
        </ListItemButton>
      </Link>
      <Dropzone
        onChange={updateFiles}
        value={files}
        accept=".pdf, .docx, .xlsx"
        maxFiles={5}
        maxSize={1024 * 1024 * 5} // 5MB
      >
        {files.map((file) => (
          <FileMosaic key={file.id} {...file} onDelete={removeFile} info />
        ))}
      </Dropzone>
    </div>
  );
};

export default UploadAssignment;