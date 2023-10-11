import { connectDB, disconnectDB } from '@/database'
import type { NextApiRequest, NextApiResponse } from 'next'

import { EntryModel, IEntry } from '@/models'

//*Luce de dos maneras este tipo "DATA"
type Data = 
    |{ message: string }
    | IEntry[]
    | IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch ( req.method ) {
        case 'GET':
            return getEntries( res )  
            
        case 'POST':
            return postEntries( req, res )

        default: 
            return res.status(400).json({ message: 'Endpoint not valid' })
    }

}      


//*GET
const getEntries = async( res: NextApiResponse<Data> ) =>{

    await connectDB();

    //*sort({ createdAt: ascending }) - get it por orden de ordenacion
    const entries = await EntryModel.find().sort({ createdAt: 'ascending' })
    await disconnectDB();

    return res.status(200).json( entries )

}

//*POST
const postEntries = async( req: NextApiRequest, res: NextApiResponse<Data>)=>{

    const { description = ''} = req.body

    const newEntry = new EntryModel({ 
        description, 
        createdAt: Date.now(), 
    })

    try {

        await connectDB()
        await newEntry.save()
        await disconnectDB()

        return res.status(201).json( newEntry )

    } catch (error) {
        await disconnectDB()
        console.log({ error })

        return res.status(500).json({ message:'Algo salio mal, revisar consola del servidor' })
    }

}
