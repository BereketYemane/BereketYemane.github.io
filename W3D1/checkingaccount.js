class CheckingAccount extends Account{
    constructor(number,overdraft) {
        super(number);
        this._overdraftLimit=overdraft;
    }
    getOverdraftLimit() {
        return this._overdraftLimit;
    }
    setOverdraftLimit(value){
        this._overdraftLimit=value;
    }

    withdraw(amount){
        if(amount<=0){
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if(amount>this.getBalance()+this._overdraftLimit){
            throw Error("Insufficient funds");
        }
        this._balance-=amount;

    }
    toString(){
        return "Checking Account "+this.getNumber() + ": balance " + this.getBalance()+": Overdraft limit "+this.getOverdraftLimit(); 
    }
    endOfMonth(){
        if(this.getBalance()<0){
            return `Warning, low balance ChekingAccount ${this.getNumber()}: balance: ${this.getBalance()} Overdraft limit: ${this.getOverdraftLimit()}`;
        }
        return super.endOfMonth();
    }
}