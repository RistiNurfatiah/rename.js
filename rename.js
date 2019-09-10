//proses pemanggilan library fs
const fs = require('fs')

console.log('start reading a file..')

//proses readFile text.txt menggunakan library fs
fs.readFile('text.txt', 'utf-8', (err, content)=> {
    //untuk handle error
    if(err){
        console.log('error happened during reading the file')
        return console.log(err)
    }
        //lakukan sesuatu disini kalau berhasil

        //jika berhasil rename text.txt ke terserah.txt
        fs.rename('text.txt', 'terserah.txt', (err) => {
            if(err) console.log("gagal rename!"+err);
            
        console.log("berhasil")
        })

})
console.log('end of the file')
