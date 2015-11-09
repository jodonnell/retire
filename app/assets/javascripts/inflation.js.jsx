class Inflation {
    constructor(startDate) {
        this._startDate = startDate;
    }

    forDate(date) {
        let startingCost = inflationData[this._startDate.year][this._startDate.month - 1];
        let endingCost = inflationData[date.year][date.month - 1];
        let multiplier = 1 / startingCost;
        return multiplier * endingCost;
    }
}
