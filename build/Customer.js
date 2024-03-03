"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_js_1 = __importDefault(require("./Transaction.js"));
class Customer {
    constructor(name, id) {
        this.name = name.trim();
        this.id = id;
        this.transactions = [];
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTransactions() {
        return this.transactions;
    }
    getBalance() {
        return this.transactions.reduce((total, transaction) => {
            return total + transaction.amount;
        }, 0);
    }
    addTransactions(amount) {
        const transaction = new Transaction_js_1.default(amount);
        const check = this.transactions.push(transaction);
        return check > 0 ? true : false;
    }
}
exports.default = Customer;
