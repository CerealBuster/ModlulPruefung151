/**
Kreiert Projekt liste
*/
function createProjectList(){
	$.post('php/projektdatenSelect.php',function(query){
		var tabelle = '<table border = 1 id ="ptable"><tr><th>Projekt bezeichnung</th><th>beschreibung</th><th>beginn</th><th>ende</th><th>auftragsvolumen</th><th>Auftrags bezeichnung</th><th>Projektleiter Name</th><th>Projektleiter Vorname</th><th>Optionen</th></tr>';
		var entrynames = query.split(";");
		var x = 0;
        while(x < entrynames.length-1){
            tabelle += '<tr>';
            for(i= 0;i<=8;i++){
              if(i < 8){       
                  tabelle += '<td>'+entrynames[x]+'</td>';
                   //x++;
              }
              else{
                tabelle += '<td><button class="optionLink" onclick="alert($(this).val())" value= '+entrynames[x]+'>Delete</button><button class="optionLink" onclick="alert($(this).val())" value= '+entrynames[x]+'>Edit</button></td>'; 
                
              }
              x++;
            /*tabelle += '<tr><td>'+entrynames[0]+'</td><td>'+entrynames[1]+'</td><td>'+entrynames[2]+'</td><td>'+entrynames[3]+'</td><td>'+entrynames[4]+'</td><td>'+entrynames[5]+'</td><td>'+entrynames[6]+'</td><td>'+entrynames[7]+'</td></td></tr>';
            */
            }
            tabelle += '</tr>';
        }
        tabelle += '</table>'
        $('#projektListe').append(tabelle);
		//$('#projektdatenListe li').last().remove();
        //$('projektdatenListe').append('</ul>');
		//$('#projektdatenListe').listview('refresh');		
	});
}

function orderPorjectList(selection){
    var selectedOrder = selection.trim();
    $('#ptable').remove();
    $.post('php/orderProjectList.php',{selectedOrder:selectedOrder},function(orderedList){
        var tabelle = '<table border = 1 id = "ptable"><tr><th>Projekt bezeichnung</th><th>beschreibung</th><th>beginn</th><th>ende</th><th>auftragsvolumen</th><th>Auftrags bezeichnung</th><th>Projektleiter Name</th><th>Projektleiter Vorname</th><th>Optionen</th></tr>';
        var entrynames = orderedList.split(";");
		var x = 0;
        while(x < entrynames.length-1){
            tabelle += '<tr>';
            for(i= 0;i<=8;i++){
              
                if( i < 8){    
                tabelle += '<td>'+entrynames[x]+'</td>';
              }
              else{
                tabelle += '<td><button class="optionLink" onclick="alert($(this).val())" value= '+entrynames[x]+'>Delete</button><button class="optionLink" onclick="alert($(this).val())" value= '+entrynames[x]+'>Edit</button></td>'; 
              }
              x++;
            }
            tabelle += '</tr>';
        }
        tabelle += '</table>'
        $('#projektListe').append(tabelle);
		
	});

}


function createAuftraggeberList(){
	$.post('php/auftraggeberdatenSelect.php',function(query){
		var tabelle = '<table border = 1 id = "agTable"><tr><th>Bezeichnung</th><th>Kurzname</th><th>Strasse</th><th>PLZ</th><th>Ort</th><th>Tel</th><th>Fax</th><th>Email</th><th>Sonderkonditionen</th></tr>';
		var entrynames = query.split(";");
		var x = 0;
        while(x < entrynames.length-1){
            tabelle += '<tr>';
            for(i= 0;i<=8;i++){
              tabelle += '<td>'+entrynames[x]+'</td>';
                x++;
            }
            tabelle += '</tr>';
        }
        tabelle += '</table>'
        $('#auftraggeberDaten').append(tabelle);
	
	});
}
function orderAuftraggeberList(selection){
    var selectedOrder = selection.trim();
    $('#agTable').remove();
    $.post('php/orderAuftraggeberList.php',{selectedOrder:selectedOrder},function(orderedList){
        var tabelle = '<table border = 1 id = "agTable"><tr><th>Bezeichnung</th><th>Kurzname</th><th>Strasse</th><th>PLZ</th><th>Ort</th><th>Tel</th><th>Fax</th><th>Email</th><th>Sonderkonditionen</th></tr>';
        var entrynames = orderedList.split(";");
		var x = 0;
        while(x < entrynames.length-1){
            tabelle += '<tr>';
            for(i= 0;i<=8;i++){
              tabelle += '<td>'+entrynames[x]+'</td>';
                x++;
            }
            tabelle += '</tr>';
        }
        tabelle += '</table>'
        $('#auftraggeberDaten').append(tabelle);
		
	});

}

function createAbteilungsList(){
	$.post('php/abteilungsdatenSelect.php',function(query){
		var tabelle = '<table border = 1 id = "abTable"><tr><th>Abteilungs Name</th><th>Bezeichnung</th></tr>';
		var entrynames = query.split(";");
		var x = 0;
        while(x < entrynames.length-1){
            tabelle += '<tr>';
            for(i= 0;i<=1;i++){
              tabelle += '<td>'+entrynames[x]+'</td>';
                x++;
            }
            tabelle += '</tr>';
        }
        tabelle += '</table>'
        $('#abteilungsDaten').append(tabelle);
	
	});
}

function orderAbteilungsList(selection){
    var selectedOrder = selection.trim();
    $('#abTable').remove();
    $.post('php/orderAbteilungsList.php',{selectedOrder:selectedOrder},function(orderedList){
        var tabelle = '<table border = 1 id = "abTable"><tr><th>Abteilungs Name</th><th>Bezeichnung</th></tr>';
        var entrynames = orderedList.split(";");
		var x = 0;
        while(x < entrynames.length-1){
            tabelle += '<tr>';
            for(i= 0;i<=1;i++){
              tabelle += '<td>'+entrynames[x]+'</td>';
                x++;
            }
            tabelle += '</tr>';
        }
        tabelle += '</table>'
        $('#abteilungsDaten').append(tabelle);
		
	});

}

 $(document).ready(function (){
     createProjectList();
     createAuftraggeberList();
     createAbteilungsList();
     $("#projektfilter").bind("change", function() {
        orderPorjectList($(this).val()); 
       });
     $("#auftraggeberfilter").bind("change", function() {
        orderAuftraggeberList($(this).val()); 
       });
     $("#abteilungsfilter").bind("change", function() {
        orderAbteilungsList($(this).val()); 
       });
 });