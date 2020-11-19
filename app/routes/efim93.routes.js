module.exports = (app) => {
  const validator = require('../controllers/efim93/data.controller.js');
  app.get('/get-reg', validator.getReg);
  app.get('/get-reg-detail', validator.getRegDetail);
  app.put('/update-reg/id', validator.updateReg);
};
