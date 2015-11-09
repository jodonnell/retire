describe("SimDate", function() {
    var simDate;
    beforeEach(function () {
        simDate = new SimDate(1950, 4, 14);
    });

    it("gives you a year", function() {
        expect(simDate.year).toBe(1950);
    });

    it("gives you a day", function() {
        expect(simDate.day).toBe(14);
    });

    it("gives you a month", function() {
        expect(simDate.month).toBe(4);
    });

    it("gives you a start date", function() {
        var startDate = SimDate.startDate();
        expect(startDate.year).toBe(1950);
    });

});
