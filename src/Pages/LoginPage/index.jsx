import { LoginContainer, LoginItens } from "./styles"; // Importa os estilos personalizados para a página de login.
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate do react-router-dom para navegação entre páginas.
import { useState } from "react"; // Importa useState para gerenciar o estado local do componente.
import axios from 'axios'; // Importa a biblioteca Axios para fazer requisições HTTP.

function LoginPage() {
    const navigate = useNavigate(); // Cria uma função de navegação para redirecionar o usuário.
    const [email, setEmail] = useState(''); // Estado para armazenar o email do usuário.
    const [password, setPassword] = useState(''); // Estado para armazenar a senha do usuário.
    const [errorMessage, setErrorMessage] = useState(''); // Estado para armazenar mensagens de erro

    // Função assíncrona que lida com o envio do formulário
    async function handleSubmit(e) {
        e.preventDefault(); // Previene o comportamento padrão do formulário de recarregar a página.

        const data = {
            email, // Coleta o email do estado
            password, // Coleta a senha do estado
        };

        try {
            // Faz uma requisição POST para fazer login do usuário
            const response = await axios.post('http://localhost:5000/api/users/login', data);
            console.log('Login realizado com sucesso:', response.data); // Loga a resposta do servidor

            // Armazena o token no localStorage para autenticação futura
            localStorage.setItem('token', response.data.token);

            // Redireciona para a rota protegida após o login
            navigate('/'); // Redireciona para a página inicial
        } catch (error) {
            console.error('Erro ao fazer login:', error); // Loga erro se a requisição falhar

            // Define uma mensagem de erro para o usuário
            setErrorMessage('Email ou senha incorretos. Tente novamente.'); // Atualiza o estado para mostrar a mensagem de erro
        }
    }

    // Função para redirecionar para a página de cadastro
    function handleToSignUpPage() {
        navigate("/signup"); // Redireciona para a página de cadastro
    }

    // Renderiza a página de login
    return (
        <LoginContainer>
            <h1>Login Page</h1>

            <LoginItens as="form" onSubmit={handleSubmit}> {/* Configura o formulário para chamar handleSubmit ao ser enviado */}
                <p>Email</p>
                <input 
                    name="email" 
                    type="email" 
                    value={email} // Liga o valor do input ao estado email
                    onChange={(e) => setEmail(e.target.value)} // Atualiza o estado quando o valor do input muda
                    required // Torna o campo obrigatório
                />

                <p>Senha</p>
                <input 
                    name="password" 
                    type="password" 
                    value={password} // Liga o valor do input ao estado password
                    onChange={(e) => setPassword(e.target.value)} // Atualiza o estado quando o valor do input muda
                    required // Torna o campo obrigatório
                />

                <button type="submit">Entrar</button> {/* Botão para enviar o formulário */}
                <button type="button" onClick={handleToSignUpPage}>Criar Conta</button> {/* Botão para redirecionar à página de cadastro */}

                {errorMessage && <p style={{ color: 'red', fontSize: "14px", marginTop: "10px" }}>{errorMessage}</p>} {/* Exibe mensagem de erro se houver */}
            </LoginItens>
        </LoginContainer>
    );
}

export default LoginPage; // Exporta o componente LoginPage para uso em outras partes do aplicativo.
