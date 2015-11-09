describe("Inflation", function() {
    var inflation;
    beforeEach(function () {
        inflation = new Inflation(SimDate.startDate());
    });

    it("can give you the inflation since the start date", function() {
        expect(inflation.forDate(SimDate.startDate())).toBe(1);
        expect(inflation.forDate(new SimDate(1951, 1, 1))).toBe(1.0808510638297872);
        expect(inflation.forDate(new SimDate(2015, 1, 1))).toBe(9.944978723404255);
    });

});
