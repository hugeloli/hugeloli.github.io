$(document).ready(function () {
    // panel 1
    $('#panel-1').on('click', function () {
        ga('send', 'event', 'open link in current window', 'click', 'New Comments', 'open link in current window via click `New Comments`');
        window.location.href = 'http://www.hugeloli.com/third/2048/';
    });

    // panel 2
    $('#panel-2').on('click', function () {
        ga('send', 'event', 'open link in new tab', 'click', 'open link in new tab', 'open link in new tab via click `open link in new tab`');
        window.open('http://www.hugeloli.com/third/fireworks/');
    });

    // panel 3
    $('#panel-3').on('click', function () {
        ga('send', 'event', 'open link in current window', 'double-click', 'New Orders', 'open link in current window via double-click `New Orders`');
        window.location.href = 'http://www.hugeloli.com/third/2048/';
    });

    // panel 4
    $('#panel-4').on('click', function () {
        ga('send', 'event', 'open link in new tab', 'double-click');
        window.open('http://www.hugeloli.com/third/fireworks/');
    });
});
