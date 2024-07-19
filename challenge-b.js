const fs = require('fs');
const path = require('path');

// path to the file containing the data
const inputFile = path.join(__dirname, 'storage/output.txt');

const determineTypeAndPrint = (obj) => {
    const trimmedObj = obj.trim();

    // check and print the type
    if (!isNaN(trimmedObj) && trimmedObj.includes('.')) {
        console.log(`Real Number:   ${trimmedObj}`);
    } else if (!isNaN(trimmedObj)) {
        console.log(`Integer:       ${trimmedObj}`);
    } else if (/^[a-zA-Z]+$/.test(trimmedObj)) {
        console.log(`Alphabetical:  ${trimmedObj}`);
    } else {
        // print alphanumeric with spaces
        console.log(`Alphanumeric:  ${obj}`);
    }
};

// read the file and process each object
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // process each object splitted by comma
    const objects = data.split(',');
    objects.forEach((obj) => {
        if (obj) {
            determineTypeAndPrint(obj);
        }
    });
});
