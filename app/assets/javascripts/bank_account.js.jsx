class BankAccount {
    constructor() {
        this._amount = 0;
    }

    get amount () {
        return this._amount;
    }

    set amount (amount) {
        this._amount = amount;
    }

    deposit(amount) {
        this._amount += amount;
    }
}
