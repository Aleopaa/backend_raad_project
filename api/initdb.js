const {MongoClient} = require('mongodb');

const connectionUrl = process.env.DB_CONNECTION;
let dbName = process.env.DB_NAME;

const init = async () => {
    let client = await MongoClient.connect(connectionUrl);
    console.log("client", client)
    return client.db(dbName)
}
module.exports = { init }
