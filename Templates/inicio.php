<?php
	include("conexion.php");
	$user=$_POST['usuario'];
	$pass=$_POST['passwor'];
	$base = new conexion;
	$base->login($user, $pass);
	$base->cerrar();
?>