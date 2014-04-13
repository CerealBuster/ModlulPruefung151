<?php
$mysqli1 = new mysqli("localhost", "root", "","zool");
$mysqli1->set_charset("utf8");
if ($mysqli1 -> connect_error)
{
  echo "Keine Verbindung zur Datenbank";
  exit();
}
//$benutzername = $_SESSION["user_nickname"];
//$nachname = htmlspecialchars($_POST['name']);
//$vorname=htmlspecialchars($_POST['vorname']);

$query = "SELECT bezeichnung, kurzname,adr_strasse, adr_plz, adr_ort, tel, fax, email, sonderkonditionen
          FROM auftraggeber;";
$sql1 = $mysqli1 -> query($query);
$row_cnt = 0;
if ($sql1){
 	$row_cnt = $sql1->num_rows;
}
if ($row_cnt <= 0)
{
	$mysqli1-> close();	
	echo "querynotok IN GETCONTACT";

}
else
{
  // Projektdaten in ein Array auslesen.
  
   //$data2 = $sql2  -> fetch_array();
   $str="";
  while($data1 = $sql1 -> fetch_array()){
    $str .=$data1['bezeichnung'].";".$data1['kurzname'].";".$data1['adr_strasse'].";"
        .$data1['adr_plz'].";".$data1['adr_ort'].";".$data1['tel'].";".$data1['fax'].";"
        .$data1['email'].";".$data1['sonderkonditionen'].";";
  }
 

  // Sessionvariablen erstellen und registrieren
  //$data["Id"];
  //$data["Nickname"];
  //$data["Nachname"];
  //$data["Vorname"];
  $mysqli1 -> close();
  echo ($str);
  //echo json_encode($data2);
}
?>