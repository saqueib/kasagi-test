const fs = require('fs');
const path = require('path');

// helper functions to generate different types of data
const generateAlphabeticalString = () => {
    const length = Math.floor(Math.random() * 10) + 5; // length between 5 and 10
    return Array.from({ length }, () => String.fromCharCode(Math.floor(Math.random() * 26) + 97)).join('');
};

const generateRealNumber = () => {
    return (Math.random() * 100).toFixed(2); // number with 2 decimal places
};

const generateInteger = () => {
    return Math.floor(Math.random() * 10000); // integer between 0 and 9999
};

const generateAlphanumericWithSpaces = () => {
    const length = Math.floor(Math.random() * 10) + 5; // length between 5 and 10
    const alphanumeric = Array.from({ length }, () => Math.random().toString(36)[2]).join('');
    const spacesBefore = ' '.repeat(Math.floor(Math.random() * 11)); // 0 to 10 spaces
    const spacesAfter = ' '.repeat(Math.floor(Math.random() * 11)); // 0 to 10 spaces
    return spacesBefore + alphanumeric + spacesAfter;
};

const writeDataUntilSize = (maxSize) => {
    let size = 0;

    const write = () => {
        // generate data string
        const data = `${generateAlphabeticalString()},${generateRealNumber()},${generateInteger()},${generateAlphanumericWithSpaces()},`;
        size += Buffer.byteLength(data);

        if (size >= maxSize) {
            writeStream.end();
            console.log('Finished writing objects data in file `storage/output.txt`.');
            return;
        }

        // write data and recursively call write if not done
        const canContinue = writeStream.write(data);
        if (!canContinue) {
            writeStream.once('drain', write);
        } else {
            process.nextTick(write);
        }
    };

    write();
};

// initialize file stream
const outputFile = path.join(__dirname, 'storage/output.txt');
const writeStream = fs.createWriteStream(outputFile);
const maxSize = 10 * 1024 * 1024; // 10MB in bytes

writeDataUntilSize(maxSize);