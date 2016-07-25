//all accounts stored here
// Account Object:
//Balance -> number
// username -> string
var accounts = [
];

// createAccount(account)
//push onto accounts array.
//return individual account object.

function createAccount (account) {
  // accounts.push(balance, username); <-- this was my solution
  accounts.push(account); //<-- this was the teacher's solution
  return account;
}


//getAccount(username)
//find matching account using forEach
function getAccount (username) {
  // accounts.forEach (function(account){ <-- this was my solution
  var matchedAccount; //teacher solution
  accounts.forEach(function (account){ //teacher solution
    if (account.username === username) { //teacher solution
      matchedAccount = account; //teacher solution
    }
  });
  return matchedAccount; //teacher solution
}


function deposit (account, amount) {
  account.balance += amount; // '+=' adds amount to account.balance (as opposed to going account.balance = account.balance + amount)
}

function withdraw (account, amount) {
  account.balance -= amount; // '-=' works the same as '+='. It replaces account.balance = account.balance - amount;
}

function getBalance (account) {
  return account.balance;
}

var sheenasAccount = createAccount({
  username: 'Sheena',
  balance: 0
});

deposit(sheenasAccount, 100);
console.log(getBalance(sheenasAccount));

withdraw(sheenasAccount, 11);
console.log(getBalance(sheenasAccount));


var existingAccount = getAccount('Sheena');
console.log(getBalance(sheenasAccount));

var jensAccount = createAccount({
  username: 'jen001',
  balance: 12
});

console.log(accounts);

var existingJenAccount = getAccount('jen001');
console.log(getBalance(jensAccount));
