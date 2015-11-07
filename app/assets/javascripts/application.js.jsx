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
    var simulation = new Simulation();

    window.setInterval(function () {
        simulation.tick();
    }, 1000);

    ReactDOM.render(<TimerView time={simulation.time}/>, document.getElementById('time'));
    ReactDOM.render(<BankAccountView bankAccount={simulation.bankAccount}/>, document.getElementById('bankAccount'));
}
