class SavingsAccount extends Account{
    constructor(number, interest) {
        super(number);
        this._interest=interest;
    }
    getInterest() {
        return this._interest;
    }
    setInterest(value){
        this._interest=value;
    }
   
    addInterest(){
        this.deposit(this.getBalance()*this.getInterest()/100);
    }
   
    toString(){
        return "Savings Account "+this.getNumber() + ": balance " + this.getBalance()+": Interest "+this.getInterest(); 
    }

    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this.getInterest()}`;
    }
}
