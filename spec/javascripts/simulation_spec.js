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
        simulation.tick();
        expect(spy.called).toBeTruthy();
    });

    it("will pay rent on the first of the month", function() {
        var bankAccountSpy = sinon.spy(simulation.bankAccount, "transact");
        var stub = sinon.stub(simulation._rent, "shouldActivate", function () { return true; });
        simulation.tick();
        expect(bankAccountSpy.calledWith(simulation._rent.transaction)).toBeTruthy();
    });
});
