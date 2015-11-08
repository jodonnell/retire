class BankAccount {
    constructor() {
        this._amount = 0;
    }

    amount() {
        return this._amount;
    }

    transact(debit, inflation) {
        $(document).trigger('debit', [this, debit, inflation]);
        this._amount += debit.amount(inflation);
    }
}
