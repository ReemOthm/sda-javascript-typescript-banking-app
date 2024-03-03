"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(amount) {
        this.amount = Number(amount);
        this.date = new Date();
    }
}
exports.default = Transaction;
