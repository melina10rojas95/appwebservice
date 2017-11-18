$("#miformulario").submit(function(evento){
	evento.preventDefault();
	//console.info("activando formulario......") 
	var cadena=$(this).serializeArray();
	//console.info(cadena);
	$.ajax({
		url:"http://localhost/prueba.php"

	}).done(function(respuesta){
		$(".mensaje").html(respuesta);
	});
});