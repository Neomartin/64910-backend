const express = require('express')
const app = express()
const port = 3000;

app.get('/', function(req, res) {
    console.log(`Llamado a mi servidor`)

    res.send("Hola desde tu primer servidor")
})


app.listen(port, function() {

    console.log(`Servidor corriendo en el puerto ${port}`)
    
})