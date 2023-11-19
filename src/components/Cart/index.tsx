import { useState } from "react"
import styled from "styled-components"
import { addItemToCart, countItens, decrementItemQuantity, removeItem, selectValue, useItems } from "../../redux/sliceItems"
import {useSelector} from 'react-redux'
import { CartItem } from "../../types"
import { useDispatch } from 'react-redux';
 
const CartDiv = styled.div`
    width: 50px;
    height: 50px;
    background-color: #2D7AFA;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 24px;
    bottom: 24px;
    color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);


    .material-symbols-outlined{
        font-size: 30px;
    }

    &:hover{
        cursor: pointer;
    }
`
const CartModal = styled.div`
    max-height: 600px;
    width: 350px;
    background-color: #fff;
    position: fixed;
    right: 24px;
    bottom: 110px;
    border: 1px solid #f0f0f0;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
const CartItems = styled.div`
    display: flex;
    flex-wrap: wrap;    
    justify-content: center;
    align-items: center;
    margin: 20px auto 0;
    max-height: 150px;
    overflow-y: scroll;
    border: 1px solid #f0f0f0;
    padding: 4px;
`

const CartItemDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content :space-around ;
    align-items: center;
    margin: 4px 0;
    border-bottom: 1px solid #f0f0f0;
    padding: 4px;
`
const CartItemName = styled.div`
   width: 33.33%;
   text-align: left;
`
const CartItemPrice = styled.div`
    width: 33.33%;
    text-align: center;
`
const CardItemQuantityControll = styled.div`
    display: flex;
    width: 33.33%;
    border: 1px solid #f0f0f0;
    justify-content: center;
    .material-symbols-outlined{
        &:hover{
            cursor: pointer;
        }
    }
`
const CartItemQuantity = styled.div`
    width: 33.33%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const CartItemTotal = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 8px;
    color: #2D7AFA;
    font-weight: bold;
`
const CartCountItems = styled.div`
    position    :absolute ;
    top: -8px ;
    right: -1px;
    background-color: #fff;
    border: 1px solid #f0f0f0;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-content: center;    
    color: #000;
    height: 20px;
    width: 20px;
`

const Cart = ( ) =>{
    const [isOpen, setIsOpen] =useState(false)
    const dispatch = useDispatch();

    const onOpen = ()=>{
        setIsOpen(!isOpen)
    }

    const items = useSelector(useItems)
    const total = useSelector(selectValue)
    const countItems = useSelector(countItens)

    const handleAddToCart = (item:CartItem) => {
        dispatch(addItemToCart(item)); 
    };
    const handleDecrementCart = (item:CartItem) => {
        dispatch(decrementItemQuantity(item)); 
    };

    const handleRemoveFromCart = (item:CartItem) => {
        dispatch(removeItem(item)); 
    };

 

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
                <CartItems>
                    {items.length> 0 ? (
                        items.map((item)=>(
                            <CartItemDiv>
                                <CartItemName>{item.name}</CartItemName>
                                <CartItemPrice>R${item.price}</CartItemPrice>
                                <CardItemQuantityControll>
                                    {item.quantity > 1 && <span className="material-symbols-outlined" onClick={()=>handleDecrementCart(item)}>remove</span>  }
                                    <CartItemQuantity> {item.quantity}  </CartItemQuantity>
                                    <span className="material-symbols-outlined" onClick={()=>handleAddToCart(item)}>add</span>    
                                    <span className="material-symbols-outlined" onClick={()=>handleRemoveFromCart(item)}>delete</span>    
                                </CardItemQuantityControll>
                            </CartItemDiv>
                        ))
                    ): <>Carrinho vazio</>
                    }
                    
                </CartItems>
                <CartItemTotal>
                    <div> Total</div>
                    <div>R${total} </div>
                </CartItemTotal>  
                
            </CartModal>
        }
        <CartDiv onClick={onOpen}>
         {countItems >=1 && <CartCountItems>{countItems} </CartCountItems>}
            <span className="material-symbols-outlined">shopping_cart</span>    
        </CartDiv>
        </>
    )
}

export default Cart