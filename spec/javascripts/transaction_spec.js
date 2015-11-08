//= require jasmine-jquery

describe("Transaction", function() {
    var transaction;
    beforeEach(function () {
        transaction = new Transaction(100, 'test');
    });

    it("has a description", function() {
        expect(transaction.description).toBe('test');
    });

    it("has an amount that is adjusted by inflation", function() {
        var inflation = new Inflation();
        var startDate = inflation.forDate(new Date(1950, 0, 1));
        expect(transaction.amount(startDate)).toBe(100);

        var startDate = new Date(1951, 0, 1);
        expect(transaction.amount(inflation.forDate(startDate))).toBe(101.82);
    });
});
