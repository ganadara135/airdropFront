const express = require('express')
const app = express()

app.use(express.static(__dirname + '/src'));

app.listen('3009', () => {
    console.log('working on 3009')
})