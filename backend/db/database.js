const mongoose = require('mongoose')

const DatasebaseConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://zainhashmi946:jhLSG54SSTgO4ZMC@whatsappclone.qqu9usd.mongodb.net/chat-app?retryWrites=true&w=majority&appName=whatsappClone')
    } catch (error) {
       console.log(error) 
    }
}

module.exports = DatasebaseConnection