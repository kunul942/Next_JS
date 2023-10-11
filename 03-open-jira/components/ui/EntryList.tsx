import { DragEvent, FC, useContext, useMemo } from "react"
import { List, Paper } from "@mui/material"

import { EntriesContext } from "@/context/entries"
import { EntryStatus } from "@/interfaces"
import { EntryCard } from "./"
import { UIContext } from "@/context/ui"

import styles from './EntryList.module.css'

interface Props {
    status: EntryStatus
}


export const EntryList: FC<Props> = ({ status }) => {

    const { entries, updateEntry } = useContext( EntriesContext )
    const { isDragging, endDragging } = useContext(UIContext)

    const entriesByStatus = useMemo( ()=> entries.filter(( entry )=> entry.status === status ) ,[ entries ])

    
    const allowDrop = ( event: DragEvent<HTMLDivElement> ) =>{
        event.preventDefault();
    }

    const onDropEntry = ( event: DragEvent<HTMLDivElement> ) =>{
        const id = event.dataTransfer.getData('text')
        
        const entry = entries.find( entry => entry._id === id )!
        entry.status = status

        //*Entry es el payload del fronted que voy a mandar al backend
        updateEntry( entry )
        endDragging()
    }

    return (
        //*Drag and drop
        <div 
            onDrop={ onDropEntry }
            onDragOver = { allowDrop }
            className={ isDragging ? styles.dragging: '' }
        >
            <Paper  sx={{
            height: "calc(100vh - 180px)",
            overflowY: "scroll",
            "&::-webkit-scrollbar": {
                width: "6px",
                bgcolor: "#454545",
            },
            "&::-webkit-scrollbar-thumb": {
                background: "#4a148c",
                border: "7px none #fffff",
                borderRadius: "10px",
            },
            backgroundColor:'transparent',
            padding: '1px 5px'
            }}>

                <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
                    {
                        entriesByStatus.map( entry=>(
                            <EntryCard key={ entry._id } entry={ entry }/>
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
}
