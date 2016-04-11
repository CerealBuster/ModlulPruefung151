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
                tabelle += '<td><button class="optionLink" onclick="deleteProject($(this).val())" value= '+entrynames[x]+'>Delete</button><button class="optionLink" onclick="editProjectList($(this).val())" value= '+entrynames[x]+'>Edit</button></td>'; 
                
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
                tabelle += '<td><button class="optionLink" onclick="deleteProject($(this).val())" value= '+entrynames[x]+'>Delete</button><button class="optionLink" onclick="editProjectList($(this).val())" value= '+entrynames[x]+'>Edit</button></td>'; 
              }
              x++;
            }
            tabelle += '</tr>';
        }
        tabelle += '</table>'
        $('#projektListe').append(tabelle);
		
	});

}


function editProjectList(primaryKey){
        var key = primaryKey.trim();
        //var win = window.open("http://localhost/ModlulPruefung151/projektInsert.html","_self");

    
    /*url = "http://localhost/ModlulPruefung151/projektInsert.html";
    document.location.href = url;*/
    $('#editForm').remove();
    $.post('php/selectSingleProjekt.php',{key:key},function(orderedList){
        var entrynames = orderedList.split(";");
        var form = '<form id ="editForm" method="post"><fieldset><legend>Projekt Daten eingabe:</legend><label for="projektBezeichnung">Projekt Bezeichnung</label><input type="text" name="projektBezeichnung" id="bezeichnung1" required title ="Titel des Projektes"/><br><label for="projektBeschreibung" >Projekt Beschreibung</label><input type="text" name="projektBeschreibung" id="projektBeschreibung1" required title ="beschreibung des Projektes"/><br><label for ="beginn">Projekt Beginn</label><input type="date" name="beginn" id="beginn1"title ="Vormat :YY-MM-DDY"/><br><label for ="ende">Projekt Ende</label><input type= "date" name="ende" id="ende1" title ="Format: YY-MM-DD"/><br><label for ="auftragsvolumen">Auftragsvolumen</label><input type="number" name="auftragsvolumen" id ="auftragsvolumen1" title ="Volumen des Auftrages" /><br><label for ="abezeichnung" >Auftragsgeber ID</label><input type="number" name="abezeichnung1" id = "abezeichnung1" required title ="ID der Abteilung"/><br><label for = "mName">ProektLeiter ID</label><input type ="number" name ="mName" id = "mName1" required title ="ID des Projektleiters"/><br><input type="submit" id="submit" data-icon="check" value="Speichern" onclick="changeProject(2,'+key+',event)"/><input type="reset" data-icon="delete" value="Abbrechen"/></fieldset></form>';
        $('#newProjekt').append(form);
        
        $("#bezeichnung1").val(entrynames[0]);
		$("#projektBeschreibung1").val(entrynames[1]);
		$('#beginn1').val(entrynames[2]);
		$('#ende1').val(entrynames[3]);
		$('#auftragsvolumen1').val(+entrynames[4]);
        $('#abezeichnung1').val(+entrynames[5]);
        $('#mName1').val(+entrynames[6]);
    });

}

function newProject(){

    $('#editForm').remove();
    var form = '<form id ="editForm" method="post"><fieldset><legend>Projekt Daten eingabe:</legend><label for="projektBezeichnung">Projekt Bezeichnung</label><input type="text" name="projektBezeichnung" id="bezeichnung1" required/><br><label for="projektBeschreibung" >Projekt Beschreibung</label><input type="text" name="projektBeschreibung" id="projektBeschreibung1" required/><br><label for ="beginn">Projekt Beginn</label><input type="date" name="beginn" id="beginn1"title ="Fomrat YY-MM-DD"/><br><label for ="ende">Projekt Ende</label><input type= "date" name="ende" id="ende1" title ="Format: YY_MM_DD"/><br><label for ="auftragsvolumen">Auftragsvolumen</label><input type="number" name="auftragsvolumen" id ="auftragsvolumen1" title ="Auftragsvolumen" /><br><label for ="abezeichnung" >Auftragsgeber ID</label><input type="number" name="abezeichnung1" id = "abezeichnung1" required title ="Id Der abteilung"/><br><label for = "mName">ProektLeiter ID</label><input type ="number" name ="mName" id = "mName1" required title ="ID des Projekteliters"/><br><input type="submit" id="submit" data-icon="check" value="Speichern" onclick="changeProject(1, 0,event)"/><input type="reset" data-icon="delete" value="Abbrechen"/></fieldset></form>';
 $('#newProjekt').append(form);
}

function deleteProject(primaryKey){
    var key = primaryKey.trim();
    var okDel = confirm("Wirklich löschen?");
    if (okDel == true){
        $.post('php/delProjekt.php',{key:key},function(flag){
            if(flag == "1"){
            $('#ptable').remove();
            createProjectList();
            }
        });
    }
}
function changeProject(option, pk){
    //event.stopPropagation();
	//event.preventDefault();
    var primPk = pk;
    var alertFlag = false;
    var alertstring ="Error: ";
    var bezeichnung1 =  $("#bezeichnung1").val();
    var projektbeschr = $("#projektBeschreibung1").val();
    var beginn1 =  $('#beginn1').val();
    var beginDatum = beginn1.match(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/);
    var ende1 = $('#ende1').val();
    var endDatum = ende1.match(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/);
    var auftragsvol = $('#auftragsvolumen1').val();
    var abteilungName = $('#abezeichnung1').val();
    var projektLeit =  $('#mName1').val();

    if (bezeichnung1 == ""){
        alertstring += "Projektbezeichnung nicht vorhanden\n"; 
        alertFlag = true;
    }
    if(beginDatum === null){
        alertstring += "Falsches Datumformat in Beginndatum\n";
        alertFlag = true;
    }

    if(endDatum === null){
        alertstring += "Falsches Datumformat in Enddatum\n";
        alertFlag = true;
    }
    
    if(isNaN(auftragsvol) == true || auftragsvol == ""){
        alertstring += "Auftragsvolumen ist nicht Nummerisch\n";
        alertFlag = true;
    }
    if(isNaN(abteilungName) == true || abteilungName ==""){
        alertstring += "Abteilungs ID ist nicht Nummerisch\n";
        alertFlag = true;   
    }
    if(isNaN(projektLeit) == true || projektLeit == ""){
        alertstring += "Projektleiter ID ist nicht Nummerisch\n";
        alertFlag = true;  
    }
    
    if (alertFlag == true){
        alert(alertstring);
    }
    else{
       var okChange = confirm("sure?")
        if( okChange == true){
            
            if (option == 1){

                $.post('php/insertProject.php',{bezeichnung1:bezeichnung1,projektbeschr:projektbeschr,beginn1:beginn1,ende1:ende1,auftragsvol:auftragsvol,abteilungName:abteilungName,projektLeit:projektLeit});

                
            }
            else if (option == 2){
                alert("update");
                //$.post('php/updateProject.php',{primPK:primPK,bezeichnung});
                $.post('php/updateProject.php',{primPk:primPk,bezeichnung1:bezeichnung1,projektbeschr:projektbeschr,beginn1:beginn1,ende1:ende1,auftragsvol:auftragsvol,abteilungName:abteilungName,projektLeit:projektLeit});

            }
            else{
                alert("wrong option");
            }
            $('#ptable').remove();
            createProjectList();
            $('#editForm').remove();
        }
    }
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
function tryLogin(){
    
    event.stopPropagation();
	event.preventDefault();
    
	var password = $('#passwort').val();
	var benutzername = $('#benutzername').val();
    
    
	if (benutzername <= " " || password <= " "){
		
		alert("benutzerdaten Falsch")

	}
	else{
        var password1 = password;
        var benutzername1 = benutzername;

        
		$.post('php/login.php',{password1:password1,benutzername1:benutzername1},function(flag){
            flag = $.trim(flag);
            
			if(flag == 'loginok'){
                window.open("http://localhost/ModlulPruefung151/hallo.php","_self");
			
				
			}
			else{
                alert("Login was not succesful");
			}
		});

	}
	
}
function tryLogout(event){
	event.stopPropagation();
	event.preventDefault();
	$.post('php/logout.php');
    window.open("http://localhost/ModlulPruefung151/index.html","_self");
}

 $(document).ready(function (){
     createProjectList();
     createAuftraggeberList();
     createAbteilungsList();
     
     $("#login").on('click',tryLogin);
     $("#logoutButton").on('click',tryLogout);
     $("#projektfilter").bind("change", function() {
        orderPorjectList($(this).val()); 
       });
     $("#auftraggeberfilter").bind("change", function() {
        orderAuftraggeberList($(this).val()); 
       });
     $("#abteilungsfilter").bind("change", function() {
        orderAbteilungsList($(this).val()); 
       });
     $("#CreateNew").on('click', function(){
        newProject();
     });
 });