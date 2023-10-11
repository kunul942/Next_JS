import { Entry } from '@/interfaces';
import mongoose, { Model, Schema } from 'mongoose';

//*Obtener los datos de la intefaz de ENTRY y se pueden crear nuevos para usar solo en este archivo
export interface IEntry extends Entry {}

const entrySchema = new Schema({
    description: { type: String, required: true } ,
    createdAt: { type: Number },
    status: {
        type: String,
        enum: {
            values: ['pending', 'in-progress', 'finished'],

            //*MENSAJE DEL CLIENTE
            message: '{VALUE} no es un estado permitido'
        },
        default: 'pending'
    }
})



/** 
    //*Primera vez que se ejecuta
    //*mongoose.model('Entry', entrySchema) = si no existe el modelo, vamos a crear el model 

    //*Segunda o mas veces que se ejecuta
    //* mongoose.models.entry = Si existe el modelo, será igual al que ya está creado
**/


const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema)

export default EntryModel