const { ObjectID } = require('mongodb');
const { mongoConnect } = require('../../../mongo.config.js');

exports.updateReg = async (req, res) => {
  const data = req.body;
  const _id = ObjectID(data.id);
  delete data.id;

  const mongo = await mongoConnect({ db: 'lit-course', collection: 'vacation_request' });

  if (mongo.client) {
    mongo.collection.updateOne({ _id }, { $set: data }).then(item => {
      if (item) {
        res.send({ result: item.result });
      }
      mongo.client.close();
    }).catch(() => {
      mongo.client.close();
    });
  } else {
    res.status(500).send();
  }
};

exports.getReg = async (req, res) => {
  const mongo = await mongoConnect({ db: 'lit-course', collection: 'vacation_request' });

  if (mongo.client) {
    mongo.collection.find().limit(100).toArray().then(data => {
      res.send({ data });
      mongo.client.close();
    }).catch(() => {
      mongo.client.close();
    });
  } else {
    res.status(500).send();
  }
};

exports.getRegDetail = async (req, res) => {
  const mongo = await mongoConnect({ db: 'lit-course', collection: 'vacation_request_detail' });

  if (mongo.client) {
    mongo.collection.find().limit(100).toArray().then(data => {
      res.send({ data });
      mongo.client.close();
    }).catch(() => {
      mongo.client.close();
    });
  } else {
    res.status(500).send();
  }
};
