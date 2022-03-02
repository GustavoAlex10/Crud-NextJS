import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario";
import { useState, useEffect } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../firebase/ColecaoCliente";
import useClientes from "../hooks/useClientes";
import useTabelaouForm from "../hooks/useTableorForm";

export default function Home() {

 
    const { 
      cliente,
      clientes,
      tabelaVisivel,
      exibirTabela,
      selecionarCliente,
      excluirCliente,
      salvarCliente, 
      NovoCliente  
      } = useClientes()

  return (
    <div className={`flex h-screen justify-center items-center
    bg-gradient-to-r from-blue-500 to bg-purple-500`}>
      <Layout titulo="Cadastro Simples">

        {tabelaVisivel ? (
          <>

            <div className="flex justify-end">
              <Botao className="mb-4" onClick={NovoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={selecionarCliente} clienteExcluido={excluirCliente} />
          </>

        ) : (

        <Formulario cliente={cliente} cancelado={exibirTabela} clienteMudou={salvarCliente}/>

        )}

      </Layout>
    </div>
  )
}
