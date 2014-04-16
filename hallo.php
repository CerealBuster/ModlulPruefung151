<?php
session_start ();
if (!isset ($_SESSION["user_id"]))
{
  header ("Location:index.html");
}
?> 
<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset= "UTF-8" />
        <title>Projektdaten</title>
        <script src="js/zepto.js"></script>
		<script src="js/main.js"></script>
    </head>
    <body>
        <h1>hallo</h1>
        <p>Hier erscheint in kürze eine Benutzerverwaltung</p>
        <button id = "logoutButton">logout</button>

    </body>
</html>