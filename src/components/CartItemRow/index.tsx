import styled from "styled-components"
import { CartItem, CartItemProps } from "../../types"
import { useDispatch } from 'react-redux';
import { addItemToCart,  decrementItemQuantity, removeItem } from "../../redux/sliceItems"

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

const CartItemRow: React.FC<CartItemProps> = ({ cart_item }) => {
    const dispatch = useDispatch();

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
    <CartItemDiv>
        <CartItemName>{cart_item.name}</CartItemName>
        <CartItemPrice>R${ cart_item.price}</CartItemPrice>
          <CardItemQuantityControll>
            {cart_item.quantity > 1 && 
                <span className="material-symbols-outlined" onClick={()=>handleDecrementCart(cart_item)}>remove</span>  }
            <CartItemQuantity> {cart_item.quantity}  </CartItemQuantity>
            <span className="material-symbols-outlined" onClick={()=>handleAddToCart(cart_item)} >add</span>    
            <span className="material-symbols-outlined" onClick={()=>handleRemoveFromCart(cart_item)}>delete</span>    
        </CardItemQuantityControll>  
    </CartItemDiv>
    )
}

export default CartItemRow