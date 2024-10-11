
import {Container,ContainerProducts,Title , Subtitle,Table,Td,Th,TrEven , ButtonAddNewProduct} from "./styles"
import {FaRegTrashAlt} from "react-icons/fa"
import { CiEdit } from "react-icons/ci";

import api from "../../services/api"
import { useEffect, useState } from "react"





   const InicialPage  = () => {

    

    const [products, setProducts] = useState([])

    useEffect(() => {
        api.get("http://localhost:5000/api/products").then(({data}) => {
            setProducts(data);
            console.log(data); 
        }).catch((error) => {
            console.error('Erro ao fazer requisição:', error);
        });
    }, []);


    

  


    return(
        <Container>
            <Title>Produtos</Title>
            <ContainerProducts>
                <p>Filtrar Por Categorias</p>
                <select>
                <option>Todos</option>
                <option>Eletronicos</option>
                <option>Moda</option>
                <option>Masculino</option>
                <option>Feminino</option>
                </select>
                <ButtonAddNewProduct>Adicionar Novo Produto</ButtonAddNewProduct>
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
        {products?.map((product, index) => (
            <TrEven key={product.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                <Td>{product.name}</Td>
                <Td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</Td>
                <Td>{product.category}</Td>
                <Td>{product.subcategory}</Td>
                <Td>
                    <button style={{cursor: "pointer", marginRight: "10%"}}>{<FaRegTrashAlt size={18}/>}</button>
                    <button style={{cursor: "pointer" , marginLeft: "10%"}}>{<CiEdit size={18} />}</button>
                </Td>
            </TrEven>
        ))}
    </tbody>
</Table>
            </ContainerProducts>
        </Container>

    )



   }


   export default InicialPage