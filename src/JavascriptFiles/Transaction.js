class Transaction{
    amount; //number
    date;
    constructor(amount){
        this.amount = amount;
        this.date = new Date();
    }
}

export default Transaction;