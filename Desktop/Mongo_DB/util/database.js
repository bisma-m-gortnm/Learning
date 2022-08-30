const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://bismah_admin:3MFlMg9pqO0aBoIW@cluster0.hy0xqmp.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Mongo_Db Connected Successfully!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
