// DEPENDENCIES  
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const { Sequelize } = require('sequelize')




// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

// LISTEN
app.listen(PORT, () => {
    console.log(`🎸 Rockin' on port: ${PORT}`)
})
