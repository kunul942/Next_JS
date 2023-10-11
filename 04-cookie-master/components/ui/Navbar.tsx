import React from 'react'
import NextLink from 'next/link'
import { AppBar, Toolbar, IconButton, Link, Typography } from '@mui/material'

import { MenuOutlined } from '@mui/icons-material'



export const Navbar = () => {


    return (
        <AppBar position='sticky' elevation={ 0 }>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                >
                    <MenuOutlined />
                </IconButton>

                <Link underline='none' component={ NextLink } href='/'>
                    <Typography variant='h6' color='white'>
                        CookieMaster
                    </Typography>
                </Link>

                <div style={{ flex: 1 }}></div>

                <Link underline='none' component={ NextLink } href='/theme-changer'>
                    <Typography variant='h6' color='white'>
                        Cambiar tema
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
}
