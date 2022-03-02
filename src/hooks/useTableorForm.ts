import { useState } from "react";

export default function useTabelaouForm(){
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

        return{
            exibirFormulario,
            exibirTabela,
            formularioVisivel: visivel === 'form',
            tabelaVisivel: visivel === 'tabela',
        }
}