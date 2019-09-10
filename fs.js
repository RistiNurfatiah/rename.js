const fs = require('fs')

console.log('start reading a file...')

fs.readFile('./text.txt', 'utf-8', (err, content) => {
    if (err) {
        console.log('error happened during reading the file')
        return console.log(err)
    }

    console.log("yeayyy, berhasilll! Datanya bro: " +content);
})

console.log('end of the file')