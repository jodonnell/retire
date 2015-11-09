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
        let currentDate = SimDate.startDate();
        currentDate.day = currentDate.day + this.toDays();
        return currentDate;
    }
};
