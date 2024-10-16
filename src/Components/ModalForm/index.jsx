import { Overlay, Container, Header, FormContainer, FormMain, Footer, InputGroup, CloseIcon, CheckIcon } from "./styles"; // Importa os estilos e ícones
import React, { useContext } from "react"; // Importa React e useContext
import { ProductContext } from "../../Contexts/ProductContext"; // Importa o contexto de produtos

export default function FormModal({ title }) {
    // Obtém funções e estados do contexto de produtos
    const {
        handleClose, name, nameHandler, price, priceHandler,
        category, categoryHandler, subcategory, subCategoryHandler,
        categories, subCategories, handleSubmit
    } = useContext(ProductContext);

    return (
        <Overlay> {/* Sobreposição para o modal */}
            <Container> {/* Container principal do modal */}
                <Header> {/* Cabeçalho do modal */}
                    <strong>{title}</strong> {/* Título dinâmico */}
                    <button onClick={handleClose} style={{ cursor: "pointer" }} type="button"><CloseIcon /></button>
                </Header>
                <FormContainer onSubmit={handleSubmit}> {/* Formulário com manipulação de envio */}
                    <FormMain> {/* Conteúdo principal do formulário */}
                        <InputGroup>
                            <label htmlFor="name">Nome</label>
                            <input id="name" type="text" value={name} onChange={nameHandler} /> {/* Campo para nome do produto */}
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="price">Preço</label>
                            <input id="price" type="number" value={price} onChange={priceHandler} /> {/* Campo para preço do produto */}
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="category">Categoria</label>
                            <select id="category" value={category} onChange={categoryHandler}> {/* Seleção de categoria */}
                                <option value="">Selecione uma categoria</option>
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option> // Popula opções a partir de categorias
                                ))}
                            </select>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="subcategory">SubCategoria</label>
                            <select id="subcategory" value={subcategory} onChange={subCategoryHandler}> {/* Seleção de subcategoria */}
                                <option value="">Selecione uma subcategoria</option>
                                {subCategories.map((subCat, index) => (
                                    <option key={index} value={subCat}>{subCat}</option> // Popula opções a partir de subcategorias
                                ))}
                            </select>
                        </InputGroup>
                    </FormMain>
                    <Footer> {/* Rodapé do formulário */}
                        <button type="submit"> {/* Botão para enviar o formulário */}
                            <CheckIcon /> {/* Ícone de confirmação */}
                        </button>
                    </Footer>
                </FormContainer>
            </Container>
        </Overlay>
    );
}
