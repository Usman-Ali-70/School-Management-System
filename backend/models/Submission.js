const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  assignment: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  submissionDate: { type: Date, default: Date.now },
  file: { type: Buffer },
  grade: { type: Number },
  feedback: { type: String }
});

const Submission = mongoose.model('Submission', submissionSchema);
