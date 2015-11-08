describe("ReoccuringTransaction", function() {
    var transaction;
    beforeEach(function () {
        transaction = new Transaction(100, 'Income');
    });

    it("will work monthly", function() {
        var reoccuringTransaction = new ReoccuringTransaction(transaction, 'monthly');
        expect(reoccuringTransaction.shouldActivate(new Date(1950, 0, 1))).toBeTruthy();
        expect(reoccuringTransaction.shouldActivate(new Date(1950, 1, 1))).toBeTruthy();
        expect(reoccuringTransaction.shouldActivate(new Date(1950, 1, 2))).toBeFalsy();
    });

    it("will work daily", function() {
        var reoccuringTransaction = new ReoccuringTransaction(transaction, 'daily');
        expect(reoccuringTransaction.shouldActivate(new Date(1950, 0, 1))).toBeTruthy();
        expect(reoccuringTransaction.shouldActivate(new Date(1950, 0, 2))).toBeTruthy();
    });

    it("will work biweekly", function() {
        var reoccuringTransaction = new ReoccuringTransaction(transaction, 'biweekly');
        expect(reoccuringTransaction.shouldActivate(new Date(1950, 0, 1))).toBeTruthy();
        expect(reoccuringTransaction.shouldActivate(new Date(1950, 0, 15))).toBeTruthy();
        expect(reoccuringTransaction.shouldActivate(new Date(1950, 0, 2))).toBeFalsy();
    });
});
