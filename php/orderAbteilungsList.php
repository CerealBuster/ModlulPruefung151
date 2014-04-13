<?php
//session_start ();
$mysqli6 = new mysqli("localhost", "root", "","zool");
if ($mysqli6 -> connect_error)
{
  echo "Keine Verbindung zur Datenbank";
  exit();
}
//$b_Id = $_SESSION["user_id"];
//$benutzername = $_SESSION["user_nickname"];
$rowName = htmlspecialchars($_POST['selectedOrder']);

$query =  "SELECT abteilung_name,bezeichnung
           FROM abteilung
           ORDER BY $rowName;";

$sql6 = $mysqli6 -> query($query);
$row_cnt = 0;
if ($sql6){
 	$row_cnt = $sql6->num_rows;
}
if ($row_cnt <= 0)
{
	$mysqli6-> close();	
	echo "querynotokINOrderProject";

}
else
{
  // Benutzerdaten in ein Array auslesen.
  

   $str="";
  while($data6 = $sql6 -> fetch_array()){
  	$str .=$data6['abteilung_name'].";".$data6['bezeichnung'].";";
  }
 
  
  $mysqli6 -> close();
  echo ($str);
}
?>