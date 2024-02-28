class Transaction{
    constructor(amount){
        this.amount = amount;
        this.date = new Date();
    }
}

class Customer {
    constructor(name,id){
        this.name = name;
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
    addTransaction(amount){
        if((this.getBalance() + amount) < 0) 
            return `You Cannot make this transaction, because you don\'t have enough balance!\nYour balance: ${this.getBalance()}`
        else {
            const transaction = new Transaction(amount);
            const check = this.transactions.push(transaction)
            return check > 0 ? true : false;
        }
    }

}

const customer1 = new Customer('Reem', 20);
console.log(customer1.getName())
console.log(customer1.getId())
console.log(customer1.addTransaction(200))
console.log(customer1.addTransaction(500))
console.log(customer1.addTransaction(-20))
console.log(customer1.addTransaction(-700))
console.log(customer1.getTransactions())
console.log(customer1.getBalance())


