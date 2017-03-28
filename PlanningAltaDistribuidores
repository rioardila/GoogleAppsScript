////////////////////////////////////////////////////////////////////////
// Credits to Aitor Ardila - https://github.com/rioardila             //
////////////////////////////////////////////////////////////////////////

function onEdit(event) {
  var r = event.range;
  var valor = r.getValue();
  var columna = r.getColumn();
  var s = event.source.getActiveSheet();
  var url = event.source.getUrl();
  var ui = SpreadsheetApp.getUi();
  
  //PRUEBAS FINALIZADAS
  if(valor === "LDAP" && s.getRange(1,columna).getValue() === "PASO A PROD") {
     var id = s.getRange(r.getRow(),s.getRange("customer_id").getColumn()).getValue();
     var nombre = s.getRange(r.getRow(),s.getRange("customer_name").getColumn()).getValue();
     var emailDist = s.getRange(r.getRow(),s.getRange("customer_email").getColumn()).getValue();
     var email = "joaquim.herrada@roca.net";
     var subject = "[Marketplace] Añadir a LDAP PROD a " + nombre;
     var body = "Hola,\n\nEl siguiente distribuidor ha finalizado las pruebas: \n\n" +id  + " - " + nombre + "\n\nSiguiente paso: añadir el email en OpenLDAP para el paso a PRODUCCIÓN\n\nEmail: " + emailDist + "\n\n\n" + url;
     GmailApp.sendEmail(email, subject, body, {cc: "diana.noya@roca.net", bcc: "rioardila@gmail.com"});
     SpreadsheetApp.getActiveSpreadsheet().toast('Email enviado.');
  }
  
  //EN PROCESO EN PROP
  if(valor === "En proceso" && s.getRange(1,columna).getValue() === "PASO A PROD") {
     var id = s.getRange(r.getRow(),s.getRange("customer_id").getColumn()).getValue();
     var nombre = s.getRange(r.getRow(),s.getRange("customer_name").getColumn()).getValue();
     var emailDist = s.getRange(r.getRow(),s.getRange("customer_email").getColumn()).getValue();
     var email = "diana.noya@roca.net";
     var subject = "[Marketplace] Se ha añadido a LDAP PROP " + nombre;
     var body = "Hola Diana,\n\nEl siguiente distribuidor ha sido añadido a LDAP PROP: \n\n" +id  + " - " + nombre + "\n\n" + emailDist + "\n\nSiguiente paso: crear el perfil en Magento PROD\n\n\n" + url;
     GmailApp.sendEmail(email, subject, body, {bcc: "rioardila@gmail.com"});
     SpreadsheetApp.getActiveSpreadsheet().toast('Email enviado.');
  }
  
  //FINALIZADO EN PROP
  if(valor === "Finalizado" && s.getRange(1,columna).getValue() === "PASO A PROD") {
     var id = s.getRange(r.getRow(),s.getRange("customer_id").getColumn()).getValue();
     var nombre = s.getRange(r.getRow(),s.getRange("customer_name").getColumn()).getValue();
     var goCounter = s.getRange(57,1).getDisplayValue();
     var email = "joaquim.herrada@roca.net";
     var subject = "[Marketplace] FELICIDADES!! Pasa a GO LIVE " + nombre + "!!!";
     var body;
     if (goCounter === "1") {
       body = "Hola a todos.\n\nEl siguiente distribuidor ha pasado a producción: \n\n" +id  + " - " + nombre + "\n\nYa tenemos " + goCounter + " distribuidor en GO LIVE !!! \n\nL E T ' S   K E E P   G O I N G ! ! ! \n\n\n" + url;
     }
     else {
       body = "Hola a todos.\n\nEl siguiente distribuidor ha pasado a producción: \n\n" +id  + " - " + nombre + "\n\nYa tenemos " + goCounter + " distribuidores en GO LIVE !!! \n\nL E T ' S   K E E P   G O I N G ! ! ! \n\n\n" + url;
     }
    GmailApp.sendEmail(email, subject, body, {cc: "diana.noya@roca.net,aardila@viewnext.com,jcreche@viewnext.com", bcc: "rioardila@gmail.com"});
    SpreadsheetApp.getActiveSpreadsheet().toast('Email enviado.');
  }
  
    //NUEVA ALTA EN AUTH
    if(valor === "LDAP" && s.getRange(1,columna).getValue() === "Email LDAP") {
     var id = s.getRange(r.getRow(),s.getRange("customer_id").getColumn()).getValue();
     var nombre = s.getRange(r.getRow(),s.getRange("customer_name").getColumn()).getValue();
     var emailDist = s.getRange(r.getRow(),s.getRange("customer_email").getColumn()).getValue();
     var email = "joaquim.herrada@roca.net";
     var subject = "[Marketplace] Añadir a LDAP AUTH a " + nombre;
     var body = "Hola Joaquim,\n\nSe ha añadido a un nuevo distribuidor para la formación del Marketplace: \n\n" + id  + " - " + nombre + "\n\nSiguiente paso: añadir el email en OpenLDAP para la alta en Magento AUTH\n\nEmail: " + emailDist + "\n\n\n" + url;
     GmailApp.sendEmail(email, subject, body, {bcc: "rioardila@gmail.com"});
     SpreadsheetApp.getActiveSpreadsheet().toast('Email enviado.');
  }
  
  //AÑADIDO EN LDAP AUTH
  if(valor === "No" && s.getRange(1,columna).getValue() === "Email LDAP") {
     var id = s.getRange(r.getRow(),s.getRange("customer_id").getColumn()).getValue();
     var nombre = s.getRange(r.getRow(),s.getRange("customer_name").getColumn()).getValue();
     var emailDist = s.getRange(r.getRow(),s.getRange("customer_email").getColumn()).getValue();
     var email = "aardila@viewnext.com";
     var subject = "[Marketplace] LDAP AUTH para " + nombre;
     var body = "El siguiente distribuidor ha sido añadido a LDAP AUTH: \n\n" +id  + " - " + nombre + "\n\n" + emailDist + "\n\nSiguiente paso: crear el perfil en Magento AUTH\n\n\n" + url;
     GmailApp.sendEmail(email, subject, body, {cc: "jcreche@viewnext.com", bcc: "rioardila@gmail.com"});
     SpreadsheetApp.getActiveSpreadsheet().toast('Email enviado.');
  }
  
  if(valor === "test" && s.getRange(1,columna).getValue() === "ALERTAS !") {
    var id = s.getRange(r.getRow(),s.getRange("newEmail").getColumn()).getValue();
        SpreadsheetApp.getActiveSpreadsheet().toast('Mensaje de test: '+id);
  }
    
};
