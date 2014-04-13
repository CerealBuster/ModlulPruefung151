<?php
//session_start ();
$mysqli5 = new mysqli("localhost", "root", "","zool");
if ($mysqli5 -> connect_error)
{
  echo "Keine Verbindung zur Datenbank";
  exit();
}
//$b_Id = $_SESSION["user_id"];
//$benutzername = $_SESSION["user_nickname"];
$rowName = htmlspecialchars($_POST['selectedOrder']);

$query =  "SELECT bezeichnung, kurzname,adr_strasse, adr_plz, adr_ort, tel, fax, email, sonderkonditionen
          FROM auftraggeber
          ORDER BY $rowName;";

$sql5 = $mysqli5 -> query($query);
$row_cnt = 0;
if ($sql5){
 	$row_cnt = $sql5->num_rows;
}
if ($row_cnt <= 0)
{
	$mysqli5-> close();	
	echo "querynotokINOrderProject";

}
else
{
  // Benutzerdaten in ein Array auslesen.
  

   $str="";
  while($data5 = $sql5 -> fetch_array()){
  	$str .=$data5['bezeichnung'].";".$data5['kurzname'].";".$data5['adr_strasse'].";"
        .$data5['adr_plz'].";".$data5['adr_ort'].";".$data5['tel'].";".$data5['fax'].";"
        .$data5['email'].";".$data5['sonderkonditionen'].";";
  }
 
  
  $mysqli5 -> close();
  echo ($str);
}
?>