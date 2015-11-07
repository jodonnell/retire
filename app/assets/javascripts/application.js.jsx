// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require react
//= require react_ujs
//= require components
//= require lodash
//= require_tree .

function setup() {
    var time = new Time();
    var income = new Income(3210 / 365);
    var bankAccount = new BankAccount();

    var last = Date.now();
    window.setInterval(function () {
        var now = Date.now();
        time.tick();

        bankAccount.deposit(income);
        last = now;
    }, 1000);

    ReactDOM.render(<TimerView time={time}/>, document.getElementById('time'));
    ReactDOM.render(<BankAccountView bankAccount={bankAccount}/>, document.getElementById('bankAccount'));

    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $(document).on('debit', (event, bankAccount, debit) => {
        let rounded = Math.round(debit.amount() * 100) / 100;
        let newDebit = $(`<div class="debit">${debit.description()} $${rounded}</div>`).appendTo('#debits');


        let left = getRandomIntInclusive(0, $(window).width() - 100);
        let top = getRandomIntInclusive(0, $(window).height() - 100);
        newDebit.css('left', left);
        newDebit.css('top', top);
        newDebit.fadeIn(300).delay(500).fadeOut(800);
    })

}
