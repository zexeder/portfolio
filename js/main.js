// Dinamic replace title
var data = $('.caption-page').html() + ' | Антон Васильев';
document.title = data.replace( /([\s\S]+)<title>/, '' ).replace(/<\/title>([\s\S]+)/, '' );

//Dinamic replace logo
$('.logo a').text('Anton Vasiliev');

//Main menu
var pages = [
	{
		url: 'index',
		title: 'Главная'
	},
	{
		url: 'projects',
		title: 'Портфолио'
	},
	{
		url: 'notes',
		title: 'Заметки'
	},
	{
		url: 'about',
		title: 'Обо мне'
	}
];
$('#menu').html(Mustache.render($('#menu').html(), {pages: pages}));

//Portfolio list
var preview = [
	{
		src: '../img/screen/mini-iphone',
		capt: 'iPhone',
		desc: 'Верстка макета из PSD',
		link: 'pr_iphone',
		more: 'Читать далее...'
	},
	{
		src: '../img/screen/mini-temryuk',
		capt: 'Отдых в Темрюке',
		desc: 'Сайт об отдыхе в г.Темрюке',
		link: 'pr_temryuk',
		more: 'Читать далее...'
	},
	{
		src: '../img/screen/mini-orgteh',
		capt: 'ОргТехСтрой',
		desc: 'Редизайн сайта о строительстве',
		link: 'pr_orgteh',
		more: 'Читать далее...'
	},
	{
		src: '../img/screen/mini-test-yug',
		capt: 'Genetic-test',
		desc: 'Тестирование по отпечаткам пальцев',
		link: 'pr_test',
		more: 'Читать далее...'
	}

];
$('#portfolio-examples').html(Mustache.render($('#portfolio-examples').html(), {preview: preview}));

//Button Go Back
$('#goBack').html('&larr; Назад').on('click', function(){
	window.history.go(-1);
});

// active menu
$(function () { 
    $('#menu a').each(function () {
        var location = window.location.href;
        var link = this.href; 
        if(location == link) {
            $(this).addClass('active');
        }
    });
});