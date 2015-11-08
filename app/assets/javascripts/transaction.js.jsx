class Transaction {
    constructor(amount, description) {
        this._amount = amount;
        this._description = description;
    }

    amount(inflationPercent) {
        return this._amount * inflationPercent;
    }

    get description() {
        return this._description;
    }
};
