import Bank from './JavascriptFiles/Bank.js';
import Branch from './JavascriptFiles/Branch.js';
import Customer from './JavascriptFiles/Customer.js';

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