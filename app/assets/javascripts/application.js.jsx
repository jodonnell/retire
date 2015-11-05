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
//= require_tree .

window.onload = function () {

    var time = new Time();
    var last = Date.now();
    window.setInterval(function () {
        var now = Date.now();
        time.tick(now - last);
        last = now;
    }, 16);

    ReactDOM.render(<TimerView time={time}/>, document.getElementById('time'));
}
