<?php
require 'Utility.php';

class Users extends Utility
{

    private $_username;
    private $_password;
    private $_name;
    private $_firstname;
    private $_phonenumer;
    private $_email;
    private $_address;
    private $_avatar;


// api/PostUsers.php
public function add (){

    $this -> SetHeader();
    $bdd = $this -> ConnexionToDatabase();

    $json = file_get_contents('php://input');
    $data = json_decode($json);
    
    $login      = $data -> login;
    $password   = $data -> password;
    $nom        = $data -> nom;
    $prenom     = $data -> prenom;
    $avatar     = $data -> avatar;
    $telephone  = $data -> telephone;
    $email      = $data -> email;
    $adresse    = $data -> adresse;
    
    $req = $bdd -> prepare("
              INSERT INTO users
              VALUES ('', :login, :password, :nom, :prenom, :telephone, :email, :adresse, :avatar)
            ");
    
    $requete = $req -> execute(array(
        'login'     => $login,
        'password'  => $password,
        'nom'       => $nom,
        'prenom'    => $prenom,
        'telephone' => $telephone,
        'email'     => $email,
        'adresse'   => $adresse,
        'avatar'    => $avatar
    ));

}
// api/GetUsers.php
public function get(){
    
    $this -> SetHeader();
    $bdd = $this -> ConnexionToDatabase();

    $req = $bdd -> prepare("SELECT * FROM users");
    $req -> execute();
    $result = $req -> fetchAll();
    
    $data["success"] = true;
    $data["message"] = "Liste des utilisateurs";
    $data["resultat"]["nb"] = count($result);
    $data['resultat']["liste"] = $result;
    
    
    
    echo json_encode($result);
}

// api/DeleteUsers.php
public function delete()
{
    $this -> SetHeader();

    $bdd = $this -> ConnexionToDatabase();

    $idusers = $_GET['idusers'];

    $req = $bdd -> prepare("DELETE FROM users WHERE idusers = :idusers");
    $req -> execute(array(
        'idusers' => $idusers
    ));
}

// api/GetUsers?idusers=id
public function getById(){

    $this -> SetHeader();

    $idusers = $_GET['idusers'];

    $bdd = $this -> ConnexionToDatabase();

    $sql = "SELECT * FROM users WHERE idusers = :idusers";
    $req = $bdd -> prepare($sql);
    $req -> execute(array(
        'idusers' => $idusers
    ));

    $result = $req -> fetchAll();

    echo json_encode($result);


}

// api/UpdateUsers.php
public function update(){

    $this -> SetHeader();

    $bdd = $this -> ConnexionToDatabase();

/* Les données PUT arrivent du flux */
$putdata = fopen("php://input", "r");

/* Ouvre un fichier pour écriture */
$response = fread($putdata, 1024);
$response = json_decode($response);

$idusers    = $response -> {'idusers'};
$login      = $response -> {'login'};
$password   = $response -> {'password'};
$nom        = $response -> {'nom'};
$prenom     = $response -> {'prenom'};
$telephone  = $response -> {'telephone'};
$email      = $response -> {'email'};
$adresse    = $response -> {'adresse'};
$avatar     = $response -> {'avatar'};


$req = $bdd -> prepare("UPDATE users
                        SET login = :login, password = :password, nom = :nom, prenom = :prenom, telephone = :telephone, email = :email, adresse = :adresse, avatar = :avatar
                        WHERE idusers = :idusers");

$req -> execute(array(
        'idusers'   => $idusers,
        'login'     => $login,
        'password'  => $password,
        'nom'       => $nom,
        'prenom'    => $prenom,
        'telephone' => $telephone,
        'email'     => $email,
        'adresse'   => $adresse,
        'avatar'    => $avatar
));

echo 'utilisateur n°'.$idusers.' a bien été mit à jour';

}


}//class