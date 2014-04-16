<?php
session_start();

$mysqli11 = new mysqli("localhost", "root", "","zool");
$mysqli11->set_charset("utf8");
if ($mysqli11 -> connect_error)
{
  echo "Keine Verbindung zur Datenbank";
  exit();
}
   $benutzername = htmlspecialchars($_POST['benutzername1']);
   $password = md5(htmlspecialchars($_POST['password1']));
   //$password = htmlspecialchars($_POST['password1']);
   $query = "SELECT Id, Nickname, Nachname, Vorname FROM benutzerdaten WHERE Nickname like '$benutzername' AND Kennwort = '$password'";
$sql = $mysqli11 -> query($query);
$row_cnt = 0;
if ($sql){
 	$row_cnt = $sql->num_rows;
}


if ($row_cnt <= 0)
{
	$mysqli11 -> close();	
	echo "loginnok";

}
else
{
  // Benutzerdaten in ein Array auslesen.
  $data = $sql -> fetch_array();

  // Sessionvariablen erstellen und registrieren
  $_SESSION["user_id"] = $data["Id"];
  $_SESSION["user_nickname"] = $data["Nickname"];
  $_SESSION["user_nachname"] = $data["Nachname"];
  $_SESSION["user_vorname"] = $data["Vorname"];
  $mysqli11 -> close();
  echo ('loginok');
  
}
?> 