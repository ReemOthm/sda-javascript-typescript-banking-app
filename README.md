# JavaScript/Typescript Banking Application - OOP Practice

This project contains a Typescript classes for a banking application to practice Object-Oriented Programming (OOP) concepts.

### Basic classes:

#### Bank Class:

Properties:
- name (string)
- branches (Branch[])

Constructor:
- Parameters: name (string)

Methods:
- addBranch(branch: Branch): boolean
  Description: Adds the branch to the branches array. Each branch should only be added once.
  
- addCustomer(branch: Branch, customer: Customer): boolean
  Description: Adds the customer to the branch of the bank. Each customer can only be added once to a branch.
  
- addCustomerTransaction(branch: Branch, customerId: string, amount: number): boolean
  Description: Adds a transaction of the amount for the customer with the specified customerId in the given branch.
  
- findBranchByName(branchName: string): Branch[] | null
  Description: Returns a list of matched branches with the specified branchName or null if no matches were found.
  
- checkBranch(branch: Branch): boolean
  Description: Returns true if the branch belongs to the bank or false otherwise.
  
- listCustomers(branch: Branch, includeTransactions: boolean): void
  Description: Prints out a list of customers with their transaction details if includeTransactions is true.

#### Branch Class:

Properties:
- name (string)
- customers (array of Customer[])

Constructor:
- Parameters: name (string)

Methods:
- getName(): string
- getCustomers(): Customer[]
- addCustomer(customer: Customer): boolean
  Description: Adds the customer to the customers array. Each customer should only be added once.
- addCustomerTransaction(customerId: string, amount: number): boolean
  Description: Adds a transaction of the amount for the customer with the specified customerId.

#### Customer Class:

Properties:
- name (string)
- id (number)
- transactions (array of Transaction[])

Constructor:
- Parameters: name, id

Methods:
- getName(): string
- getId(): number
- getTransactions(): Transaction[]
- getBalance(): number
  Note: The balance cannot be negative.

- addTransactions(amount: number): boolean
  Description: Adds a successful transaction of the amount to the transactions array.

#### Transaction Class:

Properties:
- amount (number)
- date (Date)

Constructor:
- Parameters: amount, date

## Additional Requirements
- Added validation checks to ensure that the data meets certain criteria before performing create or update operations. For example, validate required fields and data format.
- Added search functionality to allow users to search for specific customers based on keywords or specific fields, such as by name or Id

## Usage:
Set up TypeScript:
-  Install TypeScript globally on your system if you haven't done so already.
-  Create a new TypeScript configuration file (tsconfig.json) in the root folder of your project.
-  Ensure that the converted TypeScript code compiles successfully without any type errors.
-  Running the TypeScript Code
 
## Code Result 
![image](https://github.com/ReemOthm/sda-javascript-typescript-banking-app/assets/86829326/267a43a7-edb2-4743-bf3e-53bcb578572a)

