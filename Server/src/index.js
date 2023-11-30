const getCharById = require('./controllers/getCharById')
const http = require('http')
const PORT = 3001

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*') //! seguridad, el quién puede entrar, cualquiera por el *
    const URL = req.url

    if(URL.includes('/rickandmorty/character')) {
        const id = URL.split('/').pop()
        getCharById(res, id)
    }
    
}).listen(PORT, '127.0.0.1', //! máscara de subred?, también se le puede pasar un tercer parámetro callback, para 
    () => (console.log(`Server listening on port ${PORT}`))) //! tercer parámetro, callback de iniciación del server 