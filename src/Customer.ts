import Transaction from './Transaction.js';

class Customer {
    name: string;
    id: number;
    transactions: Transaction[];
    constructor(name:string,id:number){
        this.name = name.trim();
        this.id = id;
        this.transactions = []
    }
    getName():string{
        return this.name;
    }
    getId():number{
        return this.id;
    }
    getTransactions():Transaction[]{
        return this.transactions;
    }
    getBalance():number{
        return this.transactions.reduce((total, transaction)=>{
            return total + transaction.amount;
        },0)
    }
    addTransactions(amount:number):boolean{
        const transaction = new Transaction(amount);
        const check:number = this.transactions.push(transaction)
        return check > 0 ? true : false;
    }
}

export default Customer;