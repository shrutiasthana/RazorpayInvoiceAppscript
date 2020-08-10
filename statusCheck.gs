function calls() {
 var lvss = SpreadsheetApp.getActiveSpreadsheet();
  var lvSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Data");
 
  var lvdata = lvSheet.getDataRange().getValues();
 
  var lvLastRow = lvSheet.getLastRow();
for (var i=1; i<lvLastRow; i++){
      var col = lvdata[i];
      var id = col[9];
      var status = col[10];
      var cellrange = lvSheet.getRange(i+1, 11);
      var cellrangetwo = lvSheet.getRange(i+1, 12);
if(status == 'issued'){

 var keyid = "rzp_live_-----------";
 var key = "----------------------";
 var url= 'https://api.razorpay.com/v1/invoices/' + id; 
 var headers = {"Authorization" : "Basic " + Utilities.base64Encode(keyid + ':' + key)}; 
 var options = { "method": "GET", "headers": headers,"muteHttpExceptions": true, "contentType" : "application/json",}; 
 var response = UrlFetchApp.fetch(encodeURI(url), options);
 Logger.log(response.getContentText()); 
 var dataAll = JSON.parse(response.getContentText()); 
 
   var status = dataAll.status;
   var paid_at = dataAll.paid_at;
  
  Logger.log(status + paid_at)
 cellrange.setValue(status)
 cellrangetwo.setValue(paid_at);
}
}}
