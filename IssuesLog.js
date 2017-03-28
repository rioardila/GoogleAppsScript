////////////////////////////////////////////////////////////////////////
// Credits to Aitor Ardila - https://github.com/rioardila             //
////////////////////////////////////////////////////////////////////////

function onEdit(event) {
  var r = event.range;
  var valor = r.getValue();
  var columna = r.getColumn();
  var s = event.source.getActiveSheet();
  var url = event.source.getUrl();
  
  //CHECK IF ISSUE IS SOLVED
  if((valor === "solved" || valor === "Solved") && (columna === 9 || columna === 16 || columna === 17 || columna === 18)) {
     var nombre = s.getRange(r.getRow(),5).getValue();
     var issueID = s.getRange(r.getRow(),1).getValue();
     var entorno;
     switch (columna) {
       case 16:
         entorno = "DEV";
         break;
       case 17:
         entorno = "AUTH";
         break;
       case 18:
         entorno = "PROD";
     }
    
    //CHECK SUBMITED BY. Each person can personalize its own email, subject and body
     if (nombre === "A. Ardila") {
        var email = "aardila@viewnext.com";
        var subject;
        if (columna === 9) subject = "Tu issue " + issueID + " ha sido solucionado.";
        else subject = "Tu issue " + issueID + " ha sido solucionado en " + entorno + ".";
        var body = "Hola " + nombre + ",\n\n" + subject + "\n\nDescripcion:\n\n" + s.getRange(r.getRow(),2).getValue() + "\n\nComentarios:\n\n" + s.getRange(r.getRow(),12).getValue() + "\n\n" + url;
        GmailApp.sendEmail(email, "[ISSUES LOG] "+subject, body);
     }
     else if (nombre === "J. Reche") {
        var email = "jcreche@viewnext.com";
        var subject;
        if (columna === 9) subject = "Tu issue " + issueID + " ha sido solucionado.";
        else subject = "Tu issue " + issueID + " ha sido solucionado en " + entorno + ".";
        var body = "Hola " + nombre + ",\n\n" + subject + "\n\nDescripcion:\n\n" + s.getRange(r.getRow(),2).getValue() + "\n\nComentarios:\n\n" + s.getRange(r.getRow(),12).getValue() + "\n\n" + url;
        GmailApp.sendEmail(email, "[ISSUES LOG] "+subject, body);
     }
    
    else if (nombre === "D. Noya") {
      var email = "diana.noya@roca.net";
      var subject;
      if (columna === 9) subject = "Tu issue " + issueID + " ha sido solucionado.";
      else subject = "Tu issue " + issueID + " ha sido solucionado en " + entorno + ".";
      var body = "Hola " + nombre + ",\n\n" + subject + "\n\nDescripcion:\n\n" + s.getRange(r.getRow(),2).getValue() + "\n\nComentarios:\n\n" + s.getRange(r.getRow(),12).getValue() + "\n\n" + url;
      GmailApp.sendEmail(email, "[ISSUES LOG] "+subject, body);
     }
    
    /*else if (nombre === "J. Herrada" || nombre === "Joaquim") {
      var email = "joaquim.herrada@roca.net";
      var subject;
      if (columna === 9) subject = "Tu issue " + issueID + " ha sido solucionado.";
      else subject = "Tu issue " + issueID + " ha sido solucionado en " + entorno + ".";
      var body = "Hola " + nombre + ",\n\n" + subject + "\n\nDescripcion:\n\n" + s.getRange(r.getRow(),2).getValue() + "\n\nComentarios:\n\n" + s.getRange(r.getRow(),12).getValue() + "\n\n" + url;
      GmailApp.sendEmail(email, "[ISSUES LOG] "+subject, body);
     }*/
    
 
     //CAN ADD MORE PEOPLE HERE...
     /*else if (nombre === "XXXXXXXXXXXXXX") {
        var email = "XXXXXX @ XXXXXX";
        var subject;
        if (columna === 9) subject = "Tu issue " + issueID + " ha sido solucionado.";
        else subject = "Tu issue " + issueID + " ha sido solucionado en " + entorno + ".";
        var body = "Hola " + nombre + ",\n\n" + subject + "\n\nDescripcion:\n\n" + s.getRange(r.getRow(),2).getValue() + "\n\nComentarios:\n\n" + s.getRange(r.getRow(),12).getValue() + "\n\n" + url;
        GmailApp.sendEmail(email, "[ISSUES LOG] "+subject, body);
     }
     */
  }
};
