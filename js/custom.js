function _(id){ return document.getElementById(id); }
function submitForm(){
	_("formbtn").disabled = true;
	_("status_message").innerHTML = 'Загрузка ...';
	var formdata = new FormData();
	formdata.append( "name", _("name").value );
	formdata.append( "email", _("email").value );
	formdata.append( "message", _("message").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "process.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h2>Спасибо '+_("name").value+', сообщение отправлено.</h2>';
			} else {
				_("status_message").innerHTML = ajax.responseText;
				_("formbtn").disabled = false;
			}
		}
	}
	ajax.send( formdata );
}


// MAX-LENGTH
function isNotMax(e){
    e = e || window.event;
    var target = e.target || e.srcElement;
    var code=e.keyCode?e.keyCode:(e.which?e.which:e.charCode)

    switch (code){
        case 13:
        case 8:
        case 9:
        case 46:
        case 37:
        case 38:
        case 39:
        case 40:
        return true;
    }
    return target.value.length <= target.getAttribute('maxlength');
}
