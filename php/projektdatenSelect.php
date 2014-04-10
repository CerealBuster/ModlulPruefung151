<?php
$mysqli3 = new mysqli("localhost", "root", "","zool");
if ($mysqli3 -> connect_error)
{
  echo "Keine Verbindung zur Datenbank";
  exit();
}
//$benutzername = $_SESSION["user_nickname"];
//$nachname = htmlspecialchars($_POST['name']);
//$vorname=htmlspecialchars($_POST['vorname']);

$query = "SELECT p.bezeichnung, p.beschreibung, p.beginn, p.ende, p.auftragsvolumen,a.bezeichnung AS pbezeichnung,m.p_name,m.vorname 
          FROM projekt p
          JOIN auftraggeber a
          ON p.auftraggeber_id = a.auftraggeber_id
          JOIN mitarbeiter m
          ON p.projektleiter_id = m.person_id;";
$sql3 = $mysqli3 -> query($query);
$row_cnt = 0;
if ($sql3){
 	$row_cnt = $sql3->num_rows;
}
if ($row_cnt <= 0)
{
	$mysqli3-> close();	
	echo "querynotok IN GETCONTACT";

}
else
{
  // Projektdaten in ein Array auslesen.
  
   //$data2 = $sql2  -> fetch_array();
   $str="";
  while($data3 = $sql3 -> fetch_array()){
    $str .=$data3['bezeichnung'].";".$data3['beschreibung'].";".$data3['beginn'].";"
        .$data3['ende'].";".$data3['auftragsvolumen'].";".$data3['pbezeichnung'].";"
        .$data3['p_name'].";".$data3['vorname'].";";
  }
 
  

  // Sessionvariablen erstellen und registrieren
  //$data["Id"];
  //$data["Nickname"];
  //$data["Nachname"];
  //$data["Vorname"];
  $mysqli3 -> close();
  echo ($str);
  //echo json_encode($data2);
}
?>