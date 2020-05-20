import DBPool from '../configs/database';

export default class User {
    static dbHandle;

    static injectDB(dbHandle) {
        this.dbHandle = dbHandle;
        console.log('Successfully injected db into User Model');
    }

    static getDB() {
        return this.dbHandle;
    }

    static addUser(userObj) {
        console.log('ADD USER');
        return new Promise((resolve, reject)=>{
            this.dbHandle.db().collection("users").insertOne(userObj, (err, res)=>{
                if (err) {
                    console.log('ERR: ');
                    console.log(err);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }
}
