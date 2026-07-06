import {ThemeProvider} from "@emotion/react";

const tema ={
    cores:{
        primarias:{
            a:'#5754ED',
            b:'',
            c:''
        },secundarias:{
            a:'#EBEAF9',
            b:'',
            c:''
        },
        dark:{
            a:'',
            b:''
        },
        neutras:{
            a:'',
            b:'',
            c:'',
            d:''
        },
        branco:'',
        atenção:'',
        focus:''

    },
    espacamentos:{
        s:'16px',
        l:'32px'
    },
    fontfamily:"'Montserrat', sans-serif"
}

export const ProvedorTema = ({children}) =>{
    return<ThemeProvider theme={tema}>
        {children}
    </ThemeProvider>
}