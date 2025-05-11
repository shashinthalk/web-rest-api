const DataSet = require('../models/data.model');

exports.getAllDataSet = async () => {
  return await DataSet.find();
};
