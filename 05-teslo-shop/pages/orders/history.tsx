import NextLink from 'next/link';
import { Chip, Grid, Typography, Link } from '@mui/material';
import {
    DataGrid,
    GridColDef,
    GridRowsProp,
    GridRenderCellParams,
} from '@mui/x-data-grid';

import { ShopLayout } from '@/components/layouts';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 300 },

    {
        field: 'paid',
        headerName: 'Pagada',
        description: 'Muestra información si está pagada o no',
        width: 200,
        renderCell: (params: GridRenderCellParams) => {
            return params.row.paid ? (
                <Chip color='success' label='Pagada' variant='outlined' />
            ) : (
                <Chip color='error' label='No pagada' variant='outlined' />
            );
        },
    },

    {
        field: 'orden',
        headerName: 'Ver orden',
        width: 200,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <Link
                    underline='always'
                    component={NextLink}
                    href={`/orders/${params.row.id}`}
                    passHref
                >
                    Ver orden
                </Link>
            );
        },
    },
];

const rows: GridRowsProp = [
    { id: 1, paid: true, fullname: 'Kunu Lee' },
    { id: 2, paid: false, fullname: 'Melisa flors' },
    { id: 3, paid: true, fullname: 'Kunji Ramirez' },
    { id: 4, paid: false, fullname: 'Josue Lee' },
    { id: 5, paid: false, fullname: 'Julio Xol' },
    { id: 6, paid: true, fullname: 'Douglas Lopez' },
];

const HistoryPage = () => {
    return (
        <ShopLayout
            title={'Historial de Ordenes'}
            pageDescription={'Historial de ordenes del cliente '}
        >
            <Typography component='h1'>Historial de ordenes</Typography>

            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10, 25]}
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default HistoryPage;
