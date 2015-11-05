class Time {
    constructor() {
        this.time = 0;
    }

    tick (timeElapsed) {
        this.time += timeElapsed;
    }

    toDays() {
        return Math.round(this.time / 1000);
    }

    toCurrentDate() {
        let currentDate = new Date(1950, 0, 1);
        currentDate.setDate(currentDate.getDate() + this.toDays());
        return currentDate;
    }
};
