const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
  issueDate: {
    type: Date,
    default: Date.now,
  },
});

const Issue = mongoose.model("Issue", issueSchema);

module.exports = Issue;