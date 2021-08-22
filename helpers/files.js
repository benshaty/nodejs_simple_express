const fs = require('fs');

const writeJsonToFile = (filePath,dataObj) => {
    fs.writeFile(filePath, JSON.stringify(dataObj, null, 4), (err) => {
        if (err) {  console.error(err);  return false; };
        console.log("File has been created");
        return true;
    });
}


module.exports = {
    writeJsonToFile : writeJsonToFile
}