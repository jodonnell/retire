class ReoccuringTransaction {
    constructor(transaction, type) {
        this._transaction = transaction;
        this._type = type;
    }

    shouldActivate(date) {
        if (this._type === 'monthly')
            return date.getDate() === 1;
        else if (this._type === 'daily')
            return true;
        else if (this._type === 'biweekly')
            return (this.dayDiff(new Date(1950, 0, 1), date)) % 14 == 0;
    }

    get transaction() {
        return this._transaction;
    }

    dayDiff(first, second) {
        return Math.round((second - first)/(1000 * 60 * 60 * 24));
    }
}
