//*yarn add date-fns

import { formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale';

export const getFormatDistanceToNow = ( date:number ) =>{

    //*segundo argumento cambia el idioma
    const fromNow = formatDistanceToNow( date, { locale: es } )

    return `hace ${ fromNow }`

}