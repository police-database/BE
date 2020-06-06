const mongoose = require('mongoose');

const schema = new mongoose.Schema({ 
  DPSSTNo: String,
  LastName: String,
  FirstName: String,
  MiddleName: String,
  Employer: String,
  CaseClose: String,
  Type: String,
  EmploymentAction: String,
  StateCertification: String,
  DPSSTDescription: String
});

module.exports = mongoose.model('Decertification', schema);
