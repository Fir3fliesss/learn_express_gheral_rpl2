//Mendeklarasikan variable 'express' untuk menampung `module express` yang diambil dari 'node_modules -> express'
const express = require('express')
//Membuat aplikasi 'express' dengan variable 'app' yang memanggil function `express`
const app = express()
//Menentukan port yang akan digunakan
const port = 3000
//Membuat rute utama ('/') dengan metode GET dan berisi callback `req -> request` & `res -> response`
app.get('/', (req, res) => {
    //mengirim response berisi teks "Ohayo Sekai" saat rute GET di terima
  res.send('Ohayo Sekai')
  console.log("GoodMoringWolrd");
})
//Menjalankan aplikasi/atau server express pada port yang sudah di tentukan
app.listen(port, () => {
    //mencetak pesan pada konsol ketika server mendengar/atau berjalankan pada port yang ditentukan
  console.log(`Dunia anda sedang berjalan di timeline port: ${port}`)
})