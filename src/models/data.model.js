const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
  {
    question: String,
    answers: Array,
  },
  { collection: 'qa_data_set' }
);

module.exports = mongoose.model('DataSet', dataSchema);
