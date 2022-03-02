import { useState } from "react"
import Botao from "./Botao"
import Input from "./Input"
import Cliente from "../core/Cliente"

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente : Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return(
        <div>
            {id ? (
                <Input somenteLeitura texto="Codigo" valor={id} />
            ) : false}

            <Input texto="Nome" valor={nome} valorMudou={setNome}/>
            <Input texto="Idade" tipo="number" valor={idade} valorMudou={setIdade} />

            <div className="flex justify-end mt-7">
                <Botao color="blue" className="mr-2" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}