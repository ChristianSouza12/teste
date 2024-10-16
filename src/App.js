import React from 'react'; // Importa a biblioteca React, essencial para criar componentes React.
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa componentes de roteamento do React Router.
import InicialPage from './Pages/InicialPage'; // Importa o componente da página inicial.
import LoginPage from './Pages/LoginPage'; // Importa o componente da página de login.
import { ProductContextProvider } from './Contexts/ProductContext'; // Importa o provedor de contexto de produtos.
import SignUpPage from './Pages/SignUpPage'; // Importa o componente da página de cadastro.

function App() { // Declara o componente App.
  return (
    <ProductContextProvider> {/* Envolve o aplicativo com o provedor de contexto para gerenciar o estado dos produtos. */}
      <Router> {/* Inicia o roteamento do aplicativo. */}
        <Routes> {/* Define as rotas do aplicativo. */}
          {/* Rota para a página inicial */}
          <Route path="/" element={<InicialPage />} /> {/* Renderiza InicialPage quando o caminho é "/" */}

          {/* Rota para a página de login */}
          <Route path="/login" element={<LoginPage />} /> {/* Renderiza LoginPage quando o caminho é "/login" */}

           {/* Rota para a página de Cadastro */}
           <Route path="/signup" element={<SignUpPage />} /> {/* Renderiza SignUpPage quando o caminho é "/signup" */}
        </Routes>
      </Router>
    </ProductContextProvider>
  );
}

export default App; // Exporta o componente App como padrão.
