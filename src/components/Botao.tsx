interface BotaoProps{
    color?: 'green'| 'blue' | 'gray'
    children: any
    onClick?: () => void
    className: any
}

export default function Botao(props: BotaoProps){

    return(
        <button onClick={props.onClick} className={`
        bg-gradient-to-r from-blue-400 to-blue-700
        text-white px-4 py-2 rounded-md
        ${props.className}
        `}>
            {props.children}
        </button>
    )
}