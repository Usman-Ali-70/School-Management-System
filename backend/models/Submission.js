const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
  assignment: { type: Schema.Types.ObjectId, ref: 'Assignment' },
  student: { type: Schema.Types.ObjectId, ref: 'User' },
  file: String, // Assuming a URL or path to the file
  grade: Number
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);
