import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

import { ThemeProvider, CssBaseline, Theme } from '@mui/material'
import { darkTheme, lightTheme, customTheme } from '@/themes'

import Cookies from 'js-cookie'

interface Props extends AppProps{
    theme: string
}

export default function App({ Component, pageProps, theme='dark' }: Props) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {

    const cookieTheme = Cookies.get('theme') || 'light'
    const selectedTheme = cookieTheme ==='light'
          ? lightTheme
          : ( cookieTheme === 'dark')
              ? darkTheme
              : customTheme

    setCurrentTheme( selectedTheme )
  }, [])
  


    return (
      <ThemeProvider theme={ currentTheme }>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    )
}
