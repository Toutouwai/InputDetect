$(function() {
	$('#ProcessLoginForm').submit(function() {
		var html = $('html');
		var touch_input = html.data('whatintent') == 'touch' || html.data('whatinput') == 'touch';
		$('#login_touch').val(touch_input ? 1 : 0);
	});
});