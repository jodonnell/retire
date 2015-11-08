class Inflation {
    constructor() {
    }

    forDate(date) {
        let dateDiff = this.dayDiff(new Date(1950, 0, 1), date);
        let perDay = 0.0182 / 365;
        return dateDiff * perDay + 1;
    }

    dayDiff(first, second) {
        return Math.round((second - first)/(1000 * 60 * 60 * 24));
    }
}
