const express = require('express')

class Server {


    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.set('view engine', 'hbs');
        this.app.use(express.urlencoded({ extended: true }))
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.render('index')
        })

        this.app.post('/login', (req, res) => {
            const parametros = req.body
            res.render('bienvenida', {
                nombreUsuario: parametros.txtNombreUsuario,
                clientes: [
                    {
                        nombre: "Cliente Uno",
                        correo: "1@1.cl",
                        direccion: "Direc1"
                    },
                    {
                        nombre: "Cliente Dos",
                        correo: "2@2.cl",
                        direccion: "Direc2"
                    },
                    {
                        nombre: "Cliente tres",
                        correo: "3@3.cl",
                        direccion: "Direc3"
                    },
                    {
                        nombre: "Cliente Cuatro",
                        correo: "4@4.cl",
                        direccion: "Direc4"
                    }
                ]
            })
        })
        
        
    }

    listen(){
        this.app.listen(3000)
    }   
}

module.exports = Server