// Read the file and print its contents.
let fs = require('fs');

let regex = /([a-z])\w+(=)+(")+([a-zA-Z0-9])\w+(")/g;
let filename ='text.txt';
let hashData;

function main(){
    readFile();
}

function readFile(){
    fs.readFile(filename, 'utf8', function(err, data) {
        if (err) throw err;
        console.log('OK: ' + filename);
        hashData = data;

        regexSearch(0);
      });
}

function regexSearch(){
    let result = hashData.match(regex);

    for(let i = 0; result.length > i; i++){
        console.log(result[i]);
    }
}

main();
