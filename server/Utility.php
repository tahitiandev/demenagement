<?php

class Utility
{
	
	protected function SetHeader(){

	    header("Content-Type: application/json");
	    header("Access-Control-Allow-Origin: *");
	    header("Access-Control-Allow-Methods: *");
	    header("Access-Control-Expose-Headers: *");
	    header("Access-Control-Allow-Headers: *");
	    header("Access-Control-Allow-Origin: *");
	    

	}

	protected function ConnexionToDatabase(){
		
		return new PDO('mysql:host=localhost;dbname=demenagement;charset=utf8','root','');
		//return new PDO('mysql:host=localhost;dbname=id13181718_demenagement;charset=utf8','id13181718_gheitaa','Taravao?0123456789');

	}

}