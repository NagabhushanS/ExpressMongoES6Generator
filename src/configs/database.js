const dotenv = require('dotenv');
const MongoClient = require('mongodb').MongoClient;

//load env variables
dotenv.config();

export default class DBPool {
    static db;

    static initDB(dbURL) {
        return new Promise((resolve, reject)=>{
            const client = new MongoClient(dbURL, {
                poolSize: 10000
            });
            
            client.connect((err, db)=>{
                if (err) {
                    console.log('ERROR in database connection!');
                    reject();
                    return;
                }
                this.db = db;
                console.log('Succesfull created a db pooling connection');
                resolve(db);
            });
        });
    }

    static getDB() {
        return this.db;
    }
}


