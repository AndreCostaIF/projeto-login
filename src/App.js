import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  //CASO QUERIA TROCAR O EMAIL E SENHA CORRETO PARA LOGIN, BASTA ALTERAR AQUI
  const trueEmail = 'teste@gmail.com'; //Email que vai ser usado para validação
  const truePassword = '123456'; //senha que vai ser usada para validação

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState(''); // Estado para mensagem de erro de login

  //Validação dos campos
  const validate = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Por favor, insira um email válido.';
      valid = false;
    }

    // Validação da senha
    if (password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  //Submit do login
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (trueEmail === email && truePassword === password) {
        setLoginError(''); // Limpar mensagem de erro em caso de sucesso
        alert('Login bem-sucedido!');
      } else {
        setLoginError('Email ou senha incorretos!'); // Definir mensagem de erro
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: '350px' }}>
        <h4 className="text-center mb-4">Login</h4>

        {/* Mensagem de erro de login */}
        {loginError && (
          <div className="alert alert-danger text-center p-2 mb-3" role="alert">
            {loginError}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* EMAIL */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>
          {/* SENHA */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="invalid-feedback">{errors.password}</div>
          </div>
          {/* BOTAO */}
          <button type="submit" className="btn w-100" style={{ backgroundColor: '#e9f035' }}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
