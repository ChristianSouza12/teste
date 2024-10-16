import axios from "axios"; // Importa a biblioteca Axios, que é usada para fazer requisições HTTP.

// Cria uma instância do Axios com uma URL base predefinida
const api = axios.create({
    baseURL: "http://localhost:5000/api/" // Define a URL base para todas as requisições que serão feitas com essa instância.
});

// Função para registrar um novo usuário
export const registerUser = async (userData) => {
    return await api.post("/users/register", userData); // Faz uma requisição POST para registrar o usuário, enviando os dados do usuário.
};

// Função para logar um usuário
export const loginUser = async (userData) => {
    return await api.post("/users/login", userData); // Faz uma requisição POST para logar o usuário, enviando os dados de login.
};

export default api; // Exporta a instância do Axios como padrão, permitindo que seja usada em outras partes do aplicativo.
