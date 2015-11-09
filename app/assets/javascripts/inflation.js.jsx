class Inflation {
    constructor(startDate) {
        this._startDate = startDate;
    }

    forDate(date) {
        let startingCost = inflationData[this._startDate.getFullYear()][this._startDate.getMonth()];
        let endingCost = inflationData[date.getFullYear()][date.getMonth()];
        let multiplier = 1 / startingCost;
        return multiplier * endingCost;
    }

    dayDiff(first, second) {
        return Math.round((second - first)/(1000 * 60 * 60 * 24));
    }
}
