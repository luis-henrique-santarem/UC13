import { useState } from 'react'  // Importa o hook useState do React, usado para criar estados na função
import './App.css'                // Importa o arquivo de estilos CSS para estilizar a página

export default function App() {
  // Lembrando:
  // 1º - variável que guarda o estado atual
  // 2º - função usada para atualizar o estado
  // 3º - dentro de useState, colocamos o valor inicial que o estado vai ter

  // Aqui criamos uma variável para guardar o valor do CEP e uma função que atualiza o CEP
  const [cep, setCep] = useState('')

  // Aqui criamos uma outra variável que guarda um endereço e uma função que atualiza esse endereço
  const [address, setAddress] = useState(null)

  // Função chamada sempre que o usuário digita algo no input
  function handleCepChange(e) {
    // Mantém apenas números e limita o CEP a 8 caracteres
    // e.target.value = valor digitado no input
    // Quando você digita algo no input, o navegador gera um evento
    // Esse evento é enviado automaticamente para a função handleCepChange
    // 'e' representa esse evento
    // 'target' é o elemento HTML que disparou o evento (por exemplo, o input)
    // 'value' é a propriedade do elemento input que contém o texto que o usuário digitou
    setCep(e.target.value.replace(/\D/g, '').slice(0, 8)) 
  }

  // Função chamada quando o usuário envia o formulário (clica no botão "Buscar")
  async function handleSubmit(e) {
    e.preventDefault()  // Evita que a página recarregue ao enviar o formulário
    setAddress(null)    // Limpa o endereço anterior, caso exista

    // Verifica se o CEP tem exatamente 8 dígitos
    if (cep.length !== 8) return // Se não tiver, simplesmente retorna e não faz nada

    try {
      // Faz a requisição para a URL da API do ViaCEP
      // A URL é construída concatenando o CEP digitado
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`, {
        method: 'GET',                        // Método HTTP da requisição
        headers: { Accept: 'application/json' }, // Cabeçalhos da requisição: diz que esperamos JSON
      })

      // Converte a resposta da requisição em objeto JavaScript
      const data = await response.json()

      // Verifica se a API retornou erro (CEP inexistente)
      if (data.erro) return

      // Atualiza o estado com o endereço retornado
      setAddress(data)
    } catch (err) {
      // Captura qualquer erro que aconteça durante a requisição ou conversão
      console.error('Erro ao buscar CEP:', err)
    }
  }

  // JSX da interface: HTML dentro do React
  return (
    <div className="container"> {/* Container principal da página */}
      <h1>Busca CEP (ViaCEP)</h1> {/* Título */}
      <p className="subtitle">Digite um CEP e descubra o endereço completo.</p> {/* Subtítulo */}

      <div className="card"> {/* Card que envolve o formulário e resultados */}
        <form onSubmit={handleSubmit} className="form"> {/* Formulário que chama handleSubmit */}
          <label className="label" htmlFor="cep">CEP</label> {/* Label do input */}
          <div className="inputRow"> {/* Linha com input e botão */}
            <input
              id="cep"                            
              type="text"                         
              placeholder="Somente números (ex: 01001000)" 
              value={cep}                         // Valor controlado pelo estado
              onChange={handleCepChange}          // Chama handleCepChange ao digitar
              inputMode="numeric"                 // Sugere teclado numérico em dispositivos móveis
              autoFocus                            // Foca o input ao abrir a página
            />
            <button type="submit">
              Buscar {/* Texto do botão */}
            </button>
          </div>
        </form>

        {/* Mostra o endereço encontrado, caso exista */}
        {address && (
          <div className="result">
            <h2>Endereço</h2>
            <ul>
              <li><strong>Logradouro:</strong> {address.logradouro || '—'}</li>
              <li><strong>Bairro:</strong> {address.bairro || '—'}</li>
              <li><strong>Cidade:</strong> {address.localidade || '—'}</li>
              <li><strong>UF:</strong> {address.uf || '—'}</li>
              <li><strong>CEP:</strong> {address.cep || cep}</li>
              <li><strong>DDD:</strong> {address.ddd || '—'}</li>
            </ul>
          </div>
        )}

        {/* Footer com crédito da API */}
        <footer>
          <small>
            Dados por <a href="https://viacep.com.br" target="_blank" rel="noreferrer">ViaCEP</a>
          </small>
        </footer>
      </div>
    </div>
  )
}

