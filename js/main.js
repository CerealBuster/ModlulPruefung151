function createProjectList(){
	$.post('php/projektdatenSelect.php',function(query){
		var tabelle = '<table border = 1><tr><th>Projekt bezeichnung</th><th>beschreibung</th><th>beginn</th><th>ende</th><th>auftragsvolumen</th><th>Auftrags bezeichnung</th><th>Projektleiter Name</th><th>Projektleiter Vorname</th></tr>'
		var entrynames = query.split(";");
        alert(entrynames[7]);
		for (x in entrynames){
            tabelle += '<tr><td>'+entrynames[0]+'</td><td>'+entrynames[1]+'</td><td>'+entrynames[2]+'</td><td>'+entrynames[3]+'</td><td>'+entrynames[4]+'</td><td>'+entrynames[5]+'</td><td>'+entrynames[6]+'</td><td>'+entrynames[7]+'</td></td></tr>';
            }
        tabelle += '</table>'
        $('#projektListe').append(tabelle);
		//$('#projektdatenListe li').last().remove();
        //$('projektdatenListe').append('</ul>');
		//$('#projektdatenListe').listview('refresh');		
	});
}

 $(document).ready(function (){
     createProjectList();
 });