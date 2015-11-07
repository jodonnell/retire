//= require jasmine-jquery

describe(Transaction, function() {
    var transaction;
    beforeEach(function () {
        transaction = new Transaction(100, 'test');
    });

    it("has a description", function() {
        expect(transaction.description).toBe('test');
    });

    it("has an amount", function() {
        expect(transaction.amount).toBe(100);
    });
});
