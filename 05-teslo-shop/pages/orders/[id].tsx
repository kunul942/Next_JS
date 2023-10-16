import NextLink from 'next/link';

import { CartList, OrderSummary } from '@/components/cart';
import { ShopLayout } from '@/components/layouts';
import {
    Box,
    Card,
    CardContent,
    Chip,
    Divider,
    Grid,
    Link,
    Typography,
} from '@mui/material';
import {
    CreditCardOffOutlined,
    CreditScoreOutlined,
} from '@mui/icons-material';

const OrderPage = () => {
    return (
        <ShopLayout
            title={'Resumen de 123456'}
            pageDescription={'Resumen de la orden'}
        >
            <Typography variant='h1' component='h1' sx={{ my: 2 }}>
                Orden: ABC123
            </Typography>

            {/* <Chip
                sx={{ my: 2 }}
                label='Pendiente de pago'
                variant='outlined'
                color='error'
                icon={<CreditCardOffOutlined />}
            /> */}
            <Chip
                sx={{ my: 2 }}
                label='Orden ya fue pagada'
                variant='outlined'
                color='success'
                icon={<CreditScoreOutlined />}
            />

            <Grid container>
                {/* CartList */}
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>

                {/* OrderSumamary */}
                <Grid item xs={12} sm={5}>
                    <Card className='summary-card'>
                        <CardContent>
                            <Typography variant='h2'>
                                Resumen (3 productos)
                            </Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box
                                sx={{ mb: 1 }}
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                            >
                                <Typography variant='subtitle1'>
                                    Direccion de entrega
                                </Typography>
                                <Link
                                    underline='always'
                                    component={NextLink}
                                    href='/checkout/address'
                                    passHref
                                >
                                    Editar
                                </Link>
                            </Box>

                            <Typography>Kunu Lee</Typography>
                            <Typography>332 Algun lugar</Typography>
                            <Typography>Stillville, HYA 23S</Typography>
                            <Typography>Canada</Typography>
                            <Typography>+1 123564874</Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box
                                sx={{ mb: 1 }}
                                display='flex'
                                justifyContent='end'
                            >
                                <Link
                                    underline='always'
                                    component={NextLink}
                                    href='/cart'
                                    passHref
                                >
                                    Editar
                                </Link>
                            </Box>

                            <OrderSummary />

                            <Box sx={{ mt: 3 }}>
                                {/* TODO */}
                                <h1>Pagar</h1>

                                <Chip
                                    sx={{ my: 2 }}
                                    label='Orden ya fue pagada'
                                    variant='outlined'
                                    color='success'
                                    icon={<CreditScoreOutlined />}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default OrderPage;
