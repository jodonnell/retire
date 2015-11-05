class Time {
    constructor() {
        this.time = 0;
    }

    tick (timeElapsed) {
        this.time += 1;
    }

    toDays() {
        return Math.round(this.time);
    }

    toCurrentDate() {
        let currentDate = new Date(1950, 0, 1);
        currentDate.setDate(currentDate.getDate() + this.toDays());
        return currentDate;
    }
};
