module.exports = (app) => {
  const validator = require('../controllers/efim93/data.controller.js');
  app.get('/efim93/get-reg', validator.getItems);
  app.post('/efim93/add-reg', validator.addItem);
  app.put('/efim93/update-reg', validator.updateItem);
};
