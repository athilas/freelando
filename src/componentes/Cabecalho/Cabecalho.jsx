import styled from '@emotion/styled'

const CabecalhoEstilo = styled.header`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m};
    color: ${props => props.theme.cores.branco};
`
export const Cabecalho = ({children}) => {
    return(
        <CabecalhoEstilo>
            {children}
        </CabecalhoEstilo>
    )
}