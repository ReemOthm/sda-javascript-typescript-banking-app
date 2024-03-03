class Transaction{
    amount: number;
    date: Date;
    constructor(amount: number){
        this.amount = Number(amount);
        this.date = new Date();
    }
}

export default Transaction;