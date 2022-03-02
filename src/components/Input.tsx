interface InputProps {
    texto: string
    tipo?: 'string' | 'number'
    valor: any
    somenteLeitura?: boolean
    valorMudou?: (valor: any) => void

}

export default function Input(props: InputProps) {
    return(
        <div className="flex flex-col">
            <label>
                {props.texto}
            </label>
            <input
             type={props.tipo ?? 'text'}
             value={props.valor}
             readOnly={props.somenteLeitura}
             onChange={e=> props.valorMudou?.(e.target.value)}
             className={`
                border border-purple-500 rounded-lg focus outline-none bg-gray-100 px-4 py-2 
                ${props.somenteLeitura ? '' : 'focus:bg-white'}
             `}

            
             />
        </div>
    )
}