class Transaction{
    constructor(amount){
        this.amount = Number(amount);
        this.date = new Date();
    }
}

export default Transaction;