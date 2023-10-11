//**ESTE ARCHIVO SE EJECUTA SOLO DEL LADO DEL DEVELOPMENT */

import type { NextApiRequest, NextApiResponse } from 'next'

import { connectDB, disconnectDB, seedData } from '@/database'
import { EntryModel } from '@/models'


type Data = {
    message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if( process.env.NODE_ENV === 'production' ){
        return res.status(401).json({ message: 'No tiene acceso a este servicio' })
    }

    //*Conectarse a DB
    await connectDB()

    //*Borrar data de DB
    await EntryModel.deleteMany()

    //*Insertar data a DB
    await EntryModel.insertMany( seedData.entries )

    //*Desconectarse de DB
    await disconnectDB()

    res.status(200).json({ message: 'Proceso realizado correctamente' })
}