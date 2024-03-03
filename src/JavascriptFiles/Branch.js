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

export default Branch;