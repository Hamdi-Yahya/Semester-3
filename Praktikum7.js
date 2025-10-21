function Checking(amount) {
    this.balance = amount;
    this.deposit = deposit ;
    this.withdraw = withdraw ;
    this.toString = toString ;
}

function deposit(amount) {
    this.balance += amount;
}
function withdraw(amount){
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    if (amount > this.balance){
        console.log("Saldo tidak cukup");
    }
}
function toString() {
    return "Balance: " + this.balance;
}
function Checking (amount) {
    this.balance = amount;
    this.deposit = deposit ;
    this.withdraw = withdraw ;
    this.toString = toString ;
}
function deposit (amount) {
    this.balance += amount;
}
function withdraw(amount){
    if (amount <= this.balance){
        this.balance -= amount;
    }
    if (amount > this.balance){
        console.log("Insufficient funds");
    }
}
function toString() {
    return "Balance: " + this.balance;
}

var account = new Checking (500);
account.deposit(1000);
console.log(account.toString());
account.withdraw(755);
console.log(account.toString());
account.withdraw(900);
console.log(account.toString());