class Transaction {
    constructor(amount, description) {
        this._amount = amount;
        this._description = description;
    }

    get amount() {
        return this._amount;
    }

    get description() {
        return this._description;
    }
};
