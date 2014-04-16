<?php
$mysqli8 = new mysqli("localhost", "root", "","zool");
$mysqli8->set_charset("utf8");
if ($mysqli8 -> connect_error)
{
  echo "Keine Verbindung zur Datenbank";
  exit();
}

$bezeichnung1 = htmlspecialchars($_POST['bezeichnung1']);
$beschreibung = htmlspecialchars($_POST['projektbeschr']);
$beginDatum = htmlspecialchars($_POST['beginn1']);
$endDatum = htmlspecialchars($_POST['ende1']);
$auftragsvol = htmlspecialchars($_POST['auftragsvol']);
$abteilungName = htmlspecialchars($_POST['abteilungName']);
$projektLeit = htmlspecialchars($_POST['projektLeit']);

$query = "INSERT INTO projekt (bezeichnung,beschreibung, beginn, ende, auftragsvolumen, auftraggeber_id, projektleiter_id)
          VALUES('$bezeichnung1', '$beschreibung', '$beginDatum', '$endDatum', $auftragsvol, $abteilungName, $projektLeit)";

$mysqli8 -> query($query);
$mysqli8 -> close();
//echo "update";
?>