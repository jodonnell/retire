class SimDate {
    constructor(year, month, day) {
        this._date = new Date(year, month - 1, day);
    }

    get year() {
				return this._date.getFullYear();
    }

    get day() {
				return this._date.getDate();
    }

    set day(newDay) {
        this._date.setDate(newDay);
    }

    get month() {
				return this._date.getMonth() + 1;
    }

    get time() {
        return this._date.getTime();
    }

    dateString() {
        return this._date.toDateString();
    }

    dayDiff(other) {
        return Math.round((other.time - this.time) / (1000 * 60 * 60 * 24));
    }

    static startDate() {
        return new SimDate(1950, 1, 1);
    }
}
