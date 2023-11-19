import axios from 'axios'
import {useQuery} from 'react-query'
import { Product } from '../types'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import styled from 'styled-components'
import Cart from '../components/Cart'

const HomeStyles = styled.div`
    background-color: #FAFAFB;
    display: flex;
    justify-content: center;
    height: calc(100vh - 88px);
    gap: 16px;
    flex-wrap: wrap;
    position: relative;
`

const Products = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 1281px;
    height: 738px;
    padding: 94px 86px 0;
    gap: 16px;
    background-color: #FAFAFB;


`

const Home = ()=>{
    const products_api = process.env.REACT_APP_PRODUCTS_API_URL || ''
    const { data, isLoading, error } = useQuery("products", 
        ()=>{
            return axios
                .get(products_api.toString())
                .then((response)=>response.data)
            },{ retry: 3 })

    if(error){
        return(
            <div>
                Algo deu errado
            </div>
        )
    }

    return(
        <>
        <Header />
        <HomeStyles>
            <Products>
                { isLoading ?                
                    <div>
                        Carregando...
                    </div>
                    :
                    data.products
                        .map( (product:Product) => 
                            <ProductCard id={product.id} 
                                name={product.name} 
                                brand={product.name} 
                                description={product.description} 
                                photo={product.photo} 
                                price={product.price} 
                            />)
            
                }
            

            </Products>
            <Cart />
        </HomeStyles>
        </>
    )
}

export default Home