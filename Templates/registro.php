<?php
// Aquí revisó si los datos no estan vacíos.
	if(isset($_POST['password']) && !empty($_POST['password']) && 
	isset($_POST['usuario']) && !empty($_POST['usuario'])) {
	
		$cuenta=$_POST['cuenta'];
		$nombre=$_POST['nombre'];
		$apellido=$_POST['apellido'];
		$usuario=$_POST['usuario'];
		$password=$_POST['password'];
	
		// Si entramos es que todo se ha realizado correctamente

		$link = mysqli_connect("localhost","root","") or die ("No sirve :C");
		mysqli_select_db($link, "usuarios");

		// Con esta sentencia SQL insertaremos los datos en la base de datos
		
		mysqli_query($link, "INSERT INTO usuarios (cuenta, nombre, apellido, usuario, password) 
		VALUES ('$cuenta','$nombre','$apellido','$usuario','$password') ");

		echo "Todo correcto";
		echo "<p><a href='juego.html'>Inicia Sesión</a>
			</p>";
	}
	else{
		echo "No sirvió";
	}
	// Ahora comprobaremos que todo ha ido correctamente


?>

