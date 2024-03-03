import Customer from "./Customer";

class Branch{
    name: string;
    customers: Customer[];
    constructor(name:string){
        this.name = name.trim();
        this.customers = []
    }
    getName():string{
        return this.name;
    }
    getCustomers():Customer[]{
        return this.customers;
    }
    addCustomer(customer:Customer):boolean{
        if(!this.customers.includes(customer)){
            const result:number = this.customers.push(customer);
            return result > 0 ? true : false
        }
        else return false
    }
    addCustomerTransaction(customerId:number, amount:number):boolean | undefined{
        if(amount === 0 ){
            console.log(`please enter an amount greater than 0!`);
            return;
        }
        const customer:Customer | undefined =  this.customers.find(customer=> customer.id === customerId);
        if(customer){
            customer.addTransactions(amount);
            return true;
        }
        else return false;
    }
    searchCustomer(customerInput: string | number):string{
        const targetCustomer:Customer | undefined = this.getCustomers().find(customer=>{
            return customer.id === customerInput || customer.name === customerInput 
        })
        return targetCustomer !== undefined ? 
        `Customer Name: ${targetCustomer.getName()}, Customer ID: ${targetCustomer.getId()}`
        : `Customer has not found`;
    }
}

export default Branch;