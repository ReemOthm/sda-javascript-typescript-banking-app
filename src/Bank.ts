import Branch from "./Branch";
import Customer from "./Customer";

class Bank{
    name: string;
    branches: Branch[];
    constructor(name:string){
        this.name = name.trim();
        this.branches = [];
    }
    addBranch(branch:Branch):boolean{
        if(!this.branches.includes(branch)){
            const result:number = this.branches.push(branch);
            return result > 0 ? true : false;
        }
        else return false;
    }
    addCustomer(branch:Branch, customer:Customer):boolean{
        if(this.branches.includes(branch)){
            let checkCustomer:number=0, branchName:string= '' ;
            this.branches.forEach(branch => {
                if(branch.customers.includes(customer))
                    checkCustomer++
                    branchName = branch.name;
            });
            if(checkCustomer === 0){
                branch.addCustomer(customer);
                return true;
            } 
            else return false;
        }
        else return false
    }
    addCustomerTransaction(branch:Branch, customerId:number, amount:number): boolean | undefined{
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
    findBranchByName(branchName:string):boolean{
        const result:Branch | undefined = this.branches.find(branch=> branch.name === branchName);
        return result !== undefined ? true : false;
    }
    checkBranch(branch:Branch):boolean{
        return this.branches.includes(branch);
    }
    listCustomers(branch:Branch, includeTransactions:boolean):void{
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

export default Bank;