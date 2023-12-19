const express = require('express')
const app = express()
const port = 3000;

// Estas dos lineas de codigo son para que express pueda leer el body de las peticiones
app.use(  express.json()  )
app.use( express.urlencoded({ extended: true }))

app.get('/', function(req, res) {
    console.log(`Llamado a mi servidor`)

    res.send("Hola desde tu primer servidor")
})

app.get('/product', (req, res) => {
    console.log(`Estoy buscando los productos que hay en la DB`)

    console.log(req.query, req.ip, req.url, req.method, req.path)
    // Tenemos que suponer que este array viene de una base de datos
    const products = [
        { name: 'Producto 1', price: 100 },
        { name: 'Producto 2', price: 200 },
        { name: 'Producto 3', price: 300 },
        { name: 'Producto 4', price: 400 },
        { name: 'Producto 5', price: 500 },
    ]

    // Una vez recibida la respuesta de la base de datos, le enviamos la respuesta al cliente
    res.send(products)

})


app.post('/product', (req, res) => {

    console.log( `Estoy creando un nuevo producto`)

    console.log(req.body)

    res.send('Producto creado con exito')

})


app.listen(port, function() {

    console.log(`Servidor corriendo en el puerto ${port}`)

})