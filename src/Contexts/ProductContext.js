import { createContext, useEffect, useState } from "react"; // Importa funções e hooks do React
import FormModal from "../Components/ModalForm"; // Importa o componente do modal de formulário
import api from "../services/api"; // Importa a configuração da API

export const ProductContext = createContext(); // Cria um contexto para os produtos

export function ProductContextProvider({ children }) {
    // Estado para controlar a abertura do modal
    const [openFormModal, setOpenFormModal] = useState(false);
    // Estados para armazenar os dados do produto
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubCategory] = useState("");
    const [categories, setCategories] = useState([]); // Estado para categorias
    const [subCategories, setSubCategories] = useState([]); // Estado para subcategorias
    const [id, setId] = useState(null); // Estado para ID do produto
    const [products, setProducts] = useState([]); // Estado para armazenar a lista de produtos

    // Efeito para buscar categorias, subcategorias e produtos ao iniciar
    useEffect(() => {
        api.get("http://localhost:5000/api/products/categories/all")
            .then(({ data }) => {
                setCategories(data); // Atualiza o estado com as categorias
                console.log("Categorias:", data);
            })
            .catch((error) => console.error('Erro ao buscar categorias:', error));
    
        api.get("http://localhost:5000/api/products/subcategories/all")
            .then(({ data }) => {
                setSubCategories(data); // Atualiza o estado com as subcategorias
                console.log("Subcategorias:", data);
            })
            .catch((error) => console.error('Erro ao buscar subcategorias:', error));

        // Buscando produtos ao iniciar
        api.get("http://localhost:5000/api/products")
            .then(({ data }) => {
                setProducts(data); // Atualiza o estado com os produtos
                console.log("Produtos:", data);
            })
            .catch((error) => console.error('Erro ao buscar produtos:', error));
    }, []);

    // Função para abrir o modal de adição de produto
    function handleAdd() {
        setOpenFormModal(true);
        setId(null); // Reseta o ID ao adicionar um novo produto
    }

    // Função para fechar o modal e limpar campos
    function handleClose() {
        setOpenFormModal(false);
        setName("");
        setPrice("");
        setCategory("");
        setSubCategory("");
        setId(null);
    }

    // Funções para lidar com alterações nos campos do formulário
    function nameHandler(event) {
        setName(event.target.value);
    }
    function priceHandler(event) {
        setPrice(event.target.value);
    }
    function categoryHandler(event) {
        setCategory(event.target.value);
    }
    function subCategoryHandler(event) {
        setSubCategory(event.target.value);
    }

    // Função para deletar um produto
    function handleDelete(productId) {
        console.log("Deletando produto com ID:", productId);
        api.delete(`http://localhost:5000/api/products/${productId}`)
            .then(response => {
                alert('Produto deletado com sucesso! Recarregue a página para atualizar a lista!');
                setProducts(products.filter(product => product.id !== productId)); // Atualiza a lista local
            })
            .catch(error => {
                console.error('Erro ao deletar o produto:', error);
                alert("Erro ao deletar o produto, tente novamente!");
            });
    }

    // Função para editar um produto
    function handleEdit(productName, productPrice, productCategory, productSubCategory, productId) {
        setName(productName);
        setPrice(productPrice);
        setCategory(productCategory);
        setSubCategory(productSubCategory);
        setId(productId);
        setOpenFormModal(true); // Abre o modal para edição
    }
    
    // Função para lidar com o envio do formulário
    function handleSubmit(event) {
        event.preventDefault();
    
        const product = {
            name,
            price,
            category,
            subcategory
        };
    
        // Verifica se todos os campos estão preenchidos
        if (!name || !price || !category || !subcategory) {
            console.error('Todos os campos são obrigatórios');
            return;
        }
    
        // Se um ID existe, atualiza o produto; caso contrário, adiciona um novo produto
        if (id) {
            api.put(`http://localhost:5000/api/products/${id}`, product)
                .then(response => {
                    alert('Produto atualizado com sucesso!');
                    setProducts(products.map(prod => (prod.id === id ? { ...prod, ...product } : prod))); // Atualiza a lista local
                    handleClose(); // Fecha o modal e limpa os campos
                })
                .catch(error => {
                    console.error('Erro ao atualizar o produto:', error);
                    alert("Erro ao atualizar o produto, tente novamente!");
                });
        } else {
            api.post("http://localhost:5000/api/products", product)
                .then(response => {
                    alert('Produto adicionado com sucesso!');
                    setProducts([...products, { ...product, id: response.data.id }]); // Adiciona o novo produto à lista local
                    handleClose(); // Fecha o modal e limpa os campos
                })
                .catch(error => {
                    console.error('Erro ao adicionar o produto:', error);
                    alert("Erro ao adicionar o produto, tente novamente!");
                });
        }
    }

    // Retorna o contexto de produtos
    return (
        <ProductContext.Provider value={{
            id, setId, handleEdit, handleSubmit, handleAdd,
            handleClose, name, setName, price, setPrice,
            category, setCategory, subcategory, setSubCategory,
            nameHandler, priceHandler, categoryHandler, subCategoryHandler,
            categories, subCategories, handleDelete, products
        }}>
            {children}
            {openFormModal && 
                <FormModal 
                    title={id ? "Edite seu produto" : "Adicionar Novo Produto"} // Título dinâmico
                />}
        </ProductContext.Provider>
    );
}
