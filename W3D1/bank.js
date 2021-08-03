class Bank{
    static nextNumber;
    constructor(){
        this._accounts=[];
    }
    addAccount(number){
        this._accounts.push(new Account(number));
        return this._accounts.length;
    }
    addSavingsAccount(number, interest) {
        this._accounts.push(new SavingsAccount(number, interest));
        return this._accounts.length;
    }
    addCheckingAccount(number, overdraft) {
        this._accounts.push(new CheckingAccount(number, overdraft));
        return this._accounts.length;
    }
    closeAccount(number) {
        let index=this._accounts.findIndex(account=>account.getNumber()==number);
        if(index>=0){
            this._accounts.splice(index,1);
            return this._accounts.length;
        }
    }
    accountReport() {
        return this._accounts.map(account => account.toString()).join("\n");
    }
}