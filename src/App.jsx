import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [cpf, setCpf] = useState('')

  function verificaUsuario() {
    if (usuario === 'react' && senha === 'vite') {
      alert('ele gostou')
    } else {
      alert('ele está enfurecido')
    }
  }

  function verificarCPF(valor) {
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    return regex.test(valor)
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div>

        <button className="counter" onClick={() => setCount(count + 1)}>
          Clica: {count}
        </button>
      </section>

      <form className="form">
        <div>
          <label>Usuário</label>
          <input value={usuario} onChange={e => setUsuario(e.target.value)} />
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
        </div>

        <div>
          <label>CPF</label>
          <input
            value={cpf}
            onChange={e => setCpf(e.target.value)}
            style={{
              borderColor:
                cpf === '' ? '' : verificarCPF(cpf) ? 'green' : 'red'
            }}
          />
        </div>

        <button type="button" className="login-btn" onClick={verificaUsuario}>
          Login
        </button>
      </form>
    </>
  )
}

export default App