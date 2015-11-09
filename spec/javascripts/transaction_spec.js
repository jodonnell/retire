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
        var inflation = new Inflation(SimDate.startDate());
        var startDate = inflation.forDate(SimDate.startDate());
        expect(transaction.amount(startDate)).toBe(100);

        var startDate = new SimDate(1951, 1, 1);
        expect(transaction.amount(inflation.forDate(startDate))).toBe(108.08510638297872);
    });
});
