class Income {
    constructor(income) {
        this._income = income;
    }

    set income(income) {
        this._income = income;
    }

    amount() {
        return this._income;
    }

    description() {
        return 'Income';
    }
};
