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

class Branch{
    constructor(name){
        this.name = name;
        this.customers = []
    }
    getName(){
        return this.name;
    }
    getCustomers(){
        return this.customers;
    }
    addCustomer(name, id){
        if(this.customers.length > 0){
            let checkCustomer = '';
            this.customers.forEach(customer=>{
                if(customer.id === id)
                checkCustomer = `This Customer is already has been added`
            });
            if(checkCustomer != ""){
                return checkCustomer;
            }else {
                const customer = new Customer(name,id);
                const check = this.customers.push(customer)
                return check > 0 ? true : false;
            }
        }
        const customer = new Customer(name,id);
        const check = this.customers.push(customer)
        return check > 0 ? true : false;
    }
    addCustomerTransaction(customerId, amount){
        let check;
        this.customers.forEach(customer=>{
            if(customer.id === customerId){
                check = customer.addTransaction(amount);
            }
        })
        return check;
    }
}

class Bank{
    constructor(name){
        this.name = name;
        this.branches = []
    }
    addBranch(branchName){
        if(this.branches.length > 0){
            let checkBranch = '';
            this.branches.forEach(branch=>{
                if(branch.name === branchName)
                checkBranch = `The Branch name is exsist, try a new name`
            });
            if(checkBranch != ""){
                return checkBranch;
            }else {
                const branch = new Branch(branchName);
                const check = this.branches.push(branch)
                return check > 0 ? true : false;
            }
        }
        const branch = new Branch(branchName);
        const check = this.branches.push(branch)
        return check > 0 ? true : false;
    }
    addCustomer(branchName, customer){
        let check;
        this.branches.forEach(branch=>{
            if(branch.name === branchName){
                check = branch.addCustomer(customer.name,customer.id);
            }
        })
        return check;
    }
}