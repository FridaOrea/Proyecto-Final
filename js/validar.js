$(document).on("ready", inicio);
$(document).on("ready", inici);
$(document).on("ready", inic);

function inicio(){
	$("#uno").hide();
	$("#enviar").click(validar);
}

function validar(){
	var valor= document.getElementById("Name").value;
	if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
		$("#Name").parent().attr("class","form-group has-error col-xs-4");
		$("#Name").parent().children("span").text("Debe ingresar nombre").show();
		return false;
	}
	if(!(/^[a-zA-Z]{4,10}$/.test(valor))) {
		$("#Name").parent().attr("class","form-group has-error col-xs-4");
		$("#Name").parent().children("span").text("Solo acepta letras y al menos 4 carácteres").show();
		return false;
	}
	else{
		$("#Name").parent().attr("class","form-group has-success col-xs-4");
		$("#Name").parent().children("span").text("").hide();
	}	
}

function inici(){
	$("#dos").hide();
	$("#enviar").click(valida);
}

function valida(){
	var valo= document.getElementById("Ape").value;
	if( valo == null || valo.length == 0 || /^\s+$/.test(valo) ) {
		$("#Ape").parent().attr("class","form-group has-error col-xs-4");
		$("#Ape").parent().children("span").text("Debe ingresar apellido").show();
		return false;
	}
	if(!(/^[a-zA-Z]{4,10}$/.test(valo))) {
		$("#Ape").parent().attr("class","form-group has-error col-xs-4");
		$("#Ape").parent().children("span").text("Solo acepta letras y al menos 4 carácteres").show();
		return false;
	}
	else{
		$("#Ape").parent().attr("class","form-group has-success col-xs-4");
		$("#Ape").parent().children("span").text("").hide();
	}	
}

function inic(){
	$("#tres").hide();
	$("#enviar").click(valid);
}

function valid(){
	var val= document.getElementById("Em").value;
	if( val == null || val.length == 0 || /^\s+$/.test(val) ) {
		$("#Em").parent().attr("class","form-group has-error col-xs-4");
		$("#Em").parent().children("span").text("Debe ingresar una dirección de correo").show();
		return false;
	}
	if(!(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(val))) {
		$("#Em").parent().attr("class","form-group has-error col-xs-4");
		$("#Em").parent().children("span").text("Ingresa un correo válido").show();
		return false;
	}
	else{
		$("#Em").parent().attr("class","form-group has-success col-xs-4");
		$("#Em").parent().children("span").text("").hide();
	}
}