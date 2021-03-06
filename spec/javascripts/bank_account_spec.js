describe("BankAccount", function() {
    var bankAccount;
    var inflation;
    beforeEach(function () {
        bankAccount = new BankAccount(0);
        inflation = new Inflation(SimDate.startDate());
    });

    it("has an amount", function() {
        expect(bankAccount.amount()).toBe(0);
    });

    it("you can transact some money", function() {
        var spyEvent = spyOnEvent(document, 'debit');

        var debit = new Transaction(100, 'test');
        var inflationPercent = inflation.forDate(SimDate.startDate());
        bankAccount.transact(debit, inflationPercent);
        expect(bankAccount.amount()).toBe(100);

        expect('debit').toHaveBeenTriggeredOnAndWith(document, [bankAccount, debit, inflationPercent]);
    });
});
