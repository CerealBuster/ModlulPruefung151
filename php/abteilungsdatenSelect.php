<?php
$mysqli2 = new mysqli("localhost", "root", "","zool");
$mysqli2->set_charset("utf8");
if ($mysqli2 -> connect_error)
{
  echo "Keine Verbindung zur Datenbank";
  exit();
}
//$benutzername = $_SESSION["user_nickname"];
//$nachname = htmlspecialchars($_POST['name']);
//$vorname=htmlspecialchars($_POST['vorname']);

$query = "SELECT abteilung_name,bezeichnung
          FROM abteilung;";

$sql2 = $mysqli2 -> query($query);
$row_cnt = 0;
if ($sql2){
 	$row_cnt = $sql2->num_rows;
}
if ($row_cnt <= 0)
{
	$mysqli2-> close();	
	echo "querynotok IN GETCONTACT";

}
else
{
  // Projektdaten in ein Array auslesen.
  
   //$data2 = $sql2  -> fetch_array();
   $str="";
  while($data2 = $sql2 -> fetch_array()){
    $str .=$data2['abteilung_name'].";".$data2['bezeichnung'].";";
  }
 

  // Sessionvariablen erstellen und registrieren
  //$data["Id"];
  //$data["Nickname"];
  //$data["Nachname"];
  //$data["Vorname"];
  $mysqli2 -> close();
  echo ($str);
  //echo json_encode($data2);
}
?>