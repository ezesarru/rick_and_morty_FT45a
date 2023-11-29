const http = require('http')
const characters = require('./utils/data')
const PORT = 3001

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*') //! seguridad, el quién puede entrar, cualquiera por el *
    const URL = req.url

    if(URL.includes('/rickandmorty/character')) {
        const id = URL.split('/').pop()
        const character = characters.find(
            (char) => char.id === Number(id)
        )
        if(character) {
            return res
                .writeHead(200, {"Content-Type": "application/json"})
                .end(JSON.stringify(character))
        } else {
            return res
                .writeHead(404, {"Content-Type": "application/json"})
                .end(JSON.stringify({ message: 'Character not found' }))
        }
    }

    return res
        .writeHead(404, {"Content-Type": "application/json"})
        .end(JSON.stringify({ message: 'Wrong URL' }))
    
}).listen(PORT, '127.0.0.1', //! máscara de subred?, también se le puede pasar un tercer parámetro callback, para 
    () => (console.log(`Server listening on port ${PORT}`))) //! tercer parámetro, callback de iniciación del server 