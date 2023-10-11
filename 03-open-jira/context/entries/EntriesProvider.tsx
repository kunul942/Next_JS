import { FC, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; //uso anterior para generar ID

import { useSnackbar } from 'notistack'

import { entriesApi } from '@/apis';
import { Entry } from '@/interfaces';

import { EntriesContext, entriesReducer } from './';

export interface EntriesState{
    entries: Entry[];   
}

export interface ChildrenProp{
    children: JSX.Element | JSX.Element[]
}

const Entries_INITIAL_STATE:EntriesState ={
    entries: []
} 

export const EntriesProvider:FC<ChildrenProp> = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE );
    const { enqueueSnackbar } = useSnackbar()

    const addNewEntry = async( description: string ) =>{

        //*Test Without DB
        // const newEntry:Entry ={
        //     _id: uuidv4(),
        //     description,
        //     createdAt: Date.now(),
        //     status: 'pending'
        // }

        //*Get Data From DB
        const { data } = await entriesApi.post<Entry>('/entries', { description })
        dispatch({type: '[Entry] Add-Entry', payload: data })

    }   

    //*Entry utilizado en EntryList
    const updateEntry = async( entry: Entry, showSnackbar = false ) =>{
        try {
            const { data } = await entriesApi.put<Entry>(`/entries/${ entry._id }`,{
                description: entry.description,
                status: entry.status
            })

            dispatch({ type: '[Entry] Entry-Updated', payload: data })


            if( showSnackbar === true ){
                enqueueSnackbar('Entrada actualizada',{
                    variant:'success',
                    autoHideDuration:1500,
                    anchorOrigin:{
                        vertical:'top',
                        horizontal: 'right'
                    }
                })
            }
            
        } catch (error) {
            console.log({ error })
        }
    }


    //*Obtener la data del backend de todas las entries
    const refreshEntries = async()=>{
        const { data } = await entriesApi.get<Entry[]>('/entries')

        dispatch({ type: '[Entry] Load-EntriesDB', payload: data })
    }
    
    //*Al crear este componente se ejecutara este useEffect con la data de las entries
    useEffect(() => {
        refreshEntries()
    },[])
    

    return (
            <EntriesContext.Provider value={{
                ...state,
                
                //*Methods
                addNewEntry,
                updateEntry,
            }}>
                { children }
            </EntriesContext.Provider>
        )
}