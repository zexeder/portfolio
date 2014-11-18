var done = 0,
    isDone = function () {
        done++;
        if (done > 1) $('body').show();
    };

$('body').hide();

$.get('header').success(function (data) { 
    $('header').html(data);
}).success(isDone);

$.get('footer').success(function (data) {
    $('footer').html(data);
}).success(isDone);

