class Simulation {
    constructor() {
        this._time = new Time();
        this._income = new ReoccuringTransaction(new Transaction(3210 / 52.1429 * 2, 'Income'), 'biweekly');
        this._rent = new ReoccuringTransaction(new Transaction(-60, 'Rent'), 'monthly');
        let food = new ReoccuringTransaction(new Transaction(-1, 'Food'), 'daily');
        this._reoccuring = [this._income, this._rent, food];
        this._bankAccount = new BankAccount();
        //$(document).on('debit', (event, bankAccount, debit) => { this.onDebit(bankAccount, debit) })
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
        _.each(this._reoccuring, function (reoccuringTransaction) {
            if (reoccuringTransaction.shouldActivate(this.time.toCurrentDate())) {
                this.bankAccount.transact(reoccuringTransaction.transaction);
            }
        }, this);

    }


    onDebit(bankAccount, debit) {
        let rounded = Math.round(debit.amount * 100) / 100;

        let withdrawl = '';
        if (rounded < 0) {
            withdrawl = 'withdrawl';
        }
        let abs = Math.abs(rounded)
        let newDebit = $(`<div class="transaction ${withdrawl}">${debit.description} $${abs}</div>`).appendTo('#transactions');

        let left = this.getRandomIntInclusive(0, $(window).width() - 100);
        let top = this.getRandomIntInclusive(0, $(window).height() - 100);
        newDebit.css('left', left);
        newDebit.css('top', top);

        let size = (Math.log(((abs - 8.79) + 1)) + 1) * 20;
        newDebit.css('font-size', size);
        newDebit.fadeIn(300).delay(500).fadeOut(800);
    }
};
