<?php

require 'Utility.php';

/**
 * 
 */
class Types extends Utility
{
	

	// api/GetTypes.php
	public function get()
	{

		$this -> SetHeader();
		$bdd = $this -> ConnexionToDatabase();

		$sql = "SELECT * FROM type";
		$req = $bdd -> prepare($sql);
		$req -> execute();
		$result = $req -> fetchAll();
		echo json_encode($result);

	}

	// api/PostTypes.php
	public function post()
	{
		$this -> SetHeader();
		$bdd =$this -> ConnexionToDatabase();

		$json = file_get_contents('php://input');
    	$data = json_decode($json);

		$nomtype 	= $data -> nomtype;

		$req = $bdd -> prepare("INSERT INTO type VALUES('', :nomtype)");
		$req -> execute(array(
			'nomtype' => $nomtype
		));

		echo 'Le type : '.$nomtype.' a été ajouté avec success';
	}

	// api/DeleteTypes.php&idtype=:id
	public function delete(){

		$this -> SetHeader();
		$bdd = $this -> ConnexionToDatabase();
		$idtype = $_GET['idtype'];
		$req = $bdd -> prepare("DELETE FROM type WHERE idtype = :idtype");
		$req -> execute(array(
			'idtype' => $idtype
		));

		echo 'Ok, le type n° '.$idtype.' a bien été supprimé';
	}
}