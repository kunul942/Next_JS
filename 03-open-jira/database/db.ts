import mongoose from 'mongoose'


/*
    *0 = disconnected
    *1 = connected
    *2 = connecting
    *3 = disconnecting
*/


const mongoConnection = {
    isConnected: 0
}

const envDBConnection = process.env.MONGO_URL || ''

export const connectDB = async() =>{

    //**Ya estoy conectado a la DB
    if( mongoConnection.isConnected === 1 ){
        console.log('Ya estabamos conectados')

        return
    }

    //**Obtener estado de las conexiones
    if( mongoose.connections.length > 0 ){
        mongoConnection.isConnected = mongoose.connections[0].readyState      

        if( mongoConnection.isConnected === 1 ){
            console.log('Usando conexion anterior')
            return
        }

        //*Desconectarse para evitar multiples conexiones simultaneas
        await mongoose.disconnect()
    }


    //* Me conecto a la DB
    await mongoose.connect( envDBConnection )
    mongoConnection.isConnected = 1

    console.log(`Conectado a mongoDB: ${ envDBConnection }`)
}


export const disconnectDB = async() =>{

    //*Nunca desconectarme en development
    if( process.env.NODE_ENV === 'development' ) return

    //*Ya estoy desconectado
    if( mongoConnection.isConnected === 0  ) return

    
    await mongoose.disconnect()
    mongoConnection.isConnected = 0
    
    console.log('Desconectado de MongoDB')
}



