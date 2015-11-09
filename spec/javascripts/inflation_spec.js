describe("Inflation", function() {
    var inflation;
    beforeEach(function () {
        inflation = new Inflation(new Date(1950, 0, 1));
    });

    it("can give you the inflation since the start date", function() {
        expect(inflation.forDate(new Date(1950, 0, 1))).toBe(1);
        expect(inflation.forDate(new Date(1951, 0, 1))).toBe(1.0808510638297872);
        expect(inflation.forDate(new Date(2015, 0, 1))).toBe(9.944978723404255);
    });

});
