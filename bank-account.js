/*
First of the projects for The Complete Node Developer Course.
This is my code. I could get the first couple of things to work, but not the final thing. Teacher's solution is below.

var account = {
  balance: 0
};

// Deposit function
function deposit (account, amount) {
  return account.balance + amount;
}

var newBalance = deposit(account, 20);
console.log(newBalance);

// Withdraw function
function withdraw (account, amount) {
  return newBalance - amount;
}

var depBalance = withdraw(newBalance, 4);
console.log(depBalance);

// Get balance of account function
function getBalance (newBalance, depBalance) {
  return account.balance + (newBalance - depBalance);
}


var accBalance = getBalance(newBalance, depBalance, account.balance);

getBalance(account);
console.log(getBalance);

*/


// Teacher's solution (I can get the first two bits to work, but not the last bit)

var account = {
  balance: 0
};

function deposit (account, amount) {
  account.balance += amount; // '+=' adds amount to account.balance (as opposed to going account.balance = account.balance + amount)
}

function withdraw (account, amount) {
  account.balance -= amount; // '-=' works the same as '+='. It replaces account.balance = account.balance - amount;
}

function getBalance (account) {
  return account.balance;
}

deposit (account, 1000);
console.log(getBalance(account));

withdraw(account, 121);
console.log(getBalance(account));
