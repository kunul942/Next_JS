import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material"

import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui/"

import SaveOutLinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineLinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

export const NewEntry = () => {

    const { addNewEntry } = useContext(EntriesContext);
    const { isAddingEntry, setIsAddingEntry } = useContext( UIContext );

    const [isTouched, setIsTouched] = useState(false);
    const [inputValue, setInputValue] = useState('');


    const onTextFieldChanged = ({ target }:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setInputValue( target.value );
    }

    const onSave = () =>{
        if( inputValue.length === 0 ) return;

        addNewEntry( inputValue );
        setIsAddingEntry( false );
        setIsTouched(false);
        setInputValue('');

    }

    return (
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
            {
                isAddingEntry ? (
                    <>
                        <TextField 
                            fullWidth
                            sx={{ marginTop: 2, marginBottom: 1 }}
                            placeholder='Nueva entrada'
                            autoFocus
                            multiline
                            label='Nueva entrada'                            
                            helperText={ (inputValue.length <= 0 && isTouched) && 'Agregar un valor' }
                            error={ inputValue.length <= 0 && isTouched }
                            value={ inputValue }
                            onChange={ onTextFieldChanged }
                            onBlur={ ()=> setIsTouched( true ) }
                        />

                        <Box display='flex' justifyContent='space-between'>
                            <Button
                                variant='outlined'
                                color='secondary'
                                onClick={ ()=> setIsAddingEntry( false ) }
                            >
                                Cancelar
                            </Button>

                            <Button
                                variant='outlined'
                                color='secondary'
                                endIcon={ <SaveOutLinedIcon /> }
                                onClick={ onSave }
                            >
                                Guardar
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Button
                        startIcon={ <AddCircleOutlineLinedIcon /> }
                        fullWidth
                        variant='outlined'
                        onClick={ ()=> setIsAddingEntry( true ) }
                    >
                        Agregar Tarea
                    </Button>
                )
            }
        </Box>
    )
}
