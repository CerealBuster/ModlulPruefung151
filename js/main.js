function createProjectList(){
	$.post('php/createAdresslist.php',function(query){
		
        $('#projektdatenListe').append('<ul>');
		var entrynames = query.split(";");
		for (x in entrynames){
    	 $('#projektdatenListe').append('<li><a href="" class="kontaktLink"    onclick="loadContact($(this).text())">' +entrynames[x]+'</a></li>');
		}
		$('#projektdatenListe li').last().remove();
        $('projektdatenListe').append('</ul>');
		$('#projektdatenListe').listview('refresh');		
	});
}

 $(document).bind('pageinit', function (){
     createProjectList();
 });