<?php

require 'Utility.php';

class Cartons extends Utility {


	// api/GetCartons
	public function get(){

		$this -> SetHeader();
		$bdd = $this -> ConnexionToDatabase();

		$sql = "SELECT C.idcarton, C.type,T.nomtype,C.contenu,C.origine, O.lieuorigine,C.destination, D.lieudestination
				FROM carton as C
				join type as T on C.type = T.idtype
				join orgine as O on C.origine = O.idorigine
				join destination as D on C.destination = D.iddestination
				";
		$req = $bdd -> prepare($sql);
		$req -> execute();
		$result = $req -> fetchAll();
		echo json_encode($result);

	}

	public function add (){

	    $this -> SetHeader();
	    $bdd = $this -> ConnexionToDatabase();

	    $json = file_get_contents('php://input');
	    $data = json_decode($json);
	    
	    $num      		= $data -> num;
	    $type   		= $data -> type;
	    $contenu        = $data -> contenu;
	    $origine     	= $data -> origine;
	    $destination    = $data -> destination;
	    
	    $req = $bdd -> prepare("
	              INSERT INTO carton (num, type, contenu, origine, destination, idusers)
	              VALUES (:num, :type, :contenu, :origine, :destination, '58')
	            ");
	    
	    $requete = $req -> execute(array(
	        'num'     		=> $num,
	        'type'  		=> $type,
	        'contenu'      	=> $contenu,
	        'origine'    	=> $origine,
	        'destination' 	=> $destination
	    ));

	    echo 'post ok';

	}

}