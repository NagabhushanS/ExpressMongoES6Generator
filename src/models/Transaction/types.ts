import { ObjectId } from "mongodb";

export interface TransactionSchema {
    id: ObjectId,                       //databased id
    transaction_id: number,             //transacton id
    amount: number,                     //amount
    type: string,                       //type
    parent_id: number,                  //parent id
}