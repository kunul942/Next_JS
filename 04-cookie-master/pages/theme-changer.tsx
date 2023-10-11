/**
 **COMENTARIO COOKIES: 
 **LAS COOKIES SON ENVIADAS AL BACKEND EN REQUEST TIME SEA BAJO REQUEST
 ** LAS COOKIES ALMACENAN 4K
 * 
 **COMENTARIO LOCALRAGE: ALMACENAN 5MB
 **SE MANDA LA DATA DE FORMA MANUAL AL BACKEND
*/



import { useState, ChangeEvent, useEffect } from 'react'
import { GetServerSideProps } from 'next'

import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'

import Cookies from 'js-cookie'
import axios from 'axios'


import { Layout } from '@/components/layouts'



interface Props {
    theme: string;
}

const ThemeChangerPage = ( { theme }: Props ) => {

    const [currentTheme, setCurrentTheme] = useState(theme)

    const onThemeChange = ( event: ChangeEvent<HTMLInputElement> ) => {
        const selectedTheme = event.target.value;

        console.log({ selectedTheme });
        setCurrentTheme( selectedTheme );

        //*LocalStorage
        localStorage.setItem('theme', selectedTheme);

        //*Cookies
        Cookies.set('theme', selectedTheme)
    }

    
    const onClickRequest = async()=>{
        const { data } = await axios.get('/api/hello')

        console.log(data)
    }

    useEffect(() => {

        //*LocalStorage:
        console.log('localStorage:', localStorage.getItem('theme') );

        //*Podemos leer las cookies desde el lado del cliente:
        console.log('Cookies:', Cookies.get('theme') )
    }, [])
    

    return (
        <Layout>
            <Card>
                <CardContent>
                    <FormControl>
                        <FormLabel>Tema</FormLabel>
                        <RadioGroup
                            value={ currentTheme }
                            onChange={ onThemeChange }
                        >
                            <FormControlLabel value='light' control={ <Radio/> } label='Light' />
                            <FormControlLabel value='dark' control={ <Radio/> } label='Dark' />
                            <FormControlLabel value='custom' control={ <Radio/> } label='Custom' />
                        </RadioGroup>
                    </FormControl>

                    <Button
                        onClick = { onClickRequest }
                    >
                        Request
                    </Button>
                </CardContent>
            </Card>
        </Layout>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


export const getServerSideProps: GetServerSideProps = async ({ req }) => {

    // const cookies = req.cookies;

    //*Enviamos la cookie al cliente desde el servidor en request time, bajo demanda
    const { theme='ligth', name= 'No name' } = req.cookies

    const validThemes = ['light','dark','custom']

    return {
        props: {
            theme: validThemes.includes( theme ) ? theme : 'dark',
            name,
        }
    }
}

export default ThemeChangerPage