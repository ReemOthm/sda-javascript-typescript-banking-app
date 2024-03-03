class Transaction{
    constructor(amount){
        this.amount = Number(amount);
        this.date = new Date();
    }
}

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

class Branch{
    constructor(name){
        this.name = name.trim();
        this.customers = []
    }
    getName(){
        return this.name;
    }
    getCustomers(){
        return this.customers;
    }
    addCustomer(customer){
        if(!this.customers.includes(customer)){
            const result = this.customers.push(customer);
            return result > 0 ? `${customer.name} customer has added Successfully` : 'Cusyomer has NOT added'
        }
    }
    addCustomerTransaction(customerId, amount){
        if(amount === 0 ){
            console.log(`please enter an amount greater than 0!`);
            return;
        }
        const customer =  this.customers.find(customer=> customer.id === customerId);
        if(customer){
            customer.addTransactions(amount);
            return true;
        }
        else return false;
    }
    searchCustomer(customerInput){
        const targetCustomer = this.getCustomers().find(customer=>{
            return customer.id === customerInput || customer.name === customerInput 
        })
        return `Customer Name: ${targetCustomer.getName()}, Customer ID: ${targetCustomer.getId()}`;
    }
}

class Bank{
    constructor(name){
        this.name = name.trim();
        this.branches = [];
    }
    addBranch(branch){
        if(!this.branches.includes(branch)){
            const result = this.branches.push(branch);
            return result > 0 ? `${branch.name} has added Successfully!` : false;
        }
        else return `Branch has already exist!`;
    }
    addCustomer(branch, customer){
        if(this.branches.includes(branch)){
            let checkCustomer=0, branchName= '' ;
            this.branches.forEach(branch => {
                if(branch.customers.includes(customer))
                    checkCustomer++
                    branchName = branch.name;
            });
            return checkCustomer === 0 ? branch.addCustomer(customer) : `Failed to add! Customer ${customer.name} has already been added to ${branchName}`;
        }
    }
    addCustomerTransaction(branch, customerId, amount){
        if(amount === 0 ){
            console.log(`please enter an amount greater than 0!`);
            return;
        }
        if(this.checkBranch(branch)){
            branch.addCustomerTransaction(customerId,amount);
            return true;
        }
        else return false;
    }
    findBranchByName(branchName){
        const result = this.branches.find(branch=> branch.name === branchName);
        return result !== undefined ? `${result.name} has found` : `branch name has not found, try another name`;
    }
    checkBranch(branch){
        return this.branches.includes(branch);
    }
    listCustomers(branch, includeTransactions){
        if(this.checkBranch(branch)){
            if(includeTransactions){
                console.log(`Branch: ${branch.getName()},\nCustomers: ${branch.getCustomers().length}`);
                branch.getCustomers().forEach(customer=> {
                    console.log(`Customer Name: ${customer.getName()}, ID: ${customer.getId()}`);
                    if(includeTransactions){
                        console.log(`Customer Transactions`)
                        if(customer.getTransactions().length > 0){
                            customer.getTransactions().forEach(transaction=> console.log(`\tTransaction: ${transaction.amount} ${transaction.date}`));
                        } else {
                            console.log(`\tNo Transacions found`)
                        }
                    }
                })
            }
        }
    }
}

// ----------------------------------------------------------------------------------
const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John", 1)
const customer2 = new Customer("Anna", 2)
const customer3 = new Customer("John", 3)

console.log(arizonaBank.addBranch(westBranch));
console.log(arizonaBank.addBranch(sunBranch));
console.log(arizonaBank.addBranch(westBranch) );

console.log(arizonaBank.findBranchByName("bank"));
console.log(arizonaBank.findBranchByName("sun"));
console.log(arizonaBank.findBranchByName("Sun Branch"));

console.log(arizonaBank.addCustomer(westBranch, customer1));
console.log(arizonaBank.addCustomer(westBranch, customer3));
console.log(arizonaBank.addCustomer(sunBranch, customer1));
console.log(arizonaBank.addCustomer(sunBranch, customer2));

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 0);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);

customer1.addTransactions(-1000);
console.log(customer1.getBalance());
arizonaBank.listCustomers(westBranch, true);
arizonaBank.listCustomers(sunBranch,true);

console.log(sunBranch.searchCustomer(2))