import Transaction from './Transaction.js';

class Customer {
    constructor(name,id){
        this.name = name.trim();
        this.id = id;
        this.transactions = []
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getTransactions(){
        return this.transactions;
    }
    getBalance(){
        return this.transactions.reduce((total, transaction)=>{
            return total + transaction.amount;
        },0)
    }
    addTransactions(amount){
        const transaction = new Transaction(amount);
        const check = this.transactions.push(transaction)
        return check > 0 ? true : false;
    }
}

export default Customer;