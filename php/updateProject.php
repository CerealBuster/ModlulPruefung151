<?php

$mysqli9 = new mysqli("localhost", "root", "","zool");
$mysqli9->set_charset("utf8");
if ($mysqli9 -> connect_error)

{
  echo "Keine Verbindung zur Datenbank";
  exit();
}

$pk = htmlspecialchars($_POST['primPk']);
$bezeichnung1 = htmlspecialchars($_POST['bezeichnung1']);
$beschreibung = htmlspecialchars($_POST['projektbeschr']);
$beginDatum = htmlspecialchars($_POST['beginn1']);
$endDatum = htmlspecialchars($_POST['ende1']);
$auftragsvol = htmlspecialchars($_POST['auftragsvol']);
$abteilungName = htmlspecialchars($_POST['abteilungName']);
$projektLeit = htmlspecialchars($_POST['projektLeit']);


$query = "UPDATE projekt 
          SET bezeichnung = '$bezeichnung1',beschreibung = '$beschreibung', beginn = '$beginDatum', ende = '$endDatum', auftragsvolumen = $auftragsvol,
          auftraggeber_id = $abteilungName, projektleiter_id = $projektLeit
          WHERE projekt_id = $pk";

/*$query = "UPDATE projekt 
          SET bezeichnung = 'test', beginn = '1999999' , ende = '9999', auftragsvolumen = 12323,
          auftraggeber_id = 1002, projektleiter_id = 1
          WHERE projekt_id = 1008";*/
$mysqli9 -> query($query); 
$mysqli9 -> close();
//echo "update";
?>