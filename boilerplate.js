// this creates file. Built using fs.mkdirSync api in node.js.

//https://nodejs.org/docs/latest-v16.x/api/fs.html#fsmkdirsyncpath-options


const fs = require('fs');
const folderName = process.argv[2] || 'project';
const content = '"some content"'
// this will create folder with the name that is passed as argument in the terminal.

try{
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/inde.html`, content)
    fs.writeFileSync(`${folderName}/app.js`, content)
}
catch (error){
    console.log("there is some error" + error);
}