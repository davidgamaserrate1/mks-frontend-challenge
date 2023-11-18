import axios from 'axios'
import {useQuery} from 'react-query'
import { Product } from '../types'
import Header from '../components/Header'

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
             {data.products.map((product:Product) =>
             <div> {product.name} </div>
             )}
        </>
    )
}

export default Home