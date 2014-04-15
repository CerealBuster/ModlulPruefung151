<?php
$mysqli7 = new mysqli("localhost", "root", "","zool");
$mysqli7->set_charset("utf8");
if ($mysqli7 -> connect_error)
{
  echo "Keine Verbindung zur Datenbank";
  exit();
}
//$benutzername = $_SESSION["user_nickname"];
//$nachname = htmlspecialchars($_POST['name']);
//$vorname=htmlspecialchars($_POST['vorname']);

$projectID = htmlspecialchars($_POST['key']);


$query = "Delete
          FROM projekt
          WHERE projekt_id = '$projectID';";

$sql7 = $mysqli7 -> query($query);

  // Projektdaten in ein Array auslesen.
  
   //$data2 = $sql2  -> fetch_array();
   $str="1";

 
  

  // Sessionvariablen erstellen und registrieren
  //$data["Id"];
  //$data["Nickname"];
  //$data["Nachname"];
  //$data["Vorname"];
  $mysqli7 -> close();
  echo ($str);
  //echo json_encode($data2);
?>