import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const lightTheme = createTheme({
  //*PALETA DE COLORES
    palette:{
      mode:'light',
      background:{
        default:grey[400]
      },
      primary:{
        main:'#4a148c'
      },
      secondary:{
        main:'#19874b'
      },
      error:{
        main: red.A400
      }
    },

    //*COMPONENTES ESPECIALIZADOS
    components:{
      MuiAppBar:{
        defaultProps:{
            elevation: 0
        },
        styleOverrides:{}
      }
    }
})