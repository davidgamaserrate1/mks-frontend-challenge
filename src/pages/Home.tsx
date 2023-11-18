import axios from 'axios'
import {useQuery} from 'react-query'
import { Product } from '../types'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import styled from 'styled-components'

const HomeStyles = styled.div`
    background-color: #FAFAFB;
    display: flex;
    justify-content: center;
    height: 100vh;
    gap: 16px;
    flex-wrap: wrap;
`

const Products = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 1281px;
    height: 738px;
    padding: 94px 86px 0;
    gap: 16px;

`

const Home = ()=>{
    const products_api = process.env.REACT_APP_PRODUCTS_API_URL || ''
    const { data, isLoading, error } = useQuery("products", 
        ()=>{
            return axios
                .get(products_api.toString())
                .then((response)=>response.data)
            },{
                retry: 3
        })
    
    if(isLoading){
        return(
            <div>
                Carregando...
            </div>
        )
    }

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
             {data.products.map((product:Product) =>
             <ProductCard 
                id={product.id} 
                name={product.name} 
                brand={product.name} 
                description={product.description} 
                photo={product.photo} 
                price={product.price}                
             />
             )}

            </Products>
        </HomeStyles>
        </>
    )
}

export default Home