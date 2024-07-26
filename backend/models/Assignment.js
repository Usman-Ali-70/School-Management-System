const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  assignmentName: { type: String, required: true },
  dueDate: { type: Date, required: true },
  description: { type: String },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  submissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Submission' }],
  isValid: { type: Boolean, default: false },
  notificationSent: { type: Boolean, default: false }
});

const Assignment = mongoose.model('Assignment', assignmentSchema);
