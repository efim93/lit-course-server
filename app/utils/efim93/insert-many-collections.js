const mongo = require('mongodb').MongoClient;
const { domain, port } = require('../../../config.js').mongodb;
const { dataRequest, dataDetail } = require('./constants');
const url = `mongodb://${domain}:${port}`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
};

mongo.connect(url, options).then(client => {
  const collection = client.db('lit-course').collection('vacation_request');

  collection.insertMany(dataRequest).then(() => {
    client.close();
  })
    .catch(() => {
      client.close();
    });
})
  .catch(() => {});

mongo.connect(url, options).then(client => {
  const collection = client.db('lit-course').collection('vacation_request_detail');

  collection.insertMany(dataDetail).then(() => {
    client.close();
  })
    .catch(() => {
      client.close();
    });
})
  .catch(() => {});
