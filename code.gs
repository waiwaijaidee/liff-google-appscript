function doGet(e){
  const sheet = SpreadsheetApp.openById("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx").getSheetByName("xxxxxxxxxxxxx");
  const params = e.parameter;
  const data = sheet.getDataRange().getDisplayValues();
  const result = [];

  for(var i = 1; i < data.length; i++){
    const row = data[i];
    if(row[0] == params['q']){
        const rowData = {};

        for(var j = 0; j < row.length; j++){
            rowData['column' + (j+1)] = row[j]
        }
        result.push(rowData);
    }
  }

  const jsonResponse = ContentService.createTextOutput(JSON.stringify(result));
  jsonResponse.setMimeType(ContentService.MimeType.JSON);

  return jsonResponse;
}
