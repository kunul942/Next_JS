import { Box } from "@mui/material"
import Head from "next/head"

import { Navbar, Sidebar } from "../ui";

interface Props{
    children: JSX.Element | JSX.Element[];
    title?: string;
}

export const Layout = ({ title = 'OpenJira', children }:Props) => {
  return (
    //*sx = style
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            <title>
                { title }
            </title>
        </Head>

        <Navbar />
        <Sidebar />

        <Box sx={{ padding: '10px 20px'}}>
            { children }
        </Box>
    </Box>
  )
}
