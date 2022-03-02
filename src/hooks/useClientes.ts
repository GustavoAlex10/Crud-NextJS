import { useEffect, useState } from "react";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../firebase/ColecaoCliente";
import useTabelaouForm from "./useTableorForm";

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()

    const {
        tabelaVisivel,
        formularioVisivel,
        exibirTabela,
        exibirFormulario,
      } = useTabelaouForm()
    


    const [clientes, setClientes] = useState<Cliente[]>([])
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  
    useEffect(obterTodos, []);    
  
    function obterTodos() {
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function selecionarCliente(cliente: Cliente) {
      setCliente(cliente)
      exibirFormulario()
  
    }
  
    async function excluirCliente(cliente: Cliente) {
      await repo.excluir(cliente)
      obterTodos()
    }
  
    async function salvarCliente(cliente: Cliente) {
      await repo.salvar(cliente)
      obterTodos()
    }
  
    function NovoCliente() {
      setCliente(Cliente.vazio())
      exibirFormulario()
    }
    return{
        cliente,
        clientes,
        NovoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        exibirTabela,
    }
}