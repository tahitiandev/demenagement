<?php
require '../Users.php';

$user = new Users;

// api/GetUsers.php
if(empty($_GET['idusers'])){

	$user -> get();

}
// api/GetUsers.php/idusers:id
else{

	$user -> getById();
	
}

