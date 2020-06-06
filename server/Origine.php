<?php

require 'Utility.php';

class Origine extends Utility {


	// api/GetCartons
	public function get(){

		$this -> SetHeader();
		$bdd = $this -> ConnexionToDatabase();

		$sql = "SELECT * from orgine";
		$req = $bdd -> prepare($sql);
		$req -> execute();
		$result = $req -> fetchAll();
		echo json_encode($result);

	}


}