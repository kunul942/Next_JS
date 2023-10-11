import { FC, DragEvent, useContext } from "react"
import { useRouter } from "next/router"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"

import { UIContext } from "@/context/ui"
import { Entry } from "@/interfaces"

import { dateFunction } from "@/utils"



interface Props{
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { startDragging, endDragging } = useContext(UIContext)
    const router = useRouter()

    const onDragStart = (event:DragEvent ) =>{
        event.dataTransfer.setData('text', entry._id)

        startDragging()
    }

    const onDragEnd = () => endDragging()

    const onClickToEntry = () =>{
        router.push(`/entries/${ entry._id }`)
    }

    return (
        <Card
            onClick={ onClickToEntry }
            sx={{ marginBottom: 1 }}
            //*: eventos de drag
            draggable
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whitespace:'pre-line' }}>
                        { entry.description }
                    </Typography>      
                </CardContent>

                <CardActions sx={{ display:'flex', justifyContent:'end', paddingRight:'2' }}>
                    <Typography variant='body2'>
                        {/* Obtener el tiempo en el que fue creado */}
                        { dateFunction.getFormatDistanceToNow( entry.createdAt ) }
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
