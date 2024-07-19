const fs = require('fs');
const { spawn } = require('child_process');

const output = fs.createWriteStream('objects-output.txt');
const child = spawn('node', ['challenge-b.js']);

child.stdout.pipe(output);
child.stderr.pipe(process.stderr);

child.on('close', (code) => {
    console.log('Objects saved to objects-output.txt file');
});