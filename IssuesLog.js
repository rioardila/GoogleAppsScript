////////////////////////////////////////////////////////////////////////
// Credits to Aitor Ardila - https://github.com/rioardila             //
////////////////////////////////////////////////////////////////////////

function onEdit(event) {
  var r = event.range;
  var valor = r.getValue().toUpperCase();
  var columna = r.getColumn();
  var s = event.source.getActiveSheet();
  var url = event.source.getUrl();
  
  //transform column's alias to number and save them in an array
  var arrayColumnas = [];
  arrayColumnas.push(s.getRange("issueSTATUS").getColumn());
  arrayColumnas.push(s.getRange("issueDEV").getColumn());
  arrayColumnas.push(s.getRange("issueAUTH").getColumn());
  arrayColumnas.push(s.getRange("issuePROD").getColumn());
  
  //CHECK IF ISSUE IS SOLVED
  if(valor === "SOLVED" && arrayColumnas.indexOf(columna) > -1) {
     var nombre = s.getRange(r.getRow(),s.getRange("issueRequester").getColumn()).getValue();
     var issueID = s.getRange(r.getRow(),s.getRange("issueID").getColumn()).getValue();
     var descripcion = s.getRange(r.getRow(),s.getRange("issueDescription").getColumn()).getValue();
     var comentarios = s.getRange(r.getRow(),s.getRange("issueComments").getColumn()).getValue();
     var entorno, subject;
     switch (columna) {
       case s.getRange("issueDEV").getColumn():
         entorno = "DEV";
         break;
       case s.getRange("issueAUTH").getColumn():
         entorno = "AUTH";
         break;
       case s.getRange("issuePROD").getColumn():
         entorno = "PROD";
     }
    
    //CHECK SUBMITED BY. Each person can personalize its own email, subject and body
    
    if (nombre === "A. Ardila") {
      var email = "aardila@viewnext.com";
      if (columna === s.getRange("issueSTATUS").getColumn()) subject = "Tu issue " + issueID + " ha sido solucionado.";
      else subject = "Tu issue " + issueID + " ha sido solucionado en " + entorno + ".";
      var body = "Hola " + nombre + ",\n\n" + subject + "\n\nDescripcion:\n\n" + descripcion +
        "\n\nComentarios:\n\n" + comentarios + "\n\n" + url;
      //SpreadsheetApp.getActiveSpreadsheet().toast(body);
      GmailApp.sendEmail(email, "[ISSUES LOG] "+subject, body);
    }
    
    else if (nombre === "J. Reche") {
      var email = "jcreche@viewnext.com";
      if (columna === s.getRange("issueSTATUS").getColumn()) subject = "Tu issue " + issueID + " ha sido solucionado.";
      else subject = "Tu issue " + issueID + " ha sido solucionado en " + entorno + ".";
      var body = "Hola " + nombre + ",\n\n" + subject + "\n\nDescripcion:\n\n" + descripcion +
        "\n\nComentarios:\n\n" + comentarios + "\n\n" + url;
      GmailApp.sendEmail(email, "[ISSUES LOG] "+subject, body);
    } 
    
    else if (nombre === "D. Noya") {
      var email = "diana.noya@roca.net";
      if (columna === s.getRange("issueSTATUS").getColumn()) subject = "Tu issue " + issueID + " ha sido solucionado.";
      else subject = "Tu issue " + issueID + " ha sido solucionado en " + entorno + ".";
      var body = "Hola " + nombre + ",\n\n" + subject + "\n\nDescripcion:\n\n" + descripcion +
        "\n\nComentarios:\n\n" + comentarios + "\n\n" + url;
      GmailApp.sendEmail(email, "[ISSUES LOG] "+subject, body);
     }
    
    /*else if (nombre === "J. Herrada" || nombre === "Joaquim") {
      var email = "joaquim.herrada@roca.net";
      var subject;
      if (columna === 9) subject = "Tu issue " + issueID + " ha sido solucionado.";
      else subject = "Tu issue " + issueID + " ha sido solucionado en " + entorno + ".";
      var body = "Hola " + nombre + ",\n\n" + subject + "\n\nDescripcion:\n\n" + s.getRange(r.getRow(),2).getValue() +
      "\n\nComentarios:\n\n" + s.getRange(r.getRow(),12).getValue() + "\n\n" + url;
      GmailApp.sendEmail(email, "[ISSUES LOG] "+subject, body);
     }*/
    
 
     //CAN ADD MORE PEOPLE HERE...
     /*else if (nombre === "XXXXXXXXXXXXXX") {
        var email = "XXXXXX @ XXXXXX";
        var subject;
        if (columna === 9) subject = "Tu issue " + issueID + " ha sido solucionado.";
        else subject = "Tu issue " + issueID + " ha sido solucionado en " + entorno + ".";
        var body = "Hola " + nombre + ",\n\n" + subject + "\n\nDescripcion:\n\n" + s.getRange(r.getRow(),2).getValue() +
        "\n\nComentarios:\n\n" + s.getRange(r.getRow(),12).getValue() + "\n\n" + url;
        GmailApp.sendEmail(email, "[ISSUES LOG] "+subject, body);
     }
     */
  }
  
  //TESTING CODE
  if (valor === "EGG" && columna === s.getRange("issueDEV").getColumn()) {
    SpreadsheetApp.getActiveSpreadsheet().toast('EASTER EGG HERE!');
  }
};
