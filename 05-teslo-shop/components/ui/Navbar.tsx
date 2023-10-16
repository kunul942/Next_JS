import NextLink from 'next/link';
import {
    AppBar,
    Toolbar,
    Link,
    Typography,
    Box,
    Button,
    IconButton,
    Badge,
} from '@mui/material';

import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

export const Navbar = () => {
    return (
        <AppBar>
            <Toolbar>
                <Link
                    display='flex'
                    alignItems='center'
                    component={NextLink}
                    href='/'
                    passHref
                >
                    <Typography variant='h6'>Teslo |</Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <Link component={NextLink} href='/category/men' passHref>
                        <Button>Men</Button>
                    </Link>
                    <Link component={NextLink} href='/category/woman' passHref>
                        <Button>Woman</Button>
                    </Link>
                    <Link component={NextLink} href='/category/kid' passHref>
                        <Button>Children</Button>
                    </Link>
                </Box>

                <Box flex={1} />

                <IconButton>
                    <SearchOutlined />
                </IconButton>

                <Link component={NextLink} href='/cart' passHref>
                    <IconButton>
                        <Badge badgeContent={2} color='secondary'>
                            <ShoppingCartOutlined />
                        </Badge>
                    </IconButton>
                </Link>

                <Button>Menu</Button>
            </Toolbar>
        </AppBar>
    );
};
