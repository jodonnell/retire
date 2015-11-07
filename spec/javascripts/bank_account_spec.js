describe(BankAccount, function() {
    var bankAccount;
    beforeEach(function () {
        bankAccount = new BankAccount(0);
    });

    it("has an amount", function() {
        expect(bankAccount.amount).toBe(0);
    });

    it("you can set an amount", function() {
        bankAccount.amount = 100;
        expect(bankAccount.amount).toBe(100);
    });

    it("you can deposit some money", function() {
        var spyEvent = spyOnEvent(document, 'debit');

        var debit = new Transaction(100, 'test');
        bankAccount.deposit(debit)
        expect(bankAccount.amount).toBe(100);

        expect('debit').toHaveBeenTriggeredOnAndWith(document, [bankAccount, debit]);
    });
});
