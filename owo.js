const fs = require('node:fs');

const array1 = [];

fs.readFile('data.txt', 'utf-8', (err, data) => {
    if (err){
        console.log(err);
    } else {
        let lines = data.split('\n');
        const array = [];
        for (const line in lines) {
            array.push(lines[line].split(','))
            //console.log(lines[line].split(','))
        }
        console.log(array);
    }
})