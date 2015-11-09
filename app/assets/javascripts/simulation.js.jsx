class Simulation {
    constructor() {
        this._time = new Time();
        this._inflation = new Inflation(SimDate.startDate());
        this._income = new ReoccuringTransaction(new Transaction((3210 / 52.1429 * 2) * 0.78, 'Income'), 'biweekly');
        this._rent = new ReoccuringTransaction(new Transaction(-60, 'Rent'), 'monthly');
        let food = new ReoccuringTransaction(new Transaction(-1, 'Food'), 'daily');
        let transportation = new ReoccuringTransaction(new Transaction(-1, 'Transportation'), 'daily');
        this._reoccuring = [this._income, this._rent, food, transportation];
        this._bankAccount = new BankAccount();
    }

    get time() {
        return this._time;
    }

    get bankAccount() {
        return this._bankAccount;
    }

    get income() {
        return this._income;
    }

    tick() {
        this.time.tick();
        _.each(this._reoccuring, function (reoccuringTransaction) {
            if (reoccuringTransaction.shouldActivate(this.time.toCurrentDate())) {
                let percent = this._inflation.forDate(this.time.toCurrentDate());
                this.bankAccount.transact(reoccuringTransaction.transaction, percent);
            }
        }, this);

    }
};
