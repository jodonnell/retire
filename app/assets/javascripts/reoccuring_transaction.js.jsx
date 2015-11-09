class ReoccuringTransaction {
    constructor(transaction, type) {
        this._transaction = transaction;
        this._type = type;
    }

    shouldActivate(date) {
        if (this._type === 'monthly')
            return date.day === 1;
        else if (this._type === 'daily')
            return true;
        else if (this._type === 'biweekly')
            return (SimDate.startDate().dayDiff(date)) % 14 == 0;
    }

    get transaction() {
        return this._transaction;
    }
}
