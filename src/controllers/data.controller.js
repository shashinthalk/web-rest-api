const dataService = require('../services/data.service');

exports.getDataSet = async (req, res) => {
  const dataSet = await dataService.getAllDataSet();
  res.json(dataSet);
};
