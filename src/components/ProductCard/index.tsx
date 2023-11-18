import styled from "styled-components"
import { Product } from "../../types"

const ProductDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 243px;
    border: 1px solid rgb(1,1,1, 0.1);
    height: 360px;
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    &:hover {
        transition: 0.1s ease-in;
        transform: scale(1.01) ;
    }
     
`

const ProductImage = styled.img`
    margin: 0 100% ;
    width: 176px;
    height: 150px;
    background-color: red;     
`

const ProductName = styled.div`
    font-weight: bold;
    text-align: center;
     
`

const ProductDescription = styled.div`
    margin-left: 8px;
    text-align: left;
`

const ProductPriceAndCart = styled.div`  
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const ProductPrice = styled.div`   
font-weight :bold ;
`
const ProductAddCartButton = styled.button` 
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2D7AFA;
    border: none; 
    padding: 8px; 
    cursor: pointer;
    font-size: 1rem; 
    border-radius: 10px;
`;

const ProductCard = (props:Product) =>{
    return(
        <ProductDiv>
            <ProductImage src={props.photo} alt={props.name}/>
            <ProductName> {props.name} </ProductName>
            <ProductDescription> {props.description} </ProductDescription>
            
            <ProductPriceAndCart>
                <ProductPrice> R${props.price} </ProductPrice>
                <ProductAddCartButton>
                    <span className="material-symbols-outlined">shopping_cart</span>    
                    Adicionar
                </ProductAddCartButton>
            </ProductPriceAndCart>
        </ProductDiv>
    )
}

export default ProductCard