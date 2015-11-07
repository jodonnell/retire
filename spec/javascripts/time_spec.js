describe(Time, function() {
    var time;
    beforeEach(function () {
        time = new Time();
    });

    it("passes time", function() {
        expect(time.toDays()).toBe(0);
        time.tick();
        expect(time.toDays()).toBe(1);
  });

    it("has a current date", function() {
        time.tick();
        expect(time.toCurrentDate()).toEqual(new Date(1950, 0, 2));
        _.times(365, time.tick, time);
        expect(time.toCurrentDate()).toEqual(new Date(1951, 0, 2));
  });
});
