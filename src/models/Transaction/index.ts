import { Collection } from "mongodb";
import { TransactionSchema } from "./types";

class Transaction {
    private static dbHandle: Collection<TransactionSchema>;

    public static injectDB(dbHandle: Collection<TransactionSchema>) {
        this.dbHandle = dbHandle;
        console.log('Successfully injected db into Transaction Model');
    }

    public static getDB() {
        return this.dbHandle;
    }

    //private helper methods


    //public primary methods
}

export default Transaction;