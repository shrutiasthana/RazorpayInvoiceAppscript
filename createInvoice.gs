function razorpay(e){ 
  var lvss = SpreadsheetApp.getActiveSpreadsheet();
  var lvSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Form");
  // get ALL the data from this sheet
  var lvdata = lvSheet.getDataRange().getValues();
  // check how many rows of data
  var lvLastRow = lvSheet.getLastRow();
for (var i=1; i<lvLastRow; i++){
      var pmail = e.values[2];
      var pname = e.values[3];
      var pphone = e.values[5];
      var des = e.values[13];
      var amt = e.values[7]*100;
      var curr = e.values[8];
      var val = lvSheet.getRange(i+1, 15).getValue();
      var cellrange = lvSheet.getRange(i+1, 15);
      var cellrangetwo = lvSheet.getRange(i+1, 16);
 }
 if(val==""){
 var keyid = "rzp_live_----------";
 var key = "---------------------";
 var url= 'https://api.razorpay.com/v1/invoices'; 
 var headers = {"Authorization" : "Basic " + Utilities.base64Encode(keyid + ':' + key)}; 
 var data = {"customer": {"name": pname,"email": pmail,"contact": pphone}, "type": "invoice","line_items":[{"item_id": null,"name": des, "amount": amt, "currency": "INR"}]}
 var options = { "method": "POST", "headers": headers, "payload": JSON.stringify(data),"muteHttpExceptions": true, "contentType" : "application/json",}; 
 var response = UrlFetchApp.fetch(encodeURI(url), options);
 //Logger.log(response.getContentText()); 
 var dataAll = JSON.parse(response.getContentText()); 
 
   var id = dataAll.id;
    var status = dataAll.status;
  
  Logger.log(id + status)
 cellrange.setValue(id)
 cellrangetwo.setValue(status);
 }}
