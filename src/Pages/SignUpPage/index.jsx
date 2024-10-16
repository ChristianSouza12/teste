import axios from "axios"; // Importa a biblioteca Axios para fazer requisições HTTP.
import { SignUpContainer, SignUpItens } from "./styles"; // Importa estilos personalizados para a página de cadastro.
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate do react-router-dom para navegação entre páginas.

function SignUpPage() {
    const navigate = useNavigate(); // Cria uma função de navegação para redirecionar o usuário.

    // Função para validar o formato do email
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar o formato do email.
        return emailRegex.test(email); // Retorna true se o email for válido, caso contrário, false.
    };

    

    // Função assíncrona que lida com o envio do formulário
    async function handleSubmit(e) {
        e.preventDefault(); // Previene o comportamento padrão do formulário de recarregar a página.
        
        const formData = new FormData(e.target); // Cria um objeto FormData a partir do formulário enviado.
        const email = formData.get('email'); // Obtém o email do formulário.
        const password = formData.get('password'); // Obtém a senha do formulário.
        const confirmPassword = formData.get('confirmPassword'); // Obtém a confirmação da senha do formulário.

        // Validações
        if (!isValidEmail(email)) {
            console.error('Email inválido'); // Loga erro se o email não for válido
            alert('Por favor, insira um email válido.'); // Exibe alerta para o usuário
            return; // Interrompe a execução se a validação falhar
        }

        if (password.length < 6) {
            console.error('A senha deve ter pelo menos 6 caracteres'); // Loga erro se a senha for muito curta
            alert('A senha deve ter pelo menos 6 caracteres.'); // Exibe alerta para o usuário
            return; // Interrompe a execução se a validação falhar
        }

        if (password !== confirmPassword) {
            console.error('As senhas não conferem'); // Loga erro se as senhas não coincidirem
            alert('As senhas não conferem. Por favor, tente novamente.'); // Exibe alerta para o usuário
            return; // Interrompe a execução se a validação falhar
        }

       

        const data = {
            name: formData.get('name'), // Obtém o nome do formulário
            email, // Usa o email validado
            password, // Usa a senha validada
        };

        try {
            // Faz uma requisição POST para cadastrar o novo usuário
            const response = await axios.post('http://localhost:5000/api/users/register', data);
            console.log('Usuário cadastrado com sucesso:', response.data); // Loga a resposta do servidor
            alert("Usuário cadastrado com sucesso, redirecionando para a página de login..."); // Alerta para o usuário sobre o cadastro bem-sucedido
            navigate("/login"); // Redireciona para a página de login após o cadastro
        } catch (error) {
            console.error('Erro ao cadastrar:', error); // Loga erro se a requisição falhar
            alert('Ocorreu um erro ao cadastrar o usuário. Por favor, tente novamente.'); // Exibe alerta para o usuário
        }
    }

    // Renderiza a página de cadastro
    return (
        <SignUpContainer>
            <h1>Crie sua conta</h1>
            <div className="red-square"></div>

            <SignUpItens as="form" onSubmit={handleSubmit}> {/* Configura o formulário para chamar handleSubmit ao ser enviado */}
                <p>Nome</p>
                <input name="name" required /> {/* Campo para o nome do usuário */}
                <p>Email</p>
                <input name="email" required /> {/* Campo para o email do usuário */}
                <p>Senha</p>
                <input name="password" type="password" required /> {/* Campo para a senha do usuário */}
                <p>Confirme sua senha</p>
                <input name="confirmPassword" type="password" required /> {/* Campo para a confirmação da senha do usuário */}

                <button type="submit">Criar Conta</button> {/* Botão para enviar o formulário */}
                <button type="button" onClick={() => navigate("/login")}>Voltar para Página de Login</button> {/* Botão para voltar à página de login */}
            </SignUpItens>
        </SignUpContainer>
    );
}

export default SignUpPage; // Exporta o componente SignUpPage para uso em outras partes do aplicativo.
