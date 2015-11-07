class Simulation {
    constructor() {
        this._time = new Time();
        this._income = new Transaction(3210 / 365, 'Income');
        this._bankAccount = new BankAccount();
        $(document).on('debit', (event, bankAccount, debit) => { this.onDebit(bankAccount, debit) })
    }

    get time() {
        return this._time;
    }

    get bankAccount() {
        return this._bankAccount;
    }

    get income() {
        return this._income;
    }

    tick() {
        this.time.tick();
        this.bankAccount.deposit(this.income);
    }

    getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onDebit(bankAccount, debit) {
        let rounded = Math.round(debit.amount * 100) / 100;
        let newDebit = $(`<div class="debit">${debit.description} $${rounded}</div>`).appendTo('#debits');

        let left = this.getRandomIntInclusive(0, $(window).width() - 100);
        let top = this.getRandomIntInclusive(0, $(window).height() - 100);
        newDebit.css('left', left);
        newDebit.css('top', top);
        newDebit.fadeIn(300).delay(500).fadeOut(800);
    }
};
