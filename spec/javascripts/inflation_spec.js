describe("Inflation", function() {
    var inflation;
    beforeEach(function () {
        inflation = new Inflation();
    });

    it("can give you the inflation since the start date", function() {
        expect(inflation.forDate(new Date(1950, 0, 1))).toBe(1);
        expect(inflation.forDate(new Date(1951, 0, 1))).toBe(1.0182);
    });

});
