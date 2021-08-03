//1. test code for an account class methods
describe("Account", function () {
    //Account created for testing purposes
    var account = new Account(1111);

    describe("getNumber", function () {
        it("returns account number", function () {
            assert.equal(account.getNumber(), 1111);
        });
    });
    describe("getBalance", function () {
        it("returns account balance", function () {
            assert.equal(account.getBalance(), 0);
        });
    });
    describe("deposit", function () {
        describe("deposite an amount greater than zero", function () {
            it("increases the account balance by a given amount", function () {
                account.deposit(500);
                assert.equal(account.getBalance(), 500);
            });
        });
        describe("depositing amount which is less than zero", function () {
            it("throws an error\"deposit amount has to be greater than zero\"",
                function () {
                    assert.throws(() => { account.deposit(-5) }, Error, "Deposit amount has to be greater than zero");
                });
        });
    });
    describe("withdraw", function () {
        describe("withdrawing amount which is less than zero", function () {
            it("throws Error \"withdraw amount has to be greater than zero\"", function () {
                assert.throws(() => { account.withdraw(-5) }, Error, "Withdraw amount has to be greater than zero");
            });
        });

        describe("withdrawing amount which is greater than the balance", function () {
            it("Throws Error \"insufficient funds\"", function () {
                assert.throws(() => { account.withdraw(600) }, Error, "Insufficient funds");
            });
        });

        describe("withdrawing a valid amount", function () {
            it("decreases the account balance by a given amount", function () {
                account.withdraw(400);
                assert.equal(account.getBalance(), 100);
            });
        });
    });

    describe("toString", function () {
        it("displays acount details", function () {
            assert.equal(account.toString(), `Account ${account.getNumber()}: balance ${account.getBalance()}`);
        });
    });

    describe("endOfMonth", function () {
        it("displays account updates", function () {
            assert.equal(account.endOfMonth(), "");
        });
    });
});

//2. test code for saving account class methods
describe("SavingsAccount", function(){
    var savingAccount = new SavingsAccount(2222,10)

    describe("setInterest", function () {
        it("sets account interest", function () {
            savingAccount.setInterest(20);
            assert.equal(savingAccount.getInterest(), 20);
        });
    });

    describe("getInterest", function () {
        it("returns interest value", function () {
            assert.equal(savingAccount.getInterest(),20);
        });
    });
    describe("addInterest", function () {
        it("deposits interest into account", function () {
            savingAccount.deposit(100);
            savingAccount.addInterest();
            assert.equal(savingAccount.getBalance(), 120);
        });
    });
    describe("toString", function () {
        it("displays savingAccount details", function () {
            assert.equal(savingAccount.toString(), `Savings Account ${savingAccount.getNumber()}: balance ${savingAccount.getBalance()}: Interest ${savingAccount.getInterest()}`);
          
        });
    });
    describe("endOfMonth", function () {
        it("displays savingAccount updates", function () {
            assert.equal(savingAccount.endOfMonth(), 'Interest added SavingsAccount 2222: balance: 144 interest: 20');
        });
    });
});

//3. test code for checking account class methods

describe("checkingAccount", function(){
    var checking = new CheckingAccount(3333,100);

    describe("setOverdraftLimit",function(){
        checking.setOverdraftLimit(200);
        it("sets account overdraft limit",function(){
            assert.equal(checking.getOverdraftLimit(),200);
        });
    });
    describe("getOverdraftLimit",function(){
        it("returns Overdraft limit",function(){
            assert.equal(checking.getOverdraftLimit(),200);
        });
    });
    describe("withdraw", function () {
        describe("withdrawing amount which is less than zero", function () {
            it("throws Error \"withdraw amount has to be greater than zero\"", function () {
                assert.throws(() => { checking.withdraw(-5) }, Error, "Withdraw amount has to be greater than zero");
            });
        });

        describe("withdrawing amount which is greater than the balance plus overdraft limit", function () {
            it("throws Error \"amount over the draft limit\"", function () {
                checking.deposit(500);
                assert.throws(() => { checking.withdraw(900) }, Error, "Insufficient funds");
            });
        });
        describe("withdrawing a valid amount", function () {
            it("decreases the account balance by a given amount", function () {
                checking.withdraw(700);
                assert.equal(checking.getBalance(), -200);
            });
        });
        describe("toString", function () {
            it("displays checkingAccount details", function () {
                assert.equal(checking.toString(), `Checking Account ${checking.getNumber()}: balance ${checking.getBalance()}: Overdraft limit ${checking.getOverdraftLimit()}`);
            });
        });
        describe("endOfMonth", function () {
            describe("when the balance is less than 0", function () {
                it("displays a warning message", function () {
                    assert.equal(checking.endOfMonth(), 'Warning, low balance ChekingAccount 3333: balance: -200 Overdraft limit: 200');
                });
            });
            describe("when the balance is greater than 0", function () {
                it("displays checking account updates", function () {
                    checking.deposit(300);
                    assert.equal(checking.endOfMonth(), "");
                });
            })
        });
    });
});
//4. test code for the bank class methods
describe("Bank", function () {
   var bank = new Bank();

    describe("addAccount", function () {
        it("adds an account, and returns number of accounts", function () {
            bank.addAccount('111b');
            assert.equal(bank.addAccount('111a'), 2);
        });
    });

    describe("addSavingsAccount", function () {
        it("adds a savings account, and returns number of accounts", function () {
            assert.equal(bank.addSavingsAccount('222a', 10), 3);
        });
    });

    describe("addCheckingAccount", function () {
        it("adds a checking account, and returns number of accounts", function () {
            assert.equal(bank.addCheckingAccount('333a',100), 4);
        });
    });
    
    describe("closeAccount",function(){
        it("removes an account from array of accounts",function(){
            assert.equal(bank.closeAccount('111b'),3);
        });
    });
    describe("accountReport", function () {
        it("Prints details of each existing account", function () {
           assert.equal(bank.accountReport(),"Account 111a: balance 0\nSavings Account 222a: balance 0: Interest 10\nChecking Account 333a: balance 0: Overdraft limit 100");
        });
    });
});