////////////////////////////////////////////////////////////////////////
// Credits to Aitor Ardila - https://github.com/rioardila             //
//                                                                    //
// Description: this script runs a function that triggers when a cell //
// is modified. Then it checks the column and verifies the value and  //
// notifies via email about the changes that were made.               //
////////////////////////////////////////////////////////////////////////


function onEdit(event) { //runs automatically when a cell's value is modified
  var r = event.range; //cell (row,column) that was modified
  var valor = r.getValue(); //value of that cell
  var columna = r.getColumn(); //column where the cell belongs to
  var s = event.source.getActiveSheet();
  var url = event.source.getUrl();
  var ui = SpreadsheetApp.getUi();
  
  ///////////////////////////////////////////////////////
  //////////////////COLUMNA PASO A PROD//////////////////
  ///////////////////////////////////////////////////////
  
  //PRUEBAS FINALIZADAS (VALOR = LDAP)
  //NOTIFIES TO: Joaquim Herrada, CC: Diana Noya
  if(valor === "LDAP" && s.getRange("to_prod").getColumn() === r.getColumn()) {
     var id = s.getRange(r.getRow(),s.getRange("customer_id").getColumn()).getValue();
     var nombre = s.getRange(r.getRow(),s.getRange("customer_name").getColumn()).getValue();
     var emailDist = s.getRange(r.getRow(),s.getRange("customer_email").getColumn()).getValue();
     var email = "joaquim.herrada@roca.net";
     var subject = "[Marketplace] Añadir a LDAP PROD a " + nombre;
     var body = "Hola,\n\nEl siguiente distribuidor ha finalizado las pruebas: \n\n" +id  + " - " +
       nombre + "\n\nSiguiente paso: añadir el email en OpenLDAP para el paso a PRODUCCIÓN\n\nEmail: " + 
       emailDist + "\n\n\n" + url;
     GmailApp.sendEmail(email, subject, body, {cc: "diana.noya@roca.net", bcc: "aardila.roca@gmail.com"});
     SpreadsheetApp.getActiveSpreadsheet().toast('Email enviado a Joaquim Herrada y Diana Noya.');
  }
  
  //EN PROCESO EN PROP (VALOR = En proceso)
  //NOTIFIES TO: Diana Noya
  if(valor === "En proceso" && s.getRange("to_prod").getColumn() === r.getColumn()) {
     var id = s.getRange(r.getRow(),s.getRange("customer_id").getColumn()).getValue();
     var nombre = s.getRange(r.getRow(),s.getRange("customer_name").getColumn()).getValue();
     var emailDist = s.getRange(r.getRow(),s.getRange("customer_email").getColumn()).getValue();
     var email = "diana.noya@roca.net";
     var subject = "[Marketplace] Se ha añadido a LDAP PROP " + nombre;
     var body = "Hola Diana,\n\nEl siguiente distribuidor ha sido añadido a LDAP PROP: \n\n" +id  + " - " +
       nombre + "\n\n" + emailDist + "\n\nSiguiente paso: crear el perfil en Magento PROD\n\n\n" + url;
     GmailApp.sendEmail(email, subject, body, {bcc: "aardila.roca@gmail.com"});
     SpreadsheetApp.getActiveSpreadsheet().toast('Email enviado a Diana Noya.');
  }
  
  //FINALIZADO EN PROP (VALOR = Finalizado)
  //NOTIFIES TO: Joaquim Herrada, CC: [Diana Noya, Aitor Ardila, Juan Carlos Reche]
  if(valor === "Finalizado" && s.getRange("to_prod").getColumn() === r.getColumn()) {
     var id = s.getRange(r.getRow(),s.getRange("customer_id").getColumn()).getValue();
     var nombre = s.getRange(r.getRow(),s.getRange("customer_name").getColumn()).getValue();
     var goCounter = s.getRange(s.getRange("prod_total").getRow(),1).getDisplayValue();
     var email = "joaquim.herrada@roca.net";
     var subject = "[Marketplace] FELICIDADES!! Pasa a GO LIVE " + nombre + "!!!";
     var body;
     if (goCounter === "1") {
       body = "Hola a todos.\n\nEl siguiente distribuidor ha pasado a producción: \n\n" +id  + " - " +
         nombre + "\n\nYa tenemos " + goCounter +
         " distribuidor en GO LIVE !!! \n\nL E T ' S   K E E P   G O I N G ! ! ! \n\n\n" + url;
     }
     else {
       body = "Hola a todos.\n\nEl siguiente distribuidor ha pasado a producción: \n\n" +id  + " - " +
         nombre + "\n\nYa tenemos " + goCounter +
         " distribuidores en GO LIVE !!! \n\nL E T ' S   K E E P   G O I N G ! ! ! \n\n\n" + url;
     }
    GmailApp.sendEmail(email, subject, body, {cc: "diana.noya@roca.net,aardila@viewnext.com,jcreche@viewnext.com",
                                              bcc: "aardila.roca@gmail.com"});
    SpreadsheetApp.getActiveSpreadsheet().toast('Email enviado a TODOS.');
  }
  
  
  //////////////////////////////////////////////////////
  //////////////////COLUMNA EMAIL LDAP//////////////////
  //////////////////////////////////////////////////////
  
  //NUEVA ALTA EN AUTH (VALOR = LDAP)
  //NOTIFIES TO: Joaquim Herrada
  if(valor === "LDAP" && s.getRange("to_auth").getColumn() === r.getColumn()) {
    var id = s.getRange(r.getRow(),s.getRange("customer_id").getColumn()).getValue();
    var nombre = s.getRange(r.getRow(),s.getRange("customer_name").getColumn()).getValue();
    var emailDist = s.getRange(r.getRow(),s.getRange("customer_email").getColumn()).getValue();
    var email = "joaquim.herrada@roca.net";
    var subject = "[Marketplace] Añadir a LDAP AUTH a " + nombre;
    var body = "Hola Joaquim,\n\nSe ha añadido a un nuevo distribuidor para la formación del Marketplace: \n\n" +
      id  + " - " + nombre + "\n\nSiguiente paso: añadir el email en OpenLDAP para la alta en Magento AUTH\n\nEmail: " +
      emailDist + "\n\n\n" + url;
    GmailApp.sendEmail(email, subject, body, {bcc: "aardila.roca@gmail.com"});
    SpreadsheetApp.getActiveSpreadsheet().toast('Email enviado a Joaquim Herrada.');
  }
  
  //AÑADIDO EN LDAP AUTH (VALOR = NO)
  //NOTIFIES TO: Aitor Ardila, Juan Carlos Reche
  if(valor === "No" && s.getRange("to_auth").getColumn() === r.getColumn()) {
     var id = s.getRange(r.getRow(),s.getRange("customer_id").getColumn()).getValue();
     var nombre = s.getRange(r.getRow(),s.getRange("customer_name").getColumn()).getValue();
     var emailDist = s.getRange(r.getRow(),s.getRange("customer_email").getColumn()).getValue();
     var email = "aardila@viewnext.com";
     var subject = "[Marketplace] LDAP AUTH para " + nombre;
     var body = "El siguiente distribuidor ha sido añadido a LDAP AUTH: \n\n" +id  + " - " +
       nombre + "\n\n" + emailDist + "\n\nSiguiente paso: crear el perfil en Magento AUTH\n\n\n" + url;
     GmailApp.sendEmail(email, subject, body, {cc: "jcreche@viewnext.com", bcc: "aardila.roca@gmail.com"});
     SpreadsheetApp.getActiveSpreadsheet().toast('Email enviado a Aitor y Juan Carlos.');
  }
  
  
  ///////////////////////////////////
  //EASTER EGG for testing purposes//
  ///////////////////////////////////
  if(valor === "egg" && s.getRange("to_prod").getColumn() === r.getColumn()) {
    var goCounter = s.getRange(s.getRange("prod_total").getRow(),1).getDisplayValue();
    SpreadsheetApp.getActiveSpreadsheet().toast('Ya tenemos '+goCounter+' distribuidores en PROD!!!');
  }
    
};
