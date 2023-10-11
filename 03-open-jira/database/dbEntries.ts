import { isValidObjectId } from "mongoose"

import { EntryModel, IEntry } from "@/models"
import { connectDB, disconnectDB } from "./"


export const getEntryById = async ( id: string ): Promise<IEntry | null> => {

    if( !isValidObjectId( id ) ) return null

    connectDB()
    const entry = await EntryModel.findById( id ).lean()
    disconnectDB()
    
    //*Serializar la data que viene de MONGO DB
    return JSON.parse( JSON.stringify( entry ) )
}