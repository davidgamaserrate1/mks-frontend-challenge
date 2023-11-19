import { useState } from "react"
import styled from "styled-components"
import { Product } from "../../types"

const CartDiv = styled.div`
    width: 80px;
    height: 80px;
    background-color: #2D7AFA;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 24px;
    bottom: 24px;
    color: #fff;

    .material-symbols-outlined{
        font-size: 35px;
    }

    &:hover{
        cursor: pointer;
    }
`

const CartModal = styled.div`
    height: 400px;
    width: 300px;
    background-color: #fff;
    position: fixed;
    right: 24px;
    bottom: 110px;
    border: 1px solid #f0f0f0;
    border-radius: 15px;
    text-align: center;
`
const CartModalTittle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 8px;
    color: #2D7AFA;
    font-weight: bold;
    font-size: 18px;
`
const CartModalCloseButton = styled.div`
   position: relative;
    

   .material-symbols-outlined{
        position: absolute;
        right: 16px;
        top: 8px;
        color: #2D7AFA;
        &:hover{
            background-color: #f0f0f0;
            cursor: pointer;
            border-radius: 5px;
        }
    }
`

const Cart = ( ) =>{
    const [isOpen, setIsOpen] =useState(false)

    const onOpen = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>  
            {isOpen && 
                <CartModal >
                    <CartModalCloseButton>
                        <span onClick={onOpen} className="material-symbols-outlined">close</span>
                    </CartModalCloseButton>
                    <CartModalTittle> 
                        <span className="material-symbols-outlined">shopping_cart</span>  meu carinho
                    </CartModalTittle>
                    
                </CartModal>
            }
            <CartDiv onClick={onOpen}>
                <span className="material-symbols-outlined">shopping_cart</span>    
            </CartDiv>
        </>
    )
}

export default Cart