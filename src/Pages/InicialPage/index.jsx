import { Container, ContainerProducts, Title, Subtitle, Table, Td, Th, TrEven, ButtonAddNewProduct, ButtonToLogout, DivToButton } from "./styles"; // Importa os componentes de estilo
import { FaRegTrashAlt } from "react-icons/fa"; // Importa o ícone de lixeira
import { CiEdit } from "react-icons/ci"; // Importa o ícone de editar
import { ProductContext } from "../../Contexts/ProductContext"; // Importa o contexto de produtos
import api from "../../services/api"; // Importa a configuração da API
import { useContext, useEffect, useState } from "react"; // Importa hooks do React
import { useNavigate } from "react-router-dom"; // Para redirecionamento

const InicialPage = () => {
    const navigate = useNavigate(); // Cria uma função de navegação para redirecionar o usuário
    const { handleAdd } = useContext(ProductContext); // Desestrutura a função de adicionar produtos do contexto
    const [products, setProducts] = useState([]); // Estado para armazenar a lista de produtos
    const [selectedCategory, setSelectedCategory] = useState("Todos"); // Estado para armazenar a categoria selecionada

    // Verificação de token para proteger a página
    useEffect(() => {
        const token = localStorage.getItem('token'); // Verifica se há um token armazenado

        if (!token) {
            // Se não houver token, redireciona para a página de login
            navigate('/login');
        } else {
            // Se houver token, você pode opcionalmente verificar sua validade fazendo uma requisição ao backend
            api.get("http://localhost:5000/api/products", {
                headers: { Authorization: `Bearer ${token}` }, // Envia o token no cabeçalho
            })
            .then(({ data }) => {
                setProducts(data); // Atualiza o estado com os produtos recebidos do servidor
            })
            .catch((error) => {
                console.error('Erro ao fazer requisição:', error);
                if (error.response && error.response.status === 401) {
                    // Token inválido ou expirado, redirecionar para login
                    navigate('/login');
                }
            });
        }
    }, [navigate]);

    // Função de logout
    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove o token do localStorage
        navigate('/login'); // Redireciona para a página de login
    };

    // Filtrar produtos com base na categoria selecionada
    const filteredProducts = selectedCategory === "Todos"
        ? products // Se a categoria selecionada for "Todos", exibe todos os produtos
        : products.filter(product => product.category === selectedCategory); // Filtra produtos pela categoria

    const { handleEdit, handleDelete } = useContext(ProductContext); // Desestrutura as funções de editar e excluir produtos do contexto

    return (
        <Container>
            <Title>Produtos</Title>
            
            {/* Botão de Logout */}
            <DivToButton>
                <ButtonToLogout onClick={handleLogout}>Sair</ButtonToLogout>
            </DivToButton>
            
            <ContainerProducts>
                <p>Filtrar Por Categorias</p>
                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="Todos">Todos</option>
                    <option value="eletronicos">Eletrônicos</option>
                    <option value="moda">Moda</option>
                    <option value="eletrodomésticos">Eletrodomésticos</option>
                    <option value="acessórios">Acessórios</option>
                </select>
                <ButtonAddNewProduct onClick={handleAdd}>Adicionar Novo Produto</ButtonAddNewProduct>
               
                <Subtitle>Lista de Produtos</Subtitle>

                <Table>
                    <thead>
                        <tr>
                            <Th>Produto</Th>
                            <Th>Preço</Th>
                            <Th>Categoria</Th>
                            <Th>Subcategoria</Th>
                            <Th>Ações</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredProducts.map((product, index) => (
                            <TrEven key={product.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                                <Td>{product.name}</Td>
                                <Td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Td>
                                <Td>{product.category}</Td>
                                <Td>{product.subcategory}</Td>
                                <Td>
                                    <button data-type="delete" style={{ cursor: "pointer", marginRight: "10%" }}>
                                        <FaRegTrashAlt size={18} onClick={() => handleDelete(product.id)} /> {/* Ícone de exclusão */}
                                    </button>
                                    <button data-type="edit" style={{ cursor: "pointer", marginLeft: "10%" }}>
                                        <CiEdit size={18} onClick={() => handleEdit(product.name, product.price, product.category, product.subcategory, product.id)} /> {/* Ícone de edição */}
                                    </button>
                                </Td>
                            </TrEven>
                        ))}
                    </tbody>
                </Table>
            </ContainerProducts>
        </Container>
    );
}

export default InicialPage; // Exporta o componente InicialPage para uso em outras partes do aplicativo.
