import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose'

import { connectDB, disconnectDB } from '@/database'
import { EntryModel, IEntry } from '@/models'

type Data = 
    | {message: string }
    | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const { id } = req.query

    //*Cuando no tenia middlewares esta es una forma de verificar el mongo ID
    // if( !mongoose.isValidObjectId( id ) ){
    //     return res.status(400).json({ message: 'El Id no es valido' + id })
    // }

    switch ( req.method ) {
        case 'PUT':
            return putEntry( req, res )
    
        case 'GET':
            return getEntry( req, res )
            
        default:
            return res.status(400).json({ message: 'Método no existe ' + req.method })
    }
}

const getEntry = async ( req: NextApiRequest, res: NextApiResponse ) =>{

    const { id } = req.query
    
    await connectDB()
    const getEntryInDB = await EntryModel.findById( id )
    await disconnectDB()
    
    if( !getEntryInDB ){
        await disconnectDB()
        return res.status(400).json({ message: `ID: ${ id } no existe` })
    }

    return res.status(200).json( getEntryInDB )

}  


const putEntry = async( req: NextApiRequest, res: NextApiResponse ) =>{

    const { id } = req.query

    await connectDB();
    
    const getDataToUpdate = await EntryModel.findById( id ) 

    if( !getDataToUpdate ){
        await disconnectDB()
        return res.status(400).json({ message: `No hay entrada con ese ID: ${ id }` })
    }
    
    //*Obtener body del cliente y asignarles por default la data de la DB
    const {
        description = getDataToUpdate.description,
        status =  getDataToUpdate.status
    } = req.body


    try {
        const updateData = await EntryModel.findByIdAndUpdate( id, { description, status }, { runValidators: true, new: true } )
        disconnectDB()        

        return res.status(200).json( updateData! )
    
    } catch (error: any ) {
        console.log({ error })

        disconnectDB()

        //*Mensaje de el modelo de entry: message: '{VALUE} no es un estado permitido' 
        return res.status(400).json({ message: error.errors.status.message })
    }
}

