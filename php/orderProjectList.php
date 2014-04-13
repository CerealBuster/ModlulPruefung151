<?php
//session_start ();
$mysqli4 = new mysqli("localhost", "root", "","zool");
$mysqli4->set_charset("utf8");
if ($mysqli4 -> connect_error)
{
  echo "Keine Verbindung zur Datenbank";
  exit();
}
//$b_Id = $_SESSION["user_id"];
//$benutzername = $_SESSION["user_nickname"];
$rowName = htmlspecialchars($_POST['selectedOrder']);

$query = "SELECT p.bezeichnung, p.beschreibung, p.beginn, p.ende, p.auftragsvolumen,a.bezeichnung AS pbezeichnung,m.p_name,m.vorname ,p.projekt_id 
          FROM projekt p
          JOIN auftraggeber a
          ON p.auftraggeber_id = a.auftraggeber_id
          JOIN mitarbeiter m
          ON p.projektleiter_id = m.person_id
          ORDER BY $rowName;";

$sql4 = $mysqli4 -> query($query);
$row_cnt = 0;
if ($sql4){
 	$row_cnt = $sql4->num_rows;
}
if ($row_cnt <= 0)
{
	$mysqli4-> close();	
	echo "querynotokINOrderProject";

}
else
{
  // Benutzerdaten in ein Array auslesen.
  

   $str="";
  while($data4 = $sql4 -> fetch_array()){
  	$str .=$data4['bezeichnung'].";".$data4['beschreibung'].";".$data4['beginn'].";"
        .$data4['ende'].";".$data4['auftragsvolumen'].";".$data4['pbezeichnung'].";"
        .$data4['p_name'].";".$data4['vorname'].";".$data4['projekt_id'].";";
  }
 
  
  $mysqli4 -> close();
  echo ($str);
}
?>