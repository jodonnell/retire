describe(Simulation, function() {
    var simulation;
    beforeEach(function () {
        simulation = new Simulation();
    });

    it("has time", function() {
        expect(simulation.time.time).toBe(0);
    });

    it("has a bank account", function() {
        expect(simulation.bankAccount.amount).toBe(0);
    });

    it("will increase the day on a tick", function() {
        var spy = sinon.spy(simulation.time, "tick");
        var bankAccountSpy = sinon.spy(simulation.bankAccount, "deposit");
        simulation.tick();
        expect(spy.called).toBeTruthy();
        expect(bankAccountSpy.calledWith(simulation.income));
    });
});
