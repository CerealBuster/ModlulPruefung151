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

$query = "SELECT p.bezeichnung, p.beschreibung, p.beginn, p.ende, p.auftragsvolumen,p.auftraggeber_id,p.projektleiter_id
          FROM projekt p
          WHERE p.projekt_id = '$projectID';";

$sql7 = $mysqli7 -> query($query);
$row_cnt = 0;
if ($sql7){
 	$row_cnt = $sql7->num_rows;
}
if ($row_cnt <= 0)
{
	$mysqli7-> close();	
	echo "querynotok IN GETCONTACT";

}
else
{
  // Projektdaten in ein Array auslesen.
  
   //$data2 = $sql2  -> fetch_array();
   $str="";
  while($data7 = $sql7 -> fetch_array()){
    $str .=$data7['bezeichnung'].";".$data7['beschreibung'].";".$data7['beginn'].";"
        .$data7['ende'].";".$data7['auftragsvolumen'].";".$data7['auftraggeber_id'].";"
        .$data7['projektleiter_id'].";";
  }
 
  

  // Sessionvariablen erstellen und registrieren
  //$data["Id"];
  //$data["Nickname"];
  //$data["Nachname"];
  //$data["Vorname"];
  $mysqli7 -> close();
  echo ($str);
  //echo json_encode($data2);
}
?>