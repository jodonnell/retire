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

    transact(debit) {
        $(document).trigger('debit', [this, debit]);
        this._amount += debit.amount;
    }
}
